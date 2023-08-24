import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth.user;
}

export default useAuth;