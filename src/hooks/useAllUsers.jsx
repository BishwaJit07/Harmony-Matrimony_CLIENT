import { useQuery } from '@tanstack/react-query'

const useAllUsers = () => {
    const { isLoading, data} = useQuery(
        { queryKey: ['allUser' ], 
        queryFn: async () =>{
            const res = await fetch(`https://soulmate-server-routed.vercel.app/allUser`)
            return res.json();
        },
     })
     return [data, isLoading]
};

export default useAllUsers;