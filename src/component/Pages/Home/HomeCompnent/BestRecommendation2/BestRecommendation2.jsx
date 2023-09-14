import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SwiperNavButtons } from "../BestRecommendation/SwiperNavButton";
import useMyData from "../../../../../Hooks/useMyData";

const BestRecommendation2 = () => {
  
   const [datas, setDatas] = useState([]);
   const [userInfo] = useMyData();
   
   useEffect(() => {
     fetch("https://soulmates-server-two.vercel.app/allUser")
       .then((res) => res.json())
       .then((data) => {
         if (userInfo?.gender === "Male") {
          const filteredData = data.filter((user) => user.gender === "Female");
          setDatas(filteredData);
        }
        else if (userInfo?.gender === "Female") {
          const filteredData = data.filter((user) => user.gender === "Male");
          setDatas(filteredData);
        }
        else {
          setDatas(data);
        }
       });
   }, []);

   

   return (
     <div className="py-[120px] w-[80%] mx-auto ">
         <p className="text-[#272932] lg:text-[40px] text-center text-[20px] lg:text-left font-alice xl:ml-16 -mb-16 dark:text-white">Best Recommendation for you</p>
       <div className="max-w-7xl mx-auto ">
       </div>
       <Swiper
         spaceBetween={30}
         slidesPerView={4}
         breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
         className="py-6"
       >
         {datas.map((item) => (
           <SwiperSlide key={item._id} className="group relative">
             <Link to={`/profile/${item?._id}`}>
               {/* SwiperSlide content */}
               <div className="relative rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-10">
                 <img className="rounded-xl object-cover w-[300px] h-[300px]" src={item?.profileImage} alt="" />
                 <div className="bg-slate-950 text-[#F0F2F5] absolute bottom-0 rounded bg-opacity-50 rounded-t-2xl h-0 py-0 px-4 group-hover:py-4 duration-300 w-full group-hover:h-[135px] rounded-b-2xl">
                   <p className="text-[22px] font-alice mb-1 ">{item?.name}</p> <br />
                   <p className="font-lato text-[16px] ">{item?.country}</p>
                 </div>
               </div>
             </Link>
           </SwiperSlide>
         ))}
               <div className="hidden  lg:flex absolute -top-0  right-10 z-30 ">
                 <SwiperNavButtons></SwiperNavButtons>
               </div>
               <div className="lg:hidden flex justify-center">
                 <SwiperNavButtons></SwiperNavButtons>
               </div>
       </Swiper>
     </div>
   );
};

export default BestRecommendation2;