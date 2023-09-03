import { BsTelephone } from "react-icons/bs";
import banner from '../../../assets/userProfile/userBanner.png'
import pic from '../../../assets/profile/profile2.jpg'
import img2 from '../../../assets/home/recommendation/girl.png'
import img3 from '../../../assets/home/recommendation/girl2.png'
import img4 from '../../../assets/home/recommendation/girl3.png'
import img5 from '../../../assets/home/recommendation/girl4.png'
import edit from '../../../assets/other/edit.svg'
import share from '../../../assets/other/share.svg'
import { Info } from '../MyProfle/Profile2/Profile2';
import age from '../../../assets/other/age.svg'
import height from '../../../assets/other/height.svg'
import job from '../../../assets/other/job.svg'
import city from '../../../assets/other/city.svg'
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import file from '../../../assets/other/file.png'


const UserProfile = () => {
  return (
    <div className="max-w-7xl mx-auto mt-4">

      {/* grid section */}
      <div className="flex flex-col md:flex-row gap-4 font-lato text-[#3E4A5B]">
        {/* user info section */}
        <div className="md:w-[60%] ">
            {/* banner and profile img */}
          <div className="mb-4 border border-[#C3CAD5] rounded-2xl overflow-hidden">
            <div className="relative">
              <img className='w-full h-[180px] object-cover' src={banner} alt="" />
              <img className='absolute top-[50%] left-5 h-[150px] w-[150px] object-cover object-top rounded-full border-[3px] border-l-0 border-primary-400' src={pic} alt="" />
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-2">
              <div className="h-[30px] md:h-[150px] w-[150px] md:block"></div> {/* spacer */}
              <div className="w-full mx-4">
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between ">
                  <div className="">
                    <p className="font-alice text-[30px] lg:text-[30px]  text-[#272932]">Cameron Williamson</p>
                    <p>example@name.com</p>
                  </div>
                  <div className="flex gap-2 items-end">
                    <button className="bg-primary-300 px-[15px] py-[10px] rounded-full"><img className="" src={share} alt="" /></button>
                    <EditBtn text="Edit Profile"/>
                  </div>
                </div>
                {/* follow section */}
                <div className="flex justify-between mt-5 mr-8 md:mr-0">
                  <div className="text-[18px] text-center">
                    <p className="font-bold">100</p>
                    <p>Sent Interested</p>
                  </div>
                  <div className="text-[18px] text-center">
                    <p className="font-bold">400</p>
                    <p>Followers</p>
                  </div>
                  <div className="text-[18px] text-center ">
                    <p className="font-bold">2500</p>
                    <p>Following</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* status */}
          <BoxBorderContent title="Status" content={<Status />}/>
          <BoxBorderContent title="About Me" content={<AboutMe />}/>
          <BoxBorderContent title="Personal Info" content={<PersonalInfo />}/>
          <BoxBorderContent title="Contact Info" content={<ContactInfo />}/>
        </div>

        {/* other section */}
        <div className=" md:w-[40%]">
          <BoxBorderContent title="Hobbies" content={<Hobbies />}/>
          <BoxBorderContent title="Social Media" content={<SocialMedia />}/>
          <Plan />
        </div>
      </div>
      
    </div>
  );
};

export default UserProfile;

const EditBtn = ({text}) => {
  return (
    <button className="bg-[#3E4A5B] text-[#F0F2F5] px-[15px] py-[10px] rounded-full flex gap-1 items-center"><img className="" src={edit} alt="" />{text}</button>
  )
}

const BoxBorderContent = ({title, content}) => {
  return (
    <div className="mb-5 border border-[#C3CAD5] rounded-2xl overflow-hidden">
      <div className="flex justify-between items-center px-5 py-3">
        <p className="font-alice text-[25px] ">{title}</p>
        <EditBtn text="Edit"/>
      </div>
      <hr className='border border-[#C3CAD5]'/>
      <div className="p-4">
        {content}
      </div>
    </div>
  )
}

const HBox = ({ value }) => {
  return <div className="bg-[#F0F2F5] py-3 px-4 rounded-full text-[#536279] text-base">{value}</div>
}

// contents

// status
const Status = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

      <div className="p-3  rounded-2xl bg-[#F0F2F5]">
        <img className="h-[35px] w-[35px] mb-3 mx-auto" src={age} alt="" />
        <div className="text-center text-[18px]">
          <p>AGE:</p>
          <p>24</p>
        </div>
      </div>
      <div className="p-3 bg-[#F0F2F5] rounded-2xl">
        <img className="h-[35px] w-[35px] mb-3 mx-auto" src={height} alt="" />
        <div className="text-center text-[18px]">
          <p>HEIGHT:</p>
          <p>24</p>
        </div>
      </div>
      <div className="p-3 bg-[#F0F2F5] rounded-2xl">
        <img className="h-[35px] w-[35px] mb-3 mx-auto" src={city} alt="" />
        <div className="text-center text-[18px]">
          <p>CITY:</p>
          <p>24</p>
        </div>
      </div>
      <div className="p-3 bg-[#F0F2F5] rounded-2xl">
        <img className="h-[35px] w-[35px] mb-3 mx-auto" src={job} alt="" />
        <div className="text-center text-[18px]">
          <p>JOB:</p>
          <p>24</p>
        </div>
      </div>
    </div>
  )
}

