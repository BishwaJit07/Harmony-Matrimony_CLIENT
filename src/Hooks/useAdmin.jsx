import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://harmony-matrimony-server.vercel.app/${user?.email}`);
            return res.json();
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;