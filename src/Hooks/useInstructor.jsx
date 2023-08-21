import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const {user} = useContext(AuthContext)
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allUser/instructor/${user?.email}`);
            return res.json();
        }
    })
    return [isInstructor, isInstructorLoading];
}
export default useInstructor;