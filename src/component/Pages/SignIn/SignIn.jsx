import { Link, useNavigate } from 'react-router-dom';
import img from '../../../assets/other/login.png'
import { useContext, useRef } from "react";
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../../Shared/SocialLogin';
import logo from "../../../assets/logo/logo.png"
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../../Firebase/firebase.config';
const auth = getAuth(app);
const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const [Error, setError] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate()
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        if (loggedUser) {
          Swal.fire(
            'Good job!',
            'Login Successful',
            'success'
          )
          navigate('/myProfile');
        }
      })
    .catch((error) =>
      setError(error.message),
    );

  }
  const handleReset = event =>{
    const email = emailRef.current.value;
    if(!email){
      console.log('please provide your email address to reset password');
      return;
    }
    sendPasswordResetEmail(auth, email)
    .then(() =>{
      alert('check your email')
    })
    .catch(error =>{
      console.log(error);
      setError(error.message)
    })
  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl w-[80%] mx-auto  rounded-3xl h-[50%] my-20">

      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Sign In</title>
      </Helmet>

      <figure className="lg:w-[50%] ">
          <img className="xl:object-cover hidden lg:flex lg:-ml-24 lg:h-[750px]  " src={img} alt="" />
        </figure>
      <div className="card-body">
        <div className='text-center mb-5'>
          <img className='w-52 mx-auto mt-10' src={logo} alt="" />
        </div>
        <p className='text-center text-[#a2a2a2] text-xl'>Welcome to SoulMate</p>
        <form onSubmit={handleSignIn} className='flex flex-col gap-6 mx-4 md:mx-0' action="">

          {/* Email field*/}
          <div>
            <div className="relative z-0">
              <input ref={emailRef} name='email' type="email" id="standard_success" aria-describedby="standard_success_help" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none  dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer" placeholder=" " required />
              <label htmlFor="standard_success" className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User name or Email</label>
            </div>
            {/* This paragraph is for input validation. if user inter invalid email or password this paragraph will be shown and text color will be red */}
            <p id="standard_success_help" className="hidden mt-2 text-xs text-[#a2a2a2] dark:text-gray-400"><span className="font-medium">Well done!</span> Some success message.</p>
          </div>

          {/* password field*/}
          <div>
            <div className="relative z-0">
              <input name='password' type="password" id="standard_success" aria-describedby="standard_success_help" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none  dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer" placeholder=" " required />
              <label htmlFor="standard_success" className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            {/* This paragraph is for input validation. if user inter invalid email or password this paragraph will be shown and text color will be red */}
            <p id="standard_success_help" className="hidden mt-2 text-xs text-[#a2a2a2] dark:text-gray-400"><span className="font-medium">Well done!</span> Some success message.</p>
          </div>
          <p className='text-sm text-[#a2a2a2] text-right'><button onClick={handleReset} className='btn btn-link text-red-500'>Forgot password?</button> </p>
          <button className='btn red-primary text-gray-300 w-[40%] md:w-[25%] rounded-full mx-auto hover:bg-[#b15245]'>SignIn</button>
         
        </form>

        
        {Error && <p className="text-red-600 text-center">{Error}</p>}
        <p className='text-center text-[#a2a2a2] '>New to soulmate? <Link className='red-text' to="/signup">Create an account</Link></p>
      </div>
      
    </div>
  );
};

export default SignIn;