import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import img from "../../../assets/other/login.png";
import logo from "../../../assets/logo/logo.png";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

const Image_Hosting_Token = import.meta.env.VITE_Image_Upload_Token;
const SignUp = () => {
  const navigate = useNavigate("/");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Token}`;

  const onSubmit = (data) => {
    const strCart1 = JSON.parse(localStorage.getItem("step1"));
    const strCart2 = JSON.parse(localStorage.getItem("step2"));
    const mergedObject = { ...strCart1, ...strCart2 };

    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        const imgUrl = imgResponse.data.display_url;
        createUser(data.email, data.password)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, imgUrl)
              .then(() => {
                const saveUser = {
                  mobile: data.mobile,
                  email: data.email,
                  img: imgUrl,
                  status: "User",
                  ...mergedObject,
                };
                fetch("https://harmony-matrimony-server.vercel.app/alluser", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      reset();
                      localStorage.removeItem("step1");
                      localStorage.removeItem("step2");
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User created successfully.",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate("/");
                    }
                  });
              })
              .catch((error) => console.log(error));
          })
      })
     
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl w-[80%] mx-auto  rounded-3xl h-[50%] my-20">

      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Sign Up</title>
      </Helmet>
      
      <figure className="w-[50%]">
        <img className="object-cover -ml-24 h-[750px] " src={img} alt="" />
      </figure>
      <div className="card-body">
        <div className="text-center mb-5">
          <img className="w-52 mx-auto mt-10" src={logo} alt="" />
        </div>
        <p className="text-center text-[#a2a2a2] text-xl">
          Welcome to SoulMate
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 mx-4 md:mx-0 mb-24"
        >
          {/* photo field*/}
          <div>
            <div className="relative z-0 ">
              <input
                name="photo"
                {...register("image", { required: true })}
                type="file"
                id="standard_success"
                aria-describedby="standard_success_help"
                className="
               file-input block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none w-full dark:text-white dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer"
                placeholder=""
                required
              />
              <label
                htmlFor="standard_success"
                className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Photo Url
              </label>
            </div>
            {/* This paragraph is for input validation. if user inter invalid email or password this paragraph will be shown and text color will be red */}
            <p
              id="standard_success_help"
              className="hidden mt-2 text-xs text-[#a2a2a2] dark:text-gray-400"
            >
              <span className="font-medium">Well done!</span> Some success
              message.
            </p>
          </div>

          {/* phone num field*/}
          <div>
            <div className="relative z-0">
              <input
                name="mobile"
                {...register("mobile", { required: true })}
                type="number"
                id="standard_success"
                aria-describedby="standard_success_help"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none dark:text-white dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="standard_success"
                className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mobile No.
              </label>
            </div>
            {/* This paragraph is for input validation. if user inter invalid email or password this paragraph will be shown and text color will be red */}
            <p
              id="standard_success_help"
              className="hidden mt-2 text-xs text-[#a2a2a2] dark:text-gray-400"
            >
              <span className="font-medium">Well done!</span> Some success
              message.
            </p>
          </div>

          {/* Email field*/}
          <div>
            <div className="relative z-0">
              <input
                name="email"
                {...register("email", { required: true })}
                type="email"
                id="standard_success"
                aria-describedby="standard_success_help"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none dark:text-white dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="standard_success"
                className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User name or Email
              </label>
            </div>
            {/* This paragraph is for input validation. if user inter invalid email or password this paragraph will be shown and text color will be red */}
            <p
              id="standard_success_help"
              className="hidden mt-2 text-xs text-[#a2a2a2] dark:text-gray-400"
            >
              <span className="font-medium">Well done!</span> Some success
              message.
            </p>
          </div>

          {/* password field*/}
          <div>
            <div className="relative z-0">
              <input
                name="password"
                {...register("password", { required: true })}
                type="password"
                id="standard_success"
                aria-describedby="standard_success_help"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none dark:text-white dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="standard_success"
                className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            {/* This paragraph is for input validation. if user inter invalid email or password this paragraph will be shown and text color will be red */}
            <p
              id="standard_success_help"
              className="hidden mt-2 text-xs text-[#a2a2a2] dark:text-gray-400"
            >
              <span className="font-medium">Well done!</span> Some success
              message.
            </p>
          </div>
          <button className="btn bg-gray-500 text-gray-300 w-[40%] md:w-[25%] rounded-full mx-auto hover:text-black">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
