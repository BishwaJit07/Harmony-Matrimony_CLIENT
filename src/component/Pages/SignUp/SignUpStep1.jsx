import img from "../../../assets/other/login.png";
import logo from "../../../assets/logo/logo.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { calculateAge } from "../../../utilities/utilities";
import { Helmet } from "react-helmet";

const SignUpStep1 = () => {
  const navigate = useNavigate("/");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const birthdate = new Date(data.birth);
    const age = calculateAge(birthdate);
    const addData = { age, ...data };

    const strCart = localStorage.getItem("step1");
    if (strCart) {
      localStorage.removeItem("step1");
    }
    localStorage.setItem("step1", JSON.stringify(addData));
    navigate("/signup/step-2");
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
          className="flex flex-col gap-6 mx-4 md:mx-0"
        >
          {/*profile select field*/}
          <div>
            <div className="relative z-0">
              <select
                className="select select-bordered w-full max-w-xs"
                id="profile"
                {...register("profile")}
              >
                <option selected disabled value="">
                  This Profile is for
                </option>
                <option value="Myself">Myself</option>
                <option value="Son">My Son</option>
                <option value="Daughter">My Daughter</option>
                <option value="Brother">My Brother</option>
                <option value="Sister">My Sister</option>
                <option value="Friend">My Friend</option>
                <option value="Relative">My Relative</option>
              </select>
            </div>
          </div>

          {/*marital status field*/}
          <div>
            <div className="relative z-0">
              <select
                className="select select-bordered w-full max-w-xs"
                id="marital_status"
                {...register("marital_status")}
              >
                <option selected disabled value="">
                  Marital Status
                </option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
                <option value="Separated">Separated</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* name field*/}
          <div>
            <div className="relative z-0">
              <input
                name="name"
                {...register("name", { required: true })}
                type="text"
                id="standard_success"
                aria-describedby="standard_success_help"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none dark:text-white dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer"
                required
              />
              <label
                htmlFor="standard_success"
                className="absolute text-md text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full Name
              </label>
            </div>
          </div>

          {/*gender select field*/}
          <div>
            <div className="grid grid-cols-3 items-center">
              <div>
                <label
                  htmlFor="gender"
                  className="text-md text-[#a2a2a2] dark:text-gray-500"
                >
                  Gender
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-2">
                  <input
                    type="radio"
                    name="gender"
                    className="radio checked:bg-gray-500"
                    value="Male"
                    {...register("gender")}
                  />
                  <span className="label-text">Male</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-2">
                  <input
                    type="radio"
                    name="gender"
                    className="radio checked:bg-gray-500"
                    value="Female"
                    {...register("gender")}
                  />
                  <span className="label-text">Female</span>
                </label>
              </div>
            </div>
          </div>

          {/* birthdate field*/}
          <div>
            <div className="grid grid-cols-2 gap-2 items-center">
              <label
                htmlFor="standard_success"
                className="text-md text-[#a2a2a2] dark:text-gray-500"
              >
                Birth Date
              </label>
              <input
                name="birth"
                {...register("birth", { required: true })}
                type="date"
                id="standard_success"
                aria-describedby="standard_success_help"
                className="block py-2.5 px-0 w-full text-sm text-gray-900  border-[#a2a2a2] dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer"
                required
              />
            </div>
          </div>

          <button className="btn bg-gray-500 text-gray-300 w-[40%] md:w-[25%] rounded-full mx-auto hover:text-black">
            SignUp
          </button>
        </form>

        <div className="text-center text-[#a2a2a2] flex justify-center items-center gap-4 ">
          <hr className="w-full ml-8 " />
          <span>or</span>
          <hr className="w-full mr-8" />
        </div>

        <p className="text-center text-[#a2a2a2] ">
          Already have an account?
          <Link className="red-text" to="/signIn">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpStep1;
