import { Link } from 'react-router-dom';
import img from '../../../assets/Groom-and-bride-wedding-vector-vector.jpg'
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="w-full  grid grid-cols-1 md:grid-cols-2 items-center ">
      <img className='w-full object-cover ' src={img} alt="" />
      <div className="md:px-12 md:py-10 space-y-6 my-8 md:my-0">
        <p className='font-soul text-4xl text-center'>SoulMate</p>
        <p className='text-center text-[#a2a2a2] text-xl'>Welcome to SoulMate</p>
        <form className='flex flex-col gap-6 mx-4 md:mx-0' action="">
            
            {/* Email field*/}
            <div>
              <div className="relative z-0">
                <input type="email" id="standard_success" aria-describedby="standard_success_help" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none dark:text-white dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer" placeholder=" " required/>
                <label htmlFor="standard_success" className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User name or Email</label>
              </div>
              {/* This paragraph is for input validation. if user inter invalid email or password this paragraph will be shown and text color will be red */}
              <p id="standard_success_help" className="hidden mt-2 text-xs text-[#a2a2a2] dark:text-gray-400"><span className="font-medium">Well done!</span> Some success message.</p>
            </div>

          {/* password field*/}
          <div>
            <div className="relative z-0">
              <input type="password" id="standard_success" aria-describedby="standard_success_help" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none dark:text-white dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer" placeholder=" " required/>
              <label htmlFor="standard_success" className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            {/* This paragraph is for input validation. if user inter invalid email or password this paragraph will be shown and text color will be red */}
            <p id="standard_success_help" className="hidden mt-2 text-xs text-[#a2a2a2] dark:text-gray-400"><span className="font-medium">Well done!</span> Some success message.</p>
          </div>
          <p className='text-sm text-[#a2a2a2] text-right'><Link className='red-text'>Forgot password?</Link> </p>
          <button className='btn bg-gray-500 text-gray-300 w-[40%] md:w-[25%] rounded-full mx-auto hover:text-black'>SignIn</button>
        </form>
        
        <div className='text-center text-[#a2a2a2] flex justify-center items-center gap-4 '> <hr className='w-full ml-8 '/><span>or</span><hr className='w-full mr-8'/> </div>
        <div className="flex justify-center items-center gap-4">
          <FcGoogle className='text-2xl' />
          <p className='text-center'>Sign In with Google</p>
        </div>
        <p className='text-center text-[#a2a2a2] '>New to soulmate? <Link className='red-text' to="/signup">Create an account</Link></p>
      </div>
    </div>
  );
};

export default SignIn;