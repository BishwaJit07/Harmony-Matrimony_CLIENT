import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useMyData = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: userInfo = [], refetch } = useQuery({
        queryKey: ['userInfo'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/userInfo?email=${user.email}`);
            return res.data;
        }
    })
    return [userInfo, refetch]
};

export default useMyData;

