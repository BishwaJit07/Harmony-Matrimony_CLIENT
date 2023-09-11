
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/pagination";
import './Review.css';

// import required modules
import { EffectCards, Navigation } from 'swiper/modules';


import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

import { useEffect, useState } from 'react';
import { calcLength } from 'framer-motion';
import { SwiperNavButtons } from './SwiperNavButton';

const Review = () => {
    const [reviews, setReview] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://soulmates-server-two.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setReview(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className='flex  justify-between items-center lg:px-16 lg:m-10 relative'>
            {/* div for text */}
            <div className='hidden md:flex m-3 lg:m-0  mx-auto w-[50%]'>
                <h3 className='font-serif  lg:leading-10 leading-2   text-left lg:text-4xl text-2xl dark:text-white'>Countless individuals have Discovered their life partners Through SoulMate!</h3>
            </div>

            {/* div for swiper */}
            <div className=' lg:ms-28 w-full  md:w-[50%] '>
                <div className='text-center text-2xl font-bold font-alice'><h2 className='md:hidden'>Happy Story</h2></div>
                <Swiper
                    modules={[EffectCards, Navigation]}
                    effect={'cards'}
                    grabCursor={true}
                    className="mySwiper-review"
                >
                    {
                        reviews?.map(review => <SwiperSlide key={review._id} >
                            <div className=' w-full border border-gray-200 bg-slate-100 '>
                                <div  className="lg:flex flex-col-reverse xl:flex-row p-5 text-black ">
                                    <div className='lg:mx-5 mx-2'>
                                        <p className='text-sm pt-5 font-medium '>{review.review} <span className='text-red-600'>See More</span></p>
                                        <div className='lg:mt-10' >
                                            <h3 className='text-xxl font-serif italic'>{review.coupleName}</h3>
                                            <p className='text-sm'>{review.location}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img className='lg:w-[600px] object-cover border-8 border-white' src={review.imageURL} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                    <div className=' absolute  xl:-left-[510px] top-[300px] '>
                        <SwiperNavButtons></SwiperNavButtons>
                    </div>
                    <h3 className='fixed top-2 -left-14 text-6xl text-gray-400 hidden md:flex'><RiDoubleQuotesL /></h3>
                    <h3 className='fixed -right-20 -bottom-2 text-6xl text-gray-400 hidden md:flex'><RiDoubleQuotesR /></h3>

                </Swiper>
            </div>
        </div >
    );
};

export default Review;