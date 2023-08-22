import { useState } from "react";
import useMyData from "../../../Hooks/useMydata";
import { TbUserEdit } from "react-icons/tb";
import Post from "./postFunction/Post";

const MyProfile = () => {
  const [userInfo, refetch] = useMyData();
  const {
    img,
    name,
    country,
    religion,
    physical_attributes,
    mobile,
    email,
    gender,
    about,
    age,
  } = userInfo;

  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Posts", "Followers"];

  const changeTab = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="w-[80%] mx-auto my-10">
      {/* Profile Header */}
      <div className=" bg-white w-full flex h-40 border items-center relative shadow-lg rounded-xl">
        {/* Profile Image */}
        <div className=" ml-4">
          <img
            className="round border border-teal-400 rounded-full p-2 text w-20 h-20 md:w-32 md:h-32 mx-auto object-fill"
            src={img}
            alt="user"
          />
        </div>
        {/* Profile Info */}
        <div className="ml-4">
          <h3 className="user-name font-semibold md:text-2xl text-base ">
            {name}
          </h3>
          <div className="address flex items-center text-gray-700 font-bold">
            <p className="block">{country}</p>
          </div>
          <p className="">Age: {age}</p>
        </div>
        {/* Notification Bell */}
        <div className="text-white absolute rounded-full top-1/2 right-2 md:right-8 transform -translate-y-1/2 w-10 h-10 flex justify-center items-center cursor-pointer transition duration-500 ease-in-out bg-[#FF725E] hover:bg-white border-2  hover:text-[#FF725E]">
          <TbUserEdit></TbUserEdit>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row py-6 xl:pr-16">
        {/* Left Side */}
        <div className="w-full xl:w-1/4">
          {/* Profile Information */}
          <div className=" bg-white shadow-md p-8">
            <p className="mobile-no text-gray-600">phone: {mobile}</p>
            <p className="user-mail text-gray-600">Email: {email}</p>
            <div className=" mt-4">
              <h3 className="font-semibold text-xl">Bio</h3>
              <p className=" text-gray-600">{about}</p>
            </div>
            <div>
              <h6 className="my-2 font-medium">More Info</h6>
              <ul>
                <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
                  {religion}
                </li>
                <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
                  {gender}
                </li>
                <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
                  {physical_attributes?.height}
                </li>
                <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
                  {physical_attributes?.weight}
                </li>
              </ul>
            </div>
            <div className="flex gap-5 mt-4">
              <button className=" bg-[#FF725E] text-white py-2 px-4 rounded-md">
                Chat
              </button>
              <button className=" bg-[#FF725E] text-white py-2 px-4 rounded-md ">
                Follow
              </button>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="xl:w-3/4 w-full xl:pl-16 my-20 lg:my-0 ">
          {/* Tab Navigation */}
          <div className=" bg-white shadow-md">
            <ul className="flex">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={`cursor-pointer px-6 py-2 w-full text-center transition duration-200 ease-in-out ${
                    activeTab === index ? "active bg-[#FF725E] text-white" : ""
                  }`}
                  onClick={() => changeTab(index)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
          {/* Profile Content */}
          <div className="mt-10">
            <div
              className={`profile-posts tab ${
                activeTab === 0 ? "block" : "hidden"
              }`}
            >
              <Post />
              {/* <h1 className="font-semibold text-2xl mb-4">Your Posts</h1>
              <p className="text-gray-600">Post will show here</p> */}
            </div>
            <div
              className={`profile-reviews tab ${
                activeTab === 1 ? "block" : "hidden"
              }`}
            >
              <h1 className="font-semibold text-2xl mb-4">Followers</h1>
              <p className="text-gray-600">followers will show here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
