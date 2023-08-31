
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./sweetMemoies.css"

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';



function SweetMemories() {
  return (
    <div className="containerG">
        <h1 className="text-[#FF725E] font-bold border-b-2 border-[#FF725E] w-fit mx-auto p-2">
        Photo Gallary
      </h1>
        <div className="">
          <img src='https://i.ibb.co/swBsp3p/flower.png' alt="" className="lg:w-[15%] w-[60%] md:w-[40%] mx-auto -mt-2 mb-10"/>
        </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-paginationG', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-nextG',
          prevEl: '.swiper-button-prevGG',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_containerG"
      >
        <SwiperSlide className='slideG'>
          <img className='slideImg'  src="https://i.ibb.co/z2zcbNJ/315b896025e1da6a9fbaf95c836f1b4c.jpg" alt="slide_image"  />
        </SwiperSlide>
        <SwiperSlide className='slideG'>
          <img className='slideImg' src="https://i.ibb.co/c1zwDyw/pxfuel-2.jpg"  alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='slideG'>
          <img className='slideImg' src="https://i.ibb.co/chdn9y8/man-hugs-his-wife-they-smile-each-other.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='slideG'>
          <img className='slideImg' src="https://i.ibb.co/GPNRJCw/pxfuel-1.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='slideG'>
          <img className='slideImg' src="https://i.ibb.co/r6wJ0qX/young-couple-together-walking-autumn-park-1303-26181.jpg"alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='slideG'>
          <img className='slideImg' src="https://i.ibb.co/Z1wcgNk/55a1435552506b9f7ef0054b74ecde4c.jpg" />
        </SwiperSlide>
        <SwiperSlide className='slideG'>
          <img className='slideImg' src="https://i.ibb.co/chdn9y8/man-hugs-his-wife-they-smile-each-other.jpg" alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controlerG">
          <div className="swiper-button-prevG slider-arrowG">
          <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-nextG slider-arrowG">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-paginationG"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default SweetMemories;