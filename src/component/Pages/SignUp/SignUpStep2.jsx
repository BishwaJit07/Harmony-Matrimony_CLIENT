import img from "../../../assets/other/login.png";
import logo from "../../../assets/logo/logo.png";
import { useForm } from "react-hook-form";
import countries from "countries-list";
import { useNavigate } from "react-router-dom";

const SignUpStep2 = () => {
  const navigate = useNavigate("/");
  const { register, handleSubmit } = useForm();

  const countryNames = Object.values(countries.countries).map(
    (country) => country.name
  );

  const onSubmit = (data) => {
    const strCart = localStorage.getItem("step2");
    if (strCart) {
      localStorage.removeItem("step2");
    }
    localStorage.setItem("step2", JSON.stringify(data));
    navigate("/signup/final_signup");
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl w-[80%] mx-auto  rounded-3xl h-[50%] my-20">
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
          {/* religion field*/}
          <div className="relative z-0">
            <label className="label">
              <span className="label-text">Your Religion</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              id="religion"
              {...register("religion")}
            >
              <option selected disabled value="">
                Religion
              </option>
              <option value="Muslim">Muslim</option>
              <option value="Hindu">Hindu</option>
              <option value="Christian">Christian</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Community field*/}
          <div className="relative z-0">
            <label className="label">
              <span className="label-text">Your Community</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              id="community"
              {...register("community")}
            >
              <option selected disabled value="">
                Community
              </option>
              <option value="Bengali">Bengali</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* country field*/}
          <div className="relative z-0">
            <label className="label">
              <span className="label-text">Your Country</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              id="country"
              {...register("country")}
            >
              <option selected disabled value="">
                Country
              </option>
              {countryNames.map((countryName) => (
                <option key={countryName} value={countryName}>
                  {countryName}
                </option>
              ))}
            </select>
          </div>

          {/* state name field*/}
          <div>
            <div className="relative z-0">
              <input
                name="state"
                {...register("state")}
                type="text"
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
                State Name
              </label>
            </div>
          </div>

          <button className="btn bg-gray-500 text-gray-300 w-[40%] md:w-[25%] rounded-full mx-auto hover:text-black">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpStep2;
