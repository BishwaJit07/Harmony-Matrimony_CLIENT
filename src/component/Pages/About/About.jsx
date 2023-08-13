import badge from '../../../assets/icons/badge.png'

const About = () => {
  return (
    <div className='font-poppins'>
      {/* about header */}
      <div className="relative">
        {/* about text */}
        <div className="h-[300px] bg-gradient-to-r from-[#2a262691] to-[#2a2c3c] ">
          <div className="text-center space-y-5 pt-10">
            <p className="text-[#FFB400] text-xl">#1 Wedding Website</p>
            <p className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1FE89D] to-[#57C0EA]">About us</p>
            <p className="text-white text-lg">Most Trusted and premium Matrimony Service in the World.</p>
          </div>
        </div>
        {/* about cards */}

        <div className="absolute w-full top-[85%] md:top-[80%]">
          <div className="grid justify-center gap-6 md:gap-4 lg:gap-10 md:flex">
            <div className="w-[263px] md:w-[203px] lg:w-[263px] h-[206px] p-8 md:p-4 lg:p-8 text-center text-[#66451c] space-y-4 border rounded shadow-lg hover:scale-110 hover:shadow-2xl duration-500 bg-white">
              <img className='w-[50px] h-[50px] mx-auto' src={badge} alt="" />
              <p className='font-semibold'>Genuine profiles</p>
              <p className='text-sm'>The most trusted wedding matrimony brand</p>
            </div>
            <div className="w-[263px] md:w-[203px] lg:w-[263px] h-[206px] p-8 md:p-4 lg:p-8 text-center text-[#66451c] space-y-4 border rounded shadow-lg hover:scale-110 hover:shadow-2xl duration-500 bg-white">
              <img className='w-[50px] h-[50px] mx-auto' src={badge} alt="" />
              <p className='font-semibold'>Genuine profiles</p>
              <p className='text-sm'>The most trusted wedding matrimony brand</p>
            </div>
            <div className="w-[263px] md:w-[203px] lg:w-[263px] h-[206px] p-8 md:p-4 lg:p-8 text-center text-[#66451c] space-y-4 border rounded shadow-lg hover:scale-110 hover:shadow-2xl duration-500 bg-white">
              <img className='w-[50px] h-[50px] mx-auto' src={badge} alt="" />
              <p className='font-semibold'>Genuine profiles</p>
              <p className='text-sm'>The most trusted wedding matrimony brand</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[700px] md:h-[200px]"></div>
    </div>
  );
};

export default About;
// #a16304