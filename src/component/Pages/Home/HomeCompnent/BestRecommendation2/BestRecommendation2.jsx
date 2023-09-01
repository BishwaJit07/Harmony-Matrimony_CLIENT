import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SwiperNavButtons } from "../BestRecommendation/SwiperNavButton";

const BestRecommendation2 = () => {
  
   const [datas, setDatas] = useState([]);
   
   useEffect(() => {
     fetch("https://soulmates-server-two.vercel.app/allUser")
       .then((res) => res.json())
       .then((data) => setDatas(data));
   }, []);

   return (
     <div className="py-[120px] w-[80%] mx-auto ">
         <p className="text-[#272932] lg:text-[40px] text-center text-[20px] lg:text-left font-alice xl:ml-16 -mb-16 ">Best Recommendation for you</p>
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
        <SwiperSlide key={item._id} className="group" >
          <Link to={`/profile/${item?._id}`}>
          <div className=" relative rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className="rounded-xl  object-cover w-full h-[300px]" src={item?.profileImage} alt="" />
            <div className="bg-slate-950 text-[#F0F2F5] absolute bottom-0 rounded bg-opacity-50 rounded-t-2xl h-0 py-0 px-4 group-hover:py-4 duration-300 w-full group-hover:h-[135px] rounded-b-2xl">
              <p className="text-[22px] font-alice mb-1 ">{item?.name}</p> <br />
              <p className="font-lato text-[16px] ">{item?.country}</p>
            </div>
          </div>
          </Link>
        </SwiperSlide>

         )
        ) 
        }
          <div className="-mt-100">
            <SwiperNavButtons></SwiperNavButtons>
          </div>
      </Swiper>
      </div>

  );
};

export default BestRecommendation2;
