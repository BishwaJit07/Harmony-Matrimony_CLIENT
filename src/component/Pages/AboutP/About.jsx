import { BsTelephoneFill,  } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import { FaFemale, FaMale, FaUsers } from "react-icons/fa";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoWhatsapp } from "react-icons/bi";
import badge from '../../../assets/about-photos/badge.png'
import trust from '../../../assets/about-photos/trust.png'
import ring from '../../../assets/about-photos/rings.png'
import img1 from '../../../assets/about-photos/1.jpg'
import img2 from '../../../assets/about-photos/2.jpg'
import img4 from '../../../assets/about-photos/4.jpg'
import girl from '../../../assets/about-photos/girl.jpg'
import Heading from "../../../Shared/Heading";

const About = () => {
  return (
    <div className='font-poppins '>
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
              <img className='w-[50px] h-[50px] mx-auto' src={trust} alt="" />
              <p className='font-semibold'>Most trusted</p>
              <p className='text-sm'>The most trusted wedding matrimony brand</p>
            </div>
            <div className="w-[263px] md:w-[203px] lg:w-[263px] h-[206px] p-8 md:p-4 lg:p-8 text-center text-[#66451c] space-y-4 border rounded shadow-lg hover:scale-110 hover:shadow-2xl duration-500 bg-white">
              <img className='w-[50px] h-[50px] mx-auto' src={ring} alt="" />
              <p className='font-semibold'>2000+ weddings</p>
              <p className='text-sm'>The most trusted wedding matrimony brand</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[700px] md:h-[200px]"></div>

      {/* welcome section */}
      <div className="lg:grid lg:grid-cols-2 mb-12 max-w-7xl mx-auto">
        {/* photo section */}
        <div className="relative hidden lg:block">
          <div className="w-[100px] h-[100px] border-[7px] border-[#f0a805] rounded-full absolute -top-[7%] -left-[5%] -z-10 "></div>
          <img className='w-[75%] h-[550px] object-cover rounded-2xl' src={img1} alt="two couples picture" />
          <img className='w-[80%] h-[300px] object-cover rounded-se-[100px] rounded-br-[15px] rounded-bl-[100px] border-white border-t-[15px] border-l-[15px] absolute top-[46%] left-[16%]' src={img2} alt="two couples picture" />
          <div className="w-[200px] h-[200px] border-[7px] border-[#ffe2f0] rounded-2xl absolute top-[68%] left-[68%] -z-10"></div>
        </div>
        <div className="text-[#66451c] space-y-6 font-semibold px-8">
          <div className="font-cinzel">
            <p className='text-[58px] font-bold'>Welcome to</p>
            <p className='text-[35px] font-bold text-[#e5026b]'>Wedding matrimony</p>
          </div>
          <p>Best wedding matrimony It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <p>Click here to Start you matrimony service now.</p>
          <hr />
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
          <div className="md:flex gap-10 space-y-6 md:space-y-0">
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] bg-black flex justify-center items-center rounded-full border-gray-300 border-[7px]">
                <BsTelephoneFill className="text-white  text-[18px] "/>
              </div>
              <div className="">
                <p className="text-[#7a7a7a]">Enquiry</p>
                <p className="text-[18px] font-semibold text-black">+01 2242 3366</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] bg-black flex justify-center items-center rounded-full border-gray-300 border-[7px]">
                <AiOutlineMail className="text-white  text-[18px] " />
              </div>
              <div className="">
                <p className="text-[#7a7a7a]">Get Support</p>
                <p className="text-[18px] font-semibold text-black">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* counting section */}
      <div className="text-[#66451c] grid grid-cols-2 gap-2 md:gap-0 md:flex mt-16 mb-10 px-2 max-w-7xl mx-auto">
        <div className="border p-5 flex flex-col lg:flex-row items-center lg:items-start gap-2 w-full md:border-l-0">
          <div className="border-[#d7d1be] border p-3 w-auto rounded-2xl mt-2">
            <AiOutlineHeart className="text-[20px]"/>
          </div>
          <div className="text-center lg:text-left">
            <p className="font-cinzel text-[40px] font-bold">2K</p>
            <p className="text-sm font-normal">COUPLES PARED</p>
          </div>
        </div>
        <div className="border p-5 flex flex-col lg:flex-row items-center lg:items-start gap-2 w-full">
          <div className="border-[#d7d1be] border p-3 w-auto rounded-2xl mt-2">
            <FaUsers className="text-[20px]" />
          </div>
          <div className="text-center lg:text-left">
            <p className="font-cinzel text-[40px] font-bold">4000+</p>
            <p className="text-sm font-normal">REGISTERED USERS</p>
          </div>
        </div>
        <div className="border p-5 flex flex-col lg:flex-row items-center lg:items-start gap-2 w-full">
          <div className="border-[#d7d1be] border p-3 w-auto rounded-2xl mt-2">
            <FaMale className="text-[20px]" />
          </div>
          <div className="text-center lg:text-left">
            <p className="font-cinzel text-[40px] font-bold">1600+</p>
            <p className="text-sm font-normal">MENS</p>
          </div>
        </div>
        <div className="border p-5 flex flex-col lg:flex-row items-center lg:items-start gap-2 w-full md:border-r-0">
          <div className="border-[#d7d1be] border  p-3 w-auto rounded-2xl mt-2">
            <FaFemale className="text-[20px]" />
          </div>
          <div className="text-center lg:text-left">
            <p className="font-cinzel text-[40px] font-bold">2000+</p>
            <p className="text-sm font-normal">WOMENS</p>
          </div>
        </div>
      </div>

      {/* faq section */}
      <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto">

        <div className="space-y-4 px-4">
          {/* single accordion */}
          <div className="collapse collapse-plus bg-white shadow rounded">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              It is a long established fact
            </div>
            <div className="collapse-content text-[#66451c]">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos fugit cupiditate corporis necessitatibus consequuntur sint blanditiis, nesciunt totam architecto voluptate unde quia eaque asperiores alias voluptatibus quaerat inventore nihil beatae quisquam id. Incidunt assumenda obcaecati iure? Incidunt sapiente aliquam eligendi eaque voluptatem earum sit facilis! Voluptas molestiae id illum!</p>
            </div>
          </div>

          {/* single accordion */}
          <div className="collapse collapse-plus bg-white shadow rounded ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Where can I get some?
            </div>
            <div className="collapse-content text-[#66451c]">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos fugit cupiditate corporis necessitatibus consequuntur sint blanditiis, nesciunt totam architecto voluptate unde quia eaque asperiores alias voluptatibus quaerat inventore nihil beatae quisquam id. Incidunt assumenda obcaecati iure? Incidunt sapiente aliquam eligendi eaque voluptatem earum sit facilis! Voluptas molestiae id illum!</p>
            </div>
          </div>

          {/* single accordion */}
          <div className="collapse collapse-plus bg-white shadow rounded">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Where does it come from?
            </div>
            <div className="collapse-content text-[#66451c]">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos fugit cupiditate corporis necessitatibus consequuntur sint blanditiis, nesciunt totam architecto voluptate unde quia eaque asperiores alias voluptatibus quaerat inventore nihil beatae quisquam id. Incidunt assumenda obcaecati iure? Incidunt sapiente aliquam eligendi eaque voluptatem earum sit facilis! Voluptas molestiae id illum!</p>
            </div>
          </div>

          {/* single accordion */}
          <div className="collapse collapse-plus bg-white shadow rounded">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Why do we use it?
              
            </div>
            <div className="collapse-content text-[#66451c]">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos fugit cupiditate corporis necessitatibus consequuntur sint blanditiis, nesciunt totam architecto voluptate unde quia eaque asperiores alias voluptatibus quaerat inventore nihil beatae quisquam id. Incidunt assumenda obcaecati iure? Incidunt sapiente aliquam eligendi eaque voluptatem earum sit facilis! Voluptas molestiae id illum!</p>
            </div>
          </div>

          {/* single accordion */}
          <div className="collapse collapse-plus bg-white shadow rounded">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              What is Lorem Ipsum?
            </div>
            <div className="collapse-content text-[#66451c]">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos fugit cupiditate corporis necessitatibus consequuntur sint blanditiis, nesciunt totam architecto voluptate unde quia eaque asperiores alias voluptatibus quaerat inventore nihil beatae quisquam id. Incidunt assumenda obcaecati iure? Incidunt sapiente aliquam eligendi eaque voluptatem earum sit facilis! Voluptas molestiae id illum!</p>
            </div>
          </div>

          {/* single accordion */}
          <div className="collapse collapse-plus bg-white shadow rounded">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Contrary to popular belief
            </div>
            <div className="collapse-content text-[#66451c]">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos fugit cupiditate corporis necessitatibus consequuntur sint blanditiis, nesciunt totam architecto voluptate unde quia eaque asperiores alias voluptatibus quaerat inventore nihil beatae quisquam id. Incidunt assumenda obcaecati iure? Incidunt sapiente aliquam eligendi eaque voluptatem earum sit facilis! Voluptas molestiae id illum!</p>
            </div>
          </div>
        </div>

        {/* faq img */}
        <div className="px-2">
          <img className="rounded h-[630px] w-full object-top object-cover " src={img4} alt="" />
        </div>
      </div>

      <div className=" mt-10">
        <Heading title="Meet Our Team"/>
      </div>
      
      {/* team section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 justify-center my-8 max-w-7xl mx-auto">
        
        {/* card */}
        <div className="shadow rounded mx-4 overflow-hidden group relative">
          <img className="w-full object-cover group-hover:scale-110  duration-700" src={girl} alt="" />
          <div className="h-[100px]"></div>
          <div className="absolute bottom-[30px] group-hover:mb-[65px] duration-700 text-center z-10 inset-x-0 ">
            <p className="text-xl font-bold text-[#5A4F24] group-hover:text-[#ffc107]">Ashley Jen</p>
            <p className="text-sm group-hover:text-white">Marketing Manager</p>
          </div>

          {/* socials */}
          <div className="flex justify-center absolute  group-hover:bottom-[40px] duration-700 -bottom-6 inset-x-0 z-10">
            <div className="flex gap-8">
              <div className="p-1 rounded-lg text-black ">
                <BiLogoFacebook className="text-xl cursor-pointer" />
              </div>
              <div className="p-1 rounded-lg text-black cursor-pointer">
                <BiLogoInstagram className="text-xl" />
              </div>
              <div className="p-1 rounded-lg text-black cursor-pointer">
                <BiLogoLinkedin className="text-xl" />
              </div>
              <div className="p-1 rounded-lg text-black cursor-pointer">
                <BiLogoWhatsapp className="text-xl" />
              </div>
            </div>
          </div>
          <div className=" bg-gradient-to-b from-[#2a262691] to-[#2a2c3c]  rounded-t-[40px] duration-700 absolute group-hover:h-[180px] h-0 group-hover:w-full w-0 group-hover:bottom-0 right-0">
            
          </div>
        </div>

        {/* card */}
        <div className="shadow rounded mx-4 overflow-hidden group relative">
          <img className="w-full object-cover group-hover:scale-110  duration-700" src={girl} alt="" />
          <div className="h-[100px]"></div>
          <div className="absolute bottom-[30px] group-hover:mb-[65px] duration-700 text-center z-10 inset-x-0 ">
            <p className="text-xl font-bold text-[#5A4F24] group-hover:text-[#ffc107]">Ashley Jen</p>
            <p className="text-sm group-hover:text-white">Marketing Manager</p>
          </div>

          {/* socials */}
          <div className="flex justify-center absolute group-hover:bottom-[40px] duration-700 -bottom-6 inset-x-0 z-10">
            <div className="flex gap-8">
              <div className="p-1 rounded-lg text-black ">
                <BiLogoFacebook className="text-xl cursor-pointer" />
              </div>
              <div className="p-1 rounded-lg text-black cursor-pointer">
                <BiLogoInstagram className="text-xl" />
              </div>
              <div className="p-1 rounded-lg text-black cursor-pointer">
                <BiLogoLinkedin className="text-xl" />
              </div>
              <div className="p-1 rounded-lg text-black cursor-pointer">
                <BiLogoWhatsapp className="text-xl" />
              </div>
            </div>
          </div>
          <div className=" bg-gradient-to-b from-[#2a262691] to-[#2a2c3c]  rounded-t-[40px] duration-700 absolute group-hover:h-[180px] h-0 group-hover:w-full w-0 group-hover:bottom-0 right-0">

          </div>
        </div>

        {/* card */}
        <div className="shadow rounded mx-4 overflow-hidden group relative">
          <img className="w-full object-cover group-hover:scale-110  duration-700" src={girl} alt="" />
          <div className="h-[100px]"></div>
          <div className="absolute bottom-[30px] group-hover:mb-[65px] duration-700 text-center z-10 inset-x-0 ">
            <p className="text-xl font-bold text-[#5A4F24] group-hover:text-[#ffc107]">Ashley Jen</p>
            <p className="text-sm group-hover:text-white">Marketing Manager</p>
          </div>

          {/* socials */}
          <div className="flex justify-center absolute group-hover:bottom-[40px] duration-700 -bottom-6 inset-x-0 z-10">
            <div className="flex gap-8">
              <div className="p-1 rounded-lg text-black ">
                <BiLogoFacebook className="text-xl cursor-pointer" />
              </div>
              <div className="p-1 rounded-lg text-black cursor-pointer">
                <BiLogoInstagram className="text-xl" />
              </div>
              <div className="p-1 rounded-lg text-black cursor-pointer">
                <BiLogoLinkedin className="text-xl" />
              </div>
              <div className="p-1 rounded-lg text-black cursor-pointer">
                <BiLogoWhatsapp className="text-xl" />
              </div>
            </div>
          </div>
          <div className=" bg-gradient-to-b from-[#2a262691] to-[#2a2c3c]  rounded-t-[40px] duration-700 absolute group-hover:h-[180px] h-0 group-hover:w-full w-0 group-hover:bottom-0 right-0">

          </div>
        </div>

        {/* card */}
        <div className="shadow rounded mx-4 overflow-hidden group relative">
          <img className="w-full object-cover group-hover:scale-110  duration-700" src={girl} alt="" />
          <div className="h-[100px]"></div>
          <div className="absolute bottom-[30px] group-hover:mb-[65px] duration-700 text-center z-10 inset-x-0 ">
            <p className="text-xl  font-bold text-[#5A4F24] group-hover:text-[#ffc107]">Ashley Jen</p>
            <p className="text-sm group-hover:text-white">Marketing Manager</p>
          </div>

          {/* socials */}
          <div className="flex justify-center absolute group-hover:bottom-[40px] duration-700 -bottom-6 inset-x-0 z-10">
            <div className="flex gap-8">
              <div className="p-1 rounded-lg text-black ">
                <BiLogoFacebook className="text-xl cursor-pointer" />
              </div>
              <div className="p-1 rounded-lg text-black cursor-pointer">
                <BiLogoInstagram className="text-xl" />
              </div>
              <div className="p-1 rounded-lg text-black cursor-pointer">
                <BiLogoLinkedin className="text-xl" />
              </div>
              <div className="p-1 rounded-lg text-black cursor-pointer">
                <BiLogoWhatsapp className="text-xl" />
              </div>
            </div>
          </div>
          <div className=" bg-gradient-to-b from-[#2a262691] to-[#2a2c3c]  rounded-t-[40px] duration-700 absolute group-hover:h-[180px] h-0 group-hover:w-full w-0 group-hover:bottom-0 right-0">

          </div>
        </div>
        

      </div>
    </div>
  );
};

export default About;
// #a16304