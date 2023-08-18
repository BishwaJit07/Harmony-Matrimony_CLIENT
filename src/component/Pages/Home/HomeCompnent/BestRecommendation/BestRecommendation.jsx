import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Pagination , Navigation , A11y } from "swiper/modules";
import { SwiperNavButtons } from "./SwiperNavButton";
const BestRecommendation = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://harmony-matrimony-server.vercel.app/allUser")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div className=" w-full  ">
      {/* content-section */}
      <div className="mb-10">
        <h1 className="font-bold  text-[#FF725E]  text-xl text-center">
          Best Recommendation <span className="text-[#000000]">For you</span>
        </h1>
      </div>
      {/* slider Section */}
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Pagination, A11y]}
          className="mySwiper"
        >
          {datas.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="rounded-sm z-auto">
                <div className="">
                  <img
                    src={item?.img}
                    alt=""
                    className="rounded-xl  object-cover w-full"
                  />
                  <p className="bg-[#FF725E] text-white absolute w-full bottom-0  p-2 text-xl font-semibold rounded "><span className="text-lg font-medium b"></span> {item.name}</p>
                  
                </div>
              </div>
            </SwiperSlide>
            
            )
          )
          
        }
    
        <div className="-mt-100">
        <SwiperNavButtons ></SwiperNavButtons>
        </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BestRecommendation;
