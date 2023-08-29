
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/pagination";
import './Review.css';

// import required modules
import { EffectCards, Pagination, Navigation, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { SwiperNavButtons } from '../HomeCompnent/BestRecommendation/SwiperNavButton';

const Review = () => {
    const swiper = useSwiper();
    return (
        <div className='flex justify-between px-16 m-10 relative'>
            {/* div for text */}
            <div className='w-1/3'>
                <h3 className='font-serif w-4/5 leading-10 mt-12  text-left'>Countless individuals have Discovered their life partners Through SoulMate!</h3>
            </div>

            {/* div for swiper */}
            <div className='w-2/3 px-10'>
                <Swiper
                    navigation={true} modules={[EffectCards, Navigation]}
                    effect={'cards'}
                    grabCursor={true}
                    className="mySwiper-review"
                >
                    <SwiperSlide className='w-[700px] swiper-slide-review border border-gray-200 bg-slate-100'>
                        <div className="flex p-5 text-black">
                            <div className='relative'>
                                <p className='text-sm whitespace-pre-line'>I had a wonderful experience with ForeverBond Matrimony. The user interface is sleek and easy to navigate, making it simple to create a profile and search for potential matches. Thanks to ForeverBond Matrimony, I found my soulmate! <span className='text-red-600'>See More</span></p>
                                <div className='absolute left-7 bottom-0' >
                                    <h3 className='text-lg font-serif italic'>Jack & Rose</h3>
                                    <p className='text-sm'>Washington, USA</p>
                                </div>
                            </div>
                            <div>
                                <img className='h-full w-5/6' src="https://i.ibb.co/zF8zYfj/Portfolio-Elisabetta-Marzetti-Luxury-Destination-Wedding-and-Editorial-Photography.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-[700px] swiper-slide-review border border-gray-200 bg-slate-100'>
                        <div className="flex p-5 text-black">
                            <div  className='relative'>
                                <p className='text-sm whitespace-pre-line'>EternalLove Connect has a decent platform, but it could use some improvements. The search options are quite basic, and I found that some of the profiles were outdated or lacked information. <span className='text-red-600'>See More</span> </p>
                                <div className='absolute left-7 bottom-0' >
                                    <h3 className='text-lg font-serif italic'>Peter & Gwen</h3>
                                    <p className='text-sm'>Washington, USA</p>
                                </div>
                            </div>
                            <div>
                                <img className='h-full w-3/4' src="https://i.ibb.co/zF8zYfj/Portfolio-Elisabetta-Marzetti-Luxury-Destination-Wedding-and-Editorial-Photography.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className=' absolute -left-[425px] top-48'>
                        <SwiperNavButtons></SwiperNavButtons>
                    </div>

                    <h3 className='fixed top-2 -left-7 text-6xl text-gray-400'><RiDoubleQuotesL /></h3>
                    <h3 className='fixed -right-10 -bottom-2 text-6xl text-gray-400'><RiDoubleQuotesR /></h3>

                </Swiper>
            </div>
        </div >
    );
};

export default Review;