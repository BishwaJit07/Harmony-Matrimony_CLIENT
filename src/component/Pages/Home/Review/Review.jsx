
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/pagination";
import './Review.css';

// import required modules
import { EffectCards,  Navigation } from 'swiper/modules';


import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { SwiperNavButtons } from '../HomeCompnent/BestRecommendation/SwiperNavButton';
import { useEffect, useState } from 'react';
import { calcLength } from 'framer-motion';

const Review = () => {
    const [reviews, setReview] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('https://soulmates-server-two.vercel.app/reviews')
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setReview(data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])
   console.log(reviews)
    return (
        <div className='flex justify-between px-16 m-10 relative'>
            {/* div for text */}
            <div className='w-1/3'>
                <h3 className='font-serif  leading-10   text-left text-4xl'>Countless individuals have Discovered their life partners Through SoulMate!</h3>
            </div>

            {/* div for swiper */}
            <div className='w-2/3 ms-28'>
                <Swiper
                    navigation={true} modules={[EffectCards, Navigation]}
                    effect={'cards'}
                    grabCursor={true}
                    className="mySwiper-review"
                >
                   {
                    reviews?.map(review =>  <SwiperSlide key={review._id} className='w-[600px] swiper-slide-review border border-gray-200 bg-slate-100'>
                    <div className="flex p-5 text-black">
                        <div className='mx-5'>
                            <p className='text-lg whitespace-pre-line pt-5'>{review.review} <span className='text-red-600'>See More</span></p>
                            <div className='mt-10' >
                                <h3 className='text-xxl font-serif italic'>{review.coupleName}</h3>
                                <p className='text-sm'>{review.location}</p>
                            </div>
                        </div>
                        <div>
                            <img className='h-full w-[900px] object-cover' src={review.imageURL} alt="" />
                        </div>
                    </div>
                </SwiperSlide>)
                   }
                    <div className=' absolute -left-[425px] top-48'>
                        <SwiperNavButtons></SwiperNavButtons>
                    </div>

                    <h3 className='fixed top-2 -left-14 text-6xl text-gray-400'><RiDoubleQuotesL /></h3>
                    <h3 className='fixed -right-20 -bottom-2 text-6xl text-gray-400'><RiDoubleQuotesR /></h3>

                </Swiper>
            </div>
        </div >
    );
};

export default Review;