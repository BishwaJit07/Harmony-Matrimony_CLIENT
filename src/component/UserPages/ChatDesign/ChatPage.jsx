import React from 'react';
import { ChatBubbleEnd, ChatBubbleStart, InboxContainer, OnlinePerson, TestImg } from './SharedComponentForChat';
import tickGray from '../../../assets/chat/tickGray.svg'

import person from '../../../assets/home/recommendation/girl.png'
import profile from '../../../assets/chat/profile.svg'
import video from '../../../assets/chat/video.svg'
import call from '../../../assets/chat/call.svg'
import send from '../../../assets/chat/send.svg'

const ChatPage = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className="grid grid-cols-12">
        {/* users section */}
        <div className="col-span-3 ">
          <div className="flex justify-between py-5 px-4">
            <p className='text-[#272932] text-[28px] font-alice'>Message (14)</p>
            <img src={tickGray} alt="" />
          </div>

          {/* search field */}
          <div className="relative px-2">
            <input className='py-4 pl-12 w-full  rounded-full border border-[#F6A1A1] active:border-green-500' type="text" name="" id="" placeholder='Search for contact here...' />
            <img className='absolute top-[18px] left-6' src={tickGray} alt="" />
          </div>

          {/* showing online people */}
          <div className="flex overflow-x-scroll-auto gap-2 mt-5 mb-2">
            <OnlinePerson />
            <OnlinePerson />
          </div>

          {/* inbox container with img and name */}
          <div className="">
            <InboxContainer />
            <InboxContainer isActive={true} />
            <InboxContainer />
            <InboxContainer />
          </div>

        </div>

        {/* chat section */}
        <div className="col-span-6 flex flex-col border border-t-0 border-b-0 bg-red-50">
          <div className="flex justify-between px-5 py-5 bg-red-50 items-center shadow-sm flex-none">
            {/* img and name */}
            <div className="flex items-center gap-2 ">
              <img className='w-[50px] h-[50px] rounded-full object-cover object-top ' src={person} alt="" />
              <div className="">
                <p className='text-[#434656] font-alice text-[18px]'>Ralph Edwards</p>
                <p className='font-lato text-[#4ECA77] text-[12px]  '>Online</p>
              </div>
            </div>

            {/* call icons */}
            <div className="flex gap-6">
              <img className='w-[30px] h-[30px] ' src={call} alt="" />
              <img className='w-[30px] h-[30px] ' src={video} alt="" />
            </div>
          </div>

          {/* chat text */}
          <div className="flex-grow ">
            <ChatBubbleStart />
            <ChatBubbleEnd />
          </div>

          {/* input message section */}
          <div className="px-4 flex-none mb-4 flex justify-between items-center">
            <input className='font-lato text-[20px] w-[90%] bg-[#EDDEDE] px-5 py-3 rounded-xl ' placeholder='Message...' type="text" />
            <div className="">
              <img className='p-3 bg-gradient-to-tl from-[#FE3535] to-[#FFD5D5] rounded-full ' src={send} alt="" />
            </div>
          </div>
        </div>

        {/* profile Section */}
        <div className="col-span-3 ">
          <img className='w-[150px] h-[150px] rounded-full object-cover object-top mx-auto mt-8' src={person} alt="" />
          <p className='text-[#434656] text-[28px] text-center font-alice mt-4 '>Ralph Edwards</p>
          <p className='text-[#4ECA77] font-lato text-[16px] text-center'>Online</p>
          <div className=" flex  mx-auto gap-4 justify-center mt-3">
            <img className='p-1 rounded-full bg-red-200' src={profile} alt="" />
            <img className='p-1 rounded-full bg-red-200' src={profile} alt="" />
            <img className='p-1 rounded-full bg-red-200' src={profile} alt="" />
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <button className='py-4 px-4 bg-[#128587] text-[#F0F2F5] rounded-full'>Invite Meeting</button>
            <button className='py-4 px-4 bg-[#2F9D54] text-[#F0F2F5] rounded-full'>Relationship Req</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;