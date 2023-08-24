
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

import useAxiosSecure from './useAxiosSecure'



const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const {data: isAdmin ,isLoading: isAdminLoading} = useQuery({
        queryKey : ["isAdmin", user?.email],
        enabled : !loading,
        queryFn : async () => {
            const res = await axiosSecure.get(`http://localhost:5000/users/admin/${user.email}`)



            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;