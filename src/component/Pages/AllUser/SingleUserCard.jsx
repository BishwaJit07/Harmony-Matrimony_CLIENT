import img from '../../../assets/profile/profile2.jpg'
import { CiLocationOn } from "react-icons/ci";
import share from '../../../assets//other/share.svg'


const SingleUserCard = ({ filteredUser }) => {
  console.log(filteredUser)
  return (
    <div className='hover:shadow-xl duration-100 border border-[#E1E5EA] rounded-2xl pt-3 pl-3 pr-3 font-lato'>
      {/* img and location */}
      <div className="relative rounded-2xl overflow-hidden">
        <img className='h-[230px] w-full object-cover object-top ' src={img} alt="" />
        <div className="flex items-center bg-[#272932a6] text-white gap-2 rounded-tr-2xl py-1 px-2 absolute left-0 bottom-0">
          <CiLocationOn className='text-xl '/>
          <p>Location</p>
        </div>
      </div>
      <div className="py-2 flex justify-between items-center">
        <div className="">
          <p className='text-[22px] font-alice text-[#272932]'>User Name</p>
          <p className='text-[#595E73]'>Married status: Un-Married</p>
        </div>
        <p className='bg-[#F0F2F5] border border-primary-200 rounded-full py-3 px-[32px] text-base font-normal text-[#595E73]'>Hindu</p>
      </div>
      {/* description */}
      <p className='text-[#8695AC] py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam ratione, non autem corrupti laborum.</p>
      {/* info */}
      <div className="flex justify-between">
        <div className="text-center px-10 py-2">
          <p className='text-[#8695AC]'>Age</p>
          <p className='text-[#3E4A5B]'>Govt</p>
        </div>
        <div className="border "></div>
        <div className="text-center px-10 py-2">
          <p className='text-[#8695AC]'>Height</p>
          <p className='text-[#3E4A5B]'>Govt</p>
        </div>
        <div className="border "></div>
        <div className="text-center px-10 py-2">
          <p className='text-[#8695AC]'>Job</p>
          <p className='text-[#3E4A5B]'>Govt</p>
        </div>
      </div>
      {/* button section */}
      <div className="flex gap-5 py-5">
        <button className="bg-[#A4B0C1] w-[82px]  px-[15px] py-[13px] rounded-full flex items-center justify-center"><img className="" src={share} alt="" /></button>
        <button className='text-[20px] font-bold w-full bg-primary-500 rounded-full text-white py-[13px]  flex justify-center items-center '>View Profile</button>
      </div>
    </div>
  );
};

export default SingleUserCard;