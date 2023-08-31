import React from 'react';
import { useSwiper } from 'swiper/react';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex">
      <button
        className="text-2xl p-4 rounded-full shadow-lg m-4 hover:shadow-2xl"
        onClick={() => swiper.slideNext()}
      >
        <MdArrowBackIosNew />
      </button>

      <button
        className="text-2xl p-4 rounded-full shadow-lg m-4 hover:shadow-2xl"
        onClick={() => swiper.slidePrev()}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

{
  /* 
MdArrowBackIosNew
<button onClick={() => swiper.slidePrev()}><BsArrowLeft className='text-black'></BsArrowLeft></button>
      <button onClick={() => swiper.slideNext()}><BsArrowRight className='text-black'></BsArrowRight></button> */
}
