import img from '../../../assets/profile/profile2.jpg'
import { CiLocationOn } from "react-icons/ci";
import share from '../../../assets//other/share.svg'
import useMyData from '../../../Hooks/useMyData';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const SingleUserCard = ({ filteredUser }) => {
  console.log(filteredUser)
  const [userInfo, refetch] = useMyData();
  const {
    profileImage,
    name,
    country,
    religion,
    _id,
    aboutMe,
    height,
    jobSector,
    age,
    marital_status
  } = filteredUser;
  const handleClick = () => {
    axios
      .put(
        `https://soulmates-server-two.vercel.app/profileVisit?user=${userInfo?.email}`
      )
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          if (refetch()) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `You Have ${userInfo.profileVisit - 1} only`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      });
    // Perform any additional actions here
  };

  // filter string and slice it
  const getString = (text) => {
    if(typeof text == 'string'){
      return text.slice(0, 150) + '...'
    }
    else{
      return 'No data found!!!'
    }
  }
  
  return (
    <div className='hover:shadow-xl duration-100 border border-[#E1E5EA] rounded-2xl pt-3 pl-3 pr-3 font-lato'>
      {/* img and location */}
      <div className="relative rounded-2xl overflow-hidden">
        <img className='h-[230px] w-full object-cover object-top ' src={profileImage} alt="" />
        <div className="flex items-center bg-[#272932a6] text-white gap-2 rounded-tr-2xl py-1 px-2 absolute left-0 bottom-0">
          <CiLocationOn className='text-xl '/>
          <p>{country}</p>
        </div>
      </div>
      <div className="py-2 flex justify-between items-center">
        <div className="">
          <p className='text-[22px] font-alice text-[#272932]'>{name}</p>
          <p className='text-[#595E73]'>Married status: {marital_status}</p>
        </div>
        <p className='bg-[#F0F2F5] border border-primary-200 rounded-full py-3 px-[32px] text-base font-normal text-[#595E73]'>{religion}</p>
      </div>
      {/* description */}
      <p className='text-[#8695AC] py-3'>{getString(aboutMe)}</p>
      {/* info */}
      <div className="flex justify-between">
        <div className="text-center px-10 py-2">
          <p className='text-[#8695AC]'>Age</p>
          <p className='text-[#3E4A5B]'>{age}</p>
        </div>
        <div className="border "></div>
        <div className="text-center px-10 py-2">
          <p className='text-[#8695AC]'>Height</p>
          <p className='text-[#3E4A5B]'>{height}</p>
        </div>
        <div className="border "></div>
        <div className="text-center px-10 py-2">
          <p className='text-[#8695AC]'>Job</p>
          <p className='text-[#3E4A5B]'>{jobSector}</p>
        </div>
      </div>
      {/* button section */}
      <div className="flex gap-5 py-5">
        <button className="bg-[#A4B0C1] w-[82px]  px-[15px] py-[13px] rounded-full flex items-center justify-center"><img className="" src={share} alt="" /></button>
        <Link to={`/profile/${_id}`} onClick={handleClick} className='text-[20px] font-bold w-full bg-primary-500 rounded-full text-white py-[13px]  flex justify-center items-center '>View Profile</Link>
      </div>
    </div>
  );
};

export default SingleUserCard;