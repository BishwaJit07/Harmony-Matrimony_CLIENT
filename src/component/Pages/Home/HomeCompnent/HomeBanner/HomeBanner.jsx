import { BsFillPlayFill } from "react-icons/bs";
import Marquee from "react-fast-marquee";

import img from '../../../../../assets/home/newHomeBannerImg/2.jpg'
import img2 from '../../../../../assets/home/newHomeBannerImg/3.jpg'
import img3 from '../../../../../assets/home/newHomeBannerImg/5.jpg'
import img4 from '../../../../../assets/home/newHomeBannerImg/7.jpg'
import img5 from '../../../../../assets/home/newHomeBannerImg/8.jpg'
import img6 from '../../../../../assets/home/newHomeBannerImg/9.jpg';
import heart from '../../../../../assets/home/newHomeBannerImg/heart.png'

const HomeBanner = () => {
  
  return (
    <div className='bg-gradient-to-l from-primary-50 py-12 relative'>
      <div className="space-y-5 ml-8 mb-8">
        <p className='text-[52px] font-alice'>Find Your <span className="text-primary-500">Life Partner</span> With Us</p>
        <p className='text-[22px] font-lato'>End the struggle of finding a bride or groom. Discover your perfect <br /> match from the comfort of home. Your ultimate <br /> destination to find your ideal pertner</p>
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
      <div className="relative sm:hidden md:block">
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

      {/* form section */}

      <div className="absolute right-[5%] top-[13%] bg-white w-[436px] h-[420px] z-20 rounded-xl">

        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-between">
            <p className="text-[24px] font-alice">Find Your Partner</p>
            <img className="scale-90" src={heart} alt="" />
          </div>
        </div>
        <hr />

        
        <form className="w-[90%] mx-auto space-y-1" action="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">I am looking for a</span>
            </label>
            <select className="select font-normal focus:outline-none rounded-full border-primary-300 select-bordered select-sm">
              <option disabled selected>Pick one</option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
          {/* age */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <select className="select font-normal focus:outline-none rounded-full border-primary-300 select-bordered select-sm">
              <option disabled selected>Pick one</option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
          {/* Religion */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Religion</span>
            </label>
            <select className="select font-normal focus:outline-none select-bordered rounded-full border-primary-300 select-sm">
              <option disabled selected>Pick one</option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
          {/* Living In */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Living In</span>
            </label>
            <select className="select font-normal focus:outline-none select-bordered rounded-full border-primary-300 select-sm">
              <option className="font-normal" disabled selected>Pick one</option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
          <div className="">
            <button className="bg-primary-500 text-white w-full py-2 rounded-full mt-4">Search</button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default HomeBanner;