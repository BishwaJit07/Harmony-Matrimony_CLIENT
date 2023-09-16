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
import line from "../../../../assets/Shared/line.png"

const Review = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("https://soulmates-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    // <div className="max-w-7xl mx-auto overflow-hidden my-6 my-[110px] ">
    //   <p className="text-[45px] mb-1 font-alice text-center">Happy Story</p>
    //   <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
    //   <div className='grid grid-cols-6 items-center'>
    //     {/* div for text */}
    //     <div className='lg:col-span-2 '>
    //       <h3 className='text-[40px] font-alice  dark:text-white hidden lg:block'>Countless individuals have Discovered their life partners Through SoulMate!</h3>

    //     </div>
    //     {/* div for swiper */}
    //     <div className=' w-full col-span-4 relative'>
    //       <img className='absolute -left-12 top-4 hidden' src={quote1} alt="" />
    //       <img className='absolute bottom-0 -right-8 hidden' src={quote2} alt="" />
    //       <Swiper
    //         modules={[EffectCards, Navigation]}
    //         effect={'cards'}
    //         grabCursor={true}
    //         className="mySwiper-review"
    //       >
    //         {
    //           reviews?.map(review => <SwiperSlide key={review._id} >

    //             <div className="bg-white p-6 grid grid-cols-1  lg:grid-cols-2 gap-4 border border-[#C3CAD5] rounded-2xl">
    //               <div className="order-last lg:order-first">
    //                 <p className='text-[#595E73] text-[18px] font-lato font-normal'>{review.review.slice(0, 250)} <span className='text-red-600'>See More</span></p>
    //                 <p className='text-[24px] font-alice text-[#272932] font-normal mt-4'>Vysakh & Pooja</p>
    //                 <p className='text-[#595E73] text-[18px] font-lato font-normal'>Khulna SoulMate</p>
    //               </div>
    //               <img className='h-[311px] w-full  rounded-2xl object-cover object-top' src={review.imageURL} alt="" />

    //             </div>
    //           </SwiperSlide>)
    //         }
    //         <div className="absolute -left-[420px] bottom-10">
    //           <SwiperNavButtons />
    //         </div>
    //       </Swiper>
    //     </div>
    //   </div >
    // </div>
    <div className="max-w-7xl mx-auto overflow-hidden my-[110px]">
      <p className="text-[45px] mb-1 font-alice text-center">Happy Story</p>
      <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
    <div className='grid grid-cols-1 md:grid-cols-6 items-center'>
      {/* div for text */}
      <div className='col-span-2 hidden md:block'>
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
              <div className="bg-white p-6 grid grid-cols-1  lg:grid-cols-2 gap-4 border border-[#C3CAD5] rounded-2xl">
                <div className="order-last lg:order-first">
                  <p className='text-[#595E73] text-[18px] font-lato font-normal'>{review.review.slice(0, 250)} <span className='text-red-600'>See More</span></p>
                  <p className='text-[24px] font-alice text-[#272932] font-normal mt-4'>Vysakh & Pooja</p>
                  <p className='text-[#595E73] text-[18px] font-lato font-normal'>Khulna SoulMate</p>
                </div>
                <img className='h-[311px] w-full  rounded-2xl object-cover object-top' src={review.imageURL} alt="" />
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