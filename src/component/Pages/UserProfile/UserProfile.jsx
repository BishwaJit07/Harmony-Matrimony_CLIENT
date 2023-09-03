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
import ages from '../../../assets/other/age.svg'
import heights from '../../../assets/other/height.svg'
import jobs from '../../../assets/other/job.svg'
import citys from '../../../assets/other/city.svg'
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import file from '../../../assets/other/file.png'
import useMyData from "../../../Hooks/useMyData";





const UserProfile = () => {
  const [userInfo] = useMyData();
  
  const { profileImage, name,email} = userInfo;
  console.log(userInfo);

  return (
    <div className="max-w-7xl mx-auto mt-4">

      {/* grid section */}
      <div className="flex gap-4 font-lato text-[#3E4A5B]">
        {/* user info section */}
        <div className="w-[60%] ">
            {/* banner and profile img */}
          <div className="mb-4 border border-[#C3CAD5] rounded-2xl overflow-hidden">
            <div className="relative">
              <img className='w-full h-[180px] object-cover' src={banner} alt="" />
              <img className='absolute top-[50%] left-5 h-[150px] w-[150px] object-cover object-top rounded-full border-[3px] border-l-0 border-primary-400' src={profileImage}alt="" />
            </div>
            <div className="flex gap-6 p-2">
              <div className="h-[150px] w-[150px] "></div> {/* spacer */}
              <div className="w-full mx-4">
                <div className="flex justify-between ">
                  <div className="">
                    <p className="font-alice text-[30px] lg:text-[30px]  text-[#272932]">{name}</p>
                    <p>{email}</p>
                  </div>
                  <div className="flex gap-2 items-end">
                    <button className="bg-primary-300 px-[15px] py-[10px] rounded-full"><img className="" src={share} alt="" /></button>
                    <EditBtn text="Edit Profile"/>
                  </div>
                </div>
                {/* follow section */}
                <div className="flex justify-between mt-5">
                  <div className="text-[18px] text-center">
                    <p className="font-bold">100</p>
                    <p>Sent Interested</p>
                  </div>
                  <div className="text-[18px] text-center">
                    <p className="font-bold">400</p>
                    <p>Followers</p>
                  </div>
                  <div className="text-[18px] text-center">
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
        <div className=" w-[40%]">
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
  const [userInfo] = useMyData();
  
  const {  age, height,jobSector ,city } = userInfo;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

      <div className="p-3  rounded-2xl bg-[#F0F2F5]">
        <img className="h-[35px] w-[35px] mb-3 mx-auto" src={ages} alt="" />
        <div className="text-center text-[18px]">
          <p>AGE:</p>
          <p>{age}</p>
        </div>
      </div>
      <div className="p-3 bg-[#F0F2F5] rounded-2xl">
        <img className="h-[35px] w-[35px] mb-3 mx-auto" src={heights} alt="" />
        <div className="text-center text-[18px]">
          <p>HEIGHT:</p>
          <p>{height}</p>
        </div>
      </div>
      <div className="p-3 bg-[#F0F2F5] rounded-2xl">
        <img className="h-[35px] w-[35px] mb-3 mx-auto" src={citys} alt="" />
        <div className="text-center text-[18px]">
          <p>CITY:</p>
          <p>{city}</p>
        </div>
      </div>
      <div className="p-3 bg-[#F0F2F5] rounded-2xl">
        <img className="h-[35px] w-[35px] mb-3 mx-auto" src={jobs} alt="" />
        <div className="text-center text-[18px]">
          <p>JOB:</p>
          <p>{jobSector}</p>
        </div>
      </div>
    </div>
  )
}

const AboutMe = () => {
  const [userInfo] = useMyData();
  
  const {aboutMe } = userInfo;
  return (
    <p>{aboutMe}</p>
  )
}

const PersonalInfo = () => {
  const [userInfo] = useMyData();
  
  const {  religion,  gender, height,jobSector ,marital_status ,profile , state , weight, education,qualifications , work ,yearlyIncome,drinkHabit,foodHabit} = userInfo;
  console.log(userInfo);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
     <div className="">
                <Info title="Gender" value={gender} />
                <Info title="Height" value={height} />
                <Info
                  title="Marital Status
"
                  value={marital_status}
                />
                <Info title="Profile" value={profile} />
                <Info title="Religion" value={religion} />
                <Info title="State" value={state} />
                <Info title="Weight" value={weight} />
              </div>
              <div className="">
                <Info title="Education" value={education} />
                <Info title="JobSector" value={jobSector} />
                <Info title="Qualifications" value={qualifications} />
                <Info title="Work" value={work} />
                <Info title="Yearly Income" value={yearlyIncome} />
                <Info title="Drink Habbit" value={drinkHabit} />
                <Info title="Food Habbit" value={foodHabit} />
              </div>
    </div>
  )
}

// contact info 
const ContactInfo = () => {
  const [userInfo] = useMyData();
  
  const { country,   mobile,email,city , state } = userInfo;
  console.log(userInfo);
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 ">
        <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
          <BsTelephone className="text-2xl" />
        </div>
        <p className="text-[#3E4A5B] text-[18px]"> <span className="text-[#8695AC] mr-1">Phone Number:</span>{mobile}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
          <AiOutlineMail className="text-2xl" />
        </div>
        <p className="text-[#3E4A5B] text-[18px]"> <span className="text-[#8695AC] mr-1">Email:</span>{email}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
          <CiLocationOn className="text-2xl" />
        </div>
        <p className="text-[#3E4A5B] text-[18px]"> <span className="text-[#8695AC] mr-1">Location:</span>{state} {city} {country}</p>
      </div>
    </div>
  )
}

// hobbies
const Hobbies = () => {
  const [userInfo] = useMyData();
  
  const {interests} = userInfo;
  console.log(userInfo);
  return (
    <div className="flex gap-3 flex-wrap">
          {interests?.map((interest, index) => (
        <HBox key={index} value={interest} />
      ))}
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
