import { BsGoogle } from "react-icons/bs";
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const SocialLogin = () => {
    const navigate = useNavigate();
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                if (loggedInUser){
                    Swal.fire(
                      'Good job!',
                      'Login Successful',
                      'success'
                    )
                    navigate('/');
                  }
            })
    }
    return (
        <div >
            <div className='flex gap-4 red-primary py-2 px-4 rounded-md hover:bg-[#b15245]'>
                <button onClick={handleGoogleSignIn} className='text-2xl'><BsGoogle /></button>
                <p className='text-center'>Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;