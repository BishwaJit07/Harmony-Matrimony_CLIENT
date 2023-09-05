import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import {Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import { Link } from "react-router-dom";

const Service = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://harmony-matrimony-server.vercel.app/service/catering")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const [pdata, setpDatas] = useState([]);
  useEffect(() => {
    fetch("https://harmony-matrimony-server.vercel.app/service/photography")
      .then((res) => res.json())
      .then((data) => setpDatas(data));
  }, []);

 



  return (
   <>
    <div className=" max-w-screen-xl mt-20 mx-auto ">
      {/* content-section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold ">
          Hotel Booking service <span className="red-text">for you</span>{" "}
        </h2>
      </div>
      {/* slider Section */}
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
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
          
          modules={[Navigation, Pagination, A11y,Autoplay]}
          className="mySwiper"
        >
          {datas.map((item) => (
            <SwiperSlide key={item._id}>
              <Link to={`/hotel/${item._id}`}>
                <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
                  <img
                    src={item?.image}
                    alt="Hotel cover"
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                  />

                  <div className="bg-black  px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col">
                    <p className="font-semibold">{item.name}</p>
                    <br />
                    <p>{item.description.substring(0, 100)}...</p>
                    <br />
                    <p className="mt-auto">Price: {item.price}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>




    <div className="mt-10">
        
    <div className=" max-w-screen-xl mt-20 mx-auto ">
      {/* content-section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold ">
         Media Booking service <span className="red-text">for you</span>{" "}
        </h2>
      </div>
      {/* slider Section */}
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
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
          
          modules={[Navigation, Pagination, A11y,Autoplay]}
          className="mySwiper"
        >
          {pdata.map((item) => (
            <SwiperSlide key={item._id}>
              <Link to={`/hotel/${item._id}`}>
                <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
                  <img
                    src={item?.image}
                    alt="Hotel cover"
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                  />

                  <div className="bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col">
                    <p>{item.name}</p>
                    <br />
                    <p>{item.description.substring(0, 100)}...</p>
                    <br />
                    <p className="mt-auto">Price: {item.price}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
   </>
  );
};

export default Service;
