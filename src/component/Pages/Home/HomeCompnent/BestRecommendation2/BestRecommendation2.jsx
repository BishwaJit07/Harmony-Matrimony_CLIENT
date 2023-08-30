import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


import girl from '../../../../../assets/home/recommendation/girl.png'
import girl2 from '../../../../../assets/home/recommendation/girl2.png'
import girl3 from '../../../../../assets/home/recommendation/girl3.png'
import girl4 from '../../../../../assets/home/recommendation/girl4.png'

const BestRecommendation2 = () => {
  
  return (
    <div className="py-[50px]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#272932] text-[40px] text-left font-alice ">Best Recommendation for you</p>
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
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="py-6"
      >
        <SwiperSlide className="group" >
          <div className=" relative rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className="w-full object-cover" src={girl} alt="" />
            <div className="bg-slate-950 text-[#F0F2F5] absolute bottom-0 rounded bg-opacity-50 rounded-t-2xl h-0 py-0 px-4 group-hover:py-4 duration-300 w-full group-hover:h-[135px] rounded-b-2xl">
              <p className="text-[22px] font-alice mb-1 ">Cameron Williamson</p>
              <p className="font-lato text-[16px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="group" >
          <div className=" relative rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className="w-full object-cover" src={girl2} alt="" />
            <div className="bg-slate-950 text-[#F0F2F5] absolute bottom-0 rounded bg-opacity-50 rounded-t-2xl h-0 py-0 px-4 group-hover:py-4 duration-300 w-full group-hover:h-[135px] rounded-b-2xl">
              <p className="text-[22px] font-alice mb-1 ">Cameron Williamson</p>
              <p className="font-lato text-[16px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group" >
          <div className=" relative rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className="w-full object-cover" src={girl3} alt="" />
            <div className="bg-slate-950 text-[#F0F2F5] absolute bottom-0 rounded bg-opacity-50 rounded-t-2xl h-0 py-0 px-4 group-hover:py-4 duration-300 w-full group-hover:h-[135px] rounded-b-2xl">
              <p className="text-[22px] font-alice mb-1 ">Cameron Williamson</p>
              <p className="font-lato text-[16px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </SwiperSlide><SwiperSlide className="group" >
          <div className=" relative rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className="w-full object-cover" src={girl4} alt="" />
            <div className="bg-slate-950 text-[#F0F2F5] absolute bottom-0 rounded bg-opacity-50 rounded-t-2xl h-0 py-0 px-4 group-hover:py-4 duration-300 w-full group-hover:h-[135px] rounded-b-2xl">
              <p className="text-[22px] font-alice mb-1 ">Cameron Williamson</p>
              <p className="font-lato text-[16px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group" >
          <div className=" relative rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className="w-full object-cover" src={girl} alt="" />
            <div className="bg-slate-950 text-[#F0F2F5] absolute bottom-0 rounded bg-opacity-50 rounded-t-2xl h-0 py-0 px-4 group-hover:py-4 duration-300 w-full group-hover:h-[135px] rounded-b-2xl">
              <p className="text-[22px] font-alice mb-1 ">Cameron Williamson</p>
              <p className="font-lato text-[16px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="group" >
          <div className=" relative rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className="w-full object-cover" src={girl2} alt="" />
            <div className="bg-slate-950 text-[#F0F2F5] absolute bottom-0 rounded bg-opacity-50 rounded-t-2xl h-0 py-0 px-4 group-hover:py-4 duration-300 w-full group-hover:h-[135px] rounded-b-2xl">
              <p className="text-[22px] font-alice mb-1 ">Cameron Williamson</p>
              <p className="font-lato text-[16px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group" >
          <div className=" relative rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className="w-full object-cover" src={girl3} alt="" />
            <div className="bg-slate-950 text-[#F0F2F5] absolute bottom-0 rounded bg-opacity-50 rounded-t-2xl h-0 py-0 px-4 group-hover:py-4 duration-300 w-full group-hover:h-[135px] rounded-b-2xl">
              <p className="text-[22px] font-alice mb-1 ">Cameron Williamson</p>
              <p className="font-lato text-[16px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </SwiperSlide><SwiperSlide className="group" >
          <div className=" relative rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className="w-full object-cover" src={girl4} alt="" />
            <div className="bg-slate-950 text-[#F0F2F5] absolute bottom-0 rounded bg-opacity-50 rounded-t-2xl h-0 py-0 px-4 group-hover:py-4 duration-300 w-full group-hover:h-[135px] rounded-b-2xl">
              <p className="text-[22px] font-alice mb-1 ">Cameron Williamson</p>
              <p className="font-lato text-[16px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};



export default BestRecommendation2;