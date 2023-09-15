import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Pagination , Navigation , A11y } from "swiper/modules";
import { SwiperNavButtons } from "./SwiperNavButton";
import { Link } from "react-router-dom";
const BestRecommendation = () => {

  
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://soulmates-server.vercel.app/allUser")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);


  return (
    <div className=" w-full  mt-[90px]">
      {/* content-section */}
      <div className="mb-8">
        
        <h2 className='text-3xl font-semibold '>Best Recommendation <span className='red-text'>for you</span> </h2>
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
                    src={item?.profileImage}
                    alt=""
                    className="rounded-xl  object-cover w-full h-[300px]"
                  />
                  <p className="bg-[#FF725E] text-white absolute w-full bottom-0  p-2 text-xl font-semibold rounded "><span className="text-lg font-medium b"></span><Link to={`/profile/${item?._id}`}>{item?.name}</Link></p>
                  
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
