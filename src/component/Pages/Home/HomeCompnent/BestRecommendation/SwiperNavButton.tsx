import React from 'react';
import { useSwiper } from 'swiper/react';
import { BsFillArrowRightCircleFill , BsFillArrowLeftCircleFill } from "react-icons/bs";
export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns lg:absolute lg:-top-10 lg:right-0 mt-10 ">
      <div >
      <button onClick={() => swiper.slidePrev()}><BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill></button>
      <button onClick={() => swiper.slideNext()}><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></button>
      </div>
    </div>
  );
};
