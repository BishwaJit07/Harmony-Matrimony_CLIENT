import { FcGoogle } from "react-icons/fc";
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
            <div className='flex'>
                <button onClick={handleGoogleSignIn} className='text-2xl'><FcGoogle /></button>
                <p className='text-center'>Sign In with Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;