import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import BookServiceCard from "./BookServiceCard";


const BookService = () => {
    const {user}=useContext(AuthContext)
    console.log(user?.email)
    const [datas, setDatas]=useState([])
    useEffect(()=>{
        fetch('https://harmony-matrimony-server.vercel.app/service/photography')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])
    console.log(datas)
    return (
        <div>
           <div className="bg-gradient-to-r from-[#6ed3a6] to-[#EBFFF6]">
            <h1 className="text-5xl font-bold text-center py-20 mb-20  ">Booked Service</h1>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10 lg:mx-20">
           {datas.map((data) => (
            <BookServiceCard key={data._id} data={data}></BookServiceCard>
          ))}
           </div>
        </div>
    );
};

export default BookService;