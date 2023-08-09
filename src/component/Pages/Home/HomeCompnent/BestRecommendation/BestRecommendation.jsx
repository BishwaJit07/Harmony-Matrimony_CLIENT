import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
const BestRecommendation = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://harmony-matrimony-server.vercel.app/allUser")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div className="px-16 mt-20 mb-10">
      {/* content-section */}
      <div className="mb-10 ">
        <h1 className="font-bold text-[#D32C3D]">
          Best Recommendation <span className="text-[#000000]">For you</span>
        </h1>
      </div>
      {/* slider Section */}
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
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
          modules={[Pagination]}
          className="mySwiper"
        >
          {datas.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="border relative border-[#D32C3D] rounded-xl p-10 bg-[#FFFBF0]">
                <img
                  src={item.img}
                  alt=""
                  className="rounded-xl   object-cover"
                />
              </div>
              <p className="absolute bottom-0 font-medium">{item.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestRecommendation;
