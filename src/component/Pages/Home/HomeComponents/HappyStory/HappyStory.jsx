import { useEffect, useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import { Pagination, Navigation, A11y } from "swiper/modules";
import { SwiperNavButtons } from "../../HomeCompnent/BestRecommendation/SwiperNavButton";

const HappyStory = () => {
  const [happyStories, setHappyStories] = useState([])

  // fetch happyStories data
  useEffect(() => {
    fetch('https://harmony-matrimony-server.vercel.app/allCouple')
      .then(res => res.json())
      .then(data => setHappyStories(data))
  }, [])

  return (
    <div className="my-60">
      <h1 className="red-text font-bold border-b-2  w-fit mx-auto p-2">
        Happy Story
      </h1>
      <div className="">
        <img src='https://i.ibb.co/swBsp3p/flower.png' alt="" className="lg:w-[15%] w-[60%] md:w-[40%] mx-auto -mt-2 mb-10" />
      </div>

        <Swiper
          slidesPerView={3}
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
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Pagination, A11y]}
          className="mySwiper "
        >
          <div >
          {
          happyStories.map((happyStory) => (
            <SwiperSlide key={happyStory._id}>
              <div className="card xl:mx-4 my-8  xl:h-[600px]  bg-opacity-80 round-t-[30%] md:rounded-t-[30%] rounded-b-3xl shadow-xl border-t-white">
              <figure><img  src={happyStory.img} alt="Shoes" /></figure>
              <div className="card-body  ">
                <h2 className="card-title text-2xl lg:text-4xl font-normal justify-center">{happyStory.name}</h2>
                <p className="text-xs lg:text-sm xl:text-base py-3 text text-[#728483] text-clip text ">{happyStory.about_marriage < 100 ? <>{happyStory.about_marriage}</> :
                        <>{happyStory?.about_marriage.slice(0, 100)}... </>
                    }</p>
                <div className="card-actions justify-center">
                  <button className="btn red-primary">Read More</button>
                </div>
              </div>
            </div>
            </SwiperSlide>
          )
          )

          }
          </div>


          <div className="-mt-100">
            <SwiperNavButtons></SwiperNavButtons>
          </div>
        </Swiper>

      </div>

    
  );
};

export default HappyStory;