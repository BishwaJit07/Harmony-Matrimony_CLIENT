import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Loading from "../../../Shared/loading";
import { useLocation } from "react-router";
import Search from "./Search";

const AllUser = () => {
        const location = useLocation();
        const searchData = location.state;
        console.log(searchData)
        const [users, setUserData] = useState([])
        const [loading, setLoading] = useState(true);
        // fetch happyStories data
        useEffect(() => {
          fetch('https://harmony-matrimony-server.vercel.app/allUser')
            .then(res => res.json())
            .then(data => { 
                setLoading(false);
                setUserData(data);
            }
                )
        }, [])
    if (loading) {
            return (
              <div className="flex justify-center items-center h-screen text-2xl animate-pulse">
                <Loading></Loading>
              </div>
            );
    }
    
    

    return (
        <div className=" w-[80%] mx-auto">
          <Search></Search>
        <div className="grid lg:grid-cols-2 mx-auto my-10 gap-10">
            {
                users.map((user)=> <UserCard key={user._id} user={user} ></UserCard>)
            }
        </div>
        </div>
    );
};

export default AllUser;