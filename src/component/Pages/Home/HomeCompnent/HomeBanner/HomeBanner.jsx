import { BsFillPlayFill } from "react-icons/bs";
import Marquee from "react-fast-marquee";


import img from '../../../../../assets/home/newHomeBannerImg/2.jpg'
import img2 from '../../../../../assets/home/newHomeBannerImg/3.jpg'
import img3 from '../../../../../assets/home/newHomeBannerImg/5.jpg'
import img4 from '../../../../../assets/home/newHomeBannerImg/7.jpg'
import img5 from '../../../../../assets/home/newHomeBannerImg/8.jpg'
import img6 from '../../../../../assets/home/newHomeBannerImg/9.jpg';
import SearchFunction from "../../SearchFunction/SearchFunction";


const HomeBanner = () => {
  
  return (
    <div className='bg-gradient-to-l from-primary-50 '>
      <div className="md:flex gap-5 justify-around w-[80%] xl:w-[100%] mx-auto py-10 md:py-0">
      <div className="space-y-5  mb-8 md:mt-[100px] ">
        <p className='lg:text-[50px] text-3xl font-alice'>Find Your <span className="text-primary-500">Life Partner</span> With Us</p>
        <p className='text-sm lg:text-[16px] font-lato text-gray-500 leading-7'>End the struggle of finding a bride or groom. Discover your <br className="hidden md:flex"/> perfect match from the comfort of home. Your ultimate <br className="hidden md:flex"/> destination to find your ideal pertner</p>
        <div className="flex items-center gap-4 mt-6">
          <button className='bg-primary-500 rounded-full text-white px-10 py-2'>Explore</button>
          <button className='flex justify-center items-center gap-2'>
            <span className="relative flex  h-8 w-8 justify-center items-center">
              <span className="animate-ping absolute inline-flex h-[80%] w-[80%] rounded-full bg-red-400 opacity-75 duration-1000"></span>
              <span className="relative inline-flex rounded-full h-[32px] w-[32px] bg-[#F27373] items-center justify-center"><BsFillPlayFill className='text-xl text-white' /></span>
            </span>
            <span>How it work</span>
          </button>
        </div>
      </div>
      {/* image marquee section */}
      <SearchFunction/>
      </div>
      
      <div className="sm:hidden md:block relative -mt-20 z-10 hidden lg:flex">
        <Marquee speed={20}>
          <img className='scale-90 h-[220px] rounded-t-md shadow' src={img} alt="" srcSet="" />
          <img className='scale-90 h-[220px] rounded-t-md shadow' src={ img2 } alt="" srcSet="" />
          <img className='scale-90 h-[220px] rounded-t-md shadow' src={ img3 } alt="" srcSet="" />
          <img className='scale-90 h-[220px] rounded-t-md shadow' src={ img4 } alt="" srcSet="" />
          <img className='scale-90 h-[220px] rounded-t-md shadow' src={ img5 } alt="" srcSet="" />
          <img className='scale-90 h-[220px] rounded-t-md shadow' src={ img6 } alt="" srcSet="" />
        </Marquee>
        <div className="bg-gradient-to-l from-primary-50 absolute inset-0 z-10"></div>
      </div>
    </div>
  );
};

export default HomeBanner;