const AboutMe = () => {
  return (
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      <br />
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
  )
}

const PersonalInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="">
        <Info title='Name' value="Dua Lipa" />
        <Info title='Name' value="Dua Lipa" />
        <Info title='Name' value="Dua Lipa" />
        <Info title='Name' value="Dua Lipa" />
        <Info title='Name' value="Dua Lipa" />
        <Info title='Name' value="Dua Lipa" />
        <Info title='Name' value="Dua Lipa" />
      </div>
      <div className="">
        <Info title='Name' value="Dua Lipa" />
        <Info title='Name' value="Dua Lipa" />
        <Info title='Name' value="Dua Lipa" />
        <Info title='Name' value="Dua Lipa" />
        <Info title='Name' value="Dua Lipa" />
        <Info title='Name' value="Dua Lipa" />
        <Info title='Name' value="Dua Lipa" />
      </div>
    </div>
  )
}

// contact info 
const ContactInfo = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 ">
        <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
          <BsTelephone className="text-2xl" />
        </div>
        <p className="text-[#3E4A5B] text-[18px]"> <span className="text-[#8695AC] mr-1">Phone Number:</span>(704) 555-0127</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
          <AiOutlineMail className="text-2xl" />
        </div>
        <p className="text-[#3E4A5B] text-[18px]"> <span className="text-[#8695AC] mr-1">Email:</span>example@name.com</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
          <CiLocationOn className="text-2xl" />
        </div>
        <p className="text-[#3E4A5B] text-[18px]"> <span className="text-[#8695AC] mr-1">Location:</span>Nirala abashikh alaka, Rd-05, khulna</p>
      </div>
    </div>
  )
}

// hobbies
const Hobbies = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      <HBox value="Gaming" />
      <HBox value="Gaming" />
      <HBox value="Gaming" />
      <HBox value="Gaming" />
      <HBox value="Gaming" />
      <HBox value="Gaming" />
      <HBox value="Gaming" />
    </div>
  )
}

const SocialMedia = () => {
  return (
    <div className="flex gap-2">
      {/* single small img */}
      <div className="relative group cursor-pointer">
        <img className='w-[125px] h-[113px] rounded-2xl object-cover ' src={img2} alt="" />
        <div className="absolute center-div bg-black rounded-2xl duration-300 bg-opacity-50 h-0 w-0 group-hover:h-full group-hover:w-full ">
          <div className="w-full h-full flex items-center justify-center">
            
          </div>
        </div>
      </div>

      {/* single small img */}
      <div className="relative group cursor-pointer">
        <img className='w-[125px] h-[113px] rounded-2xl object-cover ' src={img3} alt="" />
        <div className="absolute center-div bg-black rounded-2xl duration-300 bg-opacity-50 h-0 w-0 group-hover:h-full group-hover:w-full ">
          <div className="w-full h-full flex items-center justify-center">
            
          </div>
        </div>
      </div>

      {/* single small img */}
      <div className="relative group cursor-pointer">
        <img className='w-[125px] h-[113px] rounded-2xl object-cover ' src={img4} alt="" />
        <div className="absolute center-div bg-black rounded-2xl duration-300 bg-opacity-50 h-0 w-0 group-hover:h-full group-hover:w-full ">
          <div className="w-full h-full flex items-center justify-center">
            
          </div>
        </div>
      </div>

      {/* single small img */}
      <div className="relative group cursor-pointer">
        <img className='w-[125px] h-[113px] rounded-2xl object-cover ' src={img5} alt="" />
        <div className="absolute center-div bg-black rounded-2xl duration-300 bg-opacity-50 h-0 w-0 group-hover:h-full group-hover:w-full ">
          <div className="w-full h-full flex items-center justify-center">
            
          </div>
        </div>
      </div>
    </div>
  )
}

// plan
const Plan = () => {
  return (
    <div className="mb-5 border border-[#C3CAD5] rounded-2xl overflow-hidden">
      <img className="mx-auto my-6" src={file} alt="" />
      <p className="text-center text-[30px] font-alice">Upgrade to PRO for <br /> more resources</p>
      <button className='text-[22px] w-[90%] mx-auto my-6  bg-primary-500 rounded-full text-white py-4  flex justify-center items-center '>Upgrade Now</button>
    </div>
  )
}
