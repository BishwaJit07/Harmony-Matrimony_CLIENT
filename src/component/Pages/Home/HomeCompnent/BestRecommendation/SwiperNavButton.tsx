import React from 'react';
import { useSwiper } from 'swiper/react';
import { BsFillArrowRightCircleFill , BsFillArrowLeftCircleFill } from "react-icons/bs";
export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns  mt-10 ">
      <div >
      <button onClick={() => swiper.slidePrev()}><BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill></button>
      <button onClick={() => swiper.slideNext()}><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></button>
      </div>
    </div>
  );
};
