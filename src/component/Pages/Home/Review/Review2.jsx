import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/pagination";
import './Review.css';
import quote1 from '../../../../assets/review/quote1.svg'
import quote2 from '../../../../assets/review/quote2.svg'
import { EffectCards, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { SwiperNavButtons } from './SwiperNavButton';
import axios from 'axios';

const Review = () => {
  const [reviews, setReview] = useState([]);
  axios.get('http://localhost:5000/reviews').then(data => setReview(data.data))

  return (
    <div className="max-w-7xl mx-auto overflow-hidden my-6">
      <div className='grid grid-cols-6 items-center'>
        {/* div for text */}
        <div className='col-span-2 '>
          <h3 className='text-[40px] font-alice  dark:text-white'>Countless individuals have Discovered their life partners Through SoulMate!</h3>
        </div>
        {/* div for swiper */}
        <div className=' w-full col-span-4 relative'>
          <img className='absolute -left-12 top-4 hidden' src={quote1} alt="" />
          <img className='absolute bottom-0 -right-8 hidden' src={quote2} alt="" />
          <Swiper
            modules={[EffectCards, Navigation]}
            effect={'cards'}
            grabCursor={true}
            className="mySwiper-review"
          >
            {
              reviews?.map(review => <SwiperSlide key={review._id} >
                <div className="bg-white p-6 grid grid-cols-2 gap-4 border border-[#C3CAD5] rounded-2xl">
                  <div className="">
                    <p className='text-[#595E73] text-[18px] font-lato font-normal'>{review.review.slice(0, 250)} <span className='text-red-600'>See More</span></p>
                    <p className='text-[24px] font-alice text-[#272932] font-normal mt-4'>Vysakh & Pooja</p>
                    <p className='text-[#595E73] text-[18px] font-lato font-normal'>Khulna SoulMate</p>
                  </div>
                  <img className='h-[311px] w-full rounded-2xl object-cover object-top' src={review.imageURL} alt="" />
                </div>
              </SwiperSlide>)
            }
            <div className="absolute -left-[420px] bottom-10">
              <SwiperNavButtons />
            </div>
          </Swiper>
        </div>
      </div >
    </div>
  );
};

export default Review;