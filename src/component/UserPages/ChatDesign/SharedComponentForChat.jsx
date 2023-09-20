import React from 'react';
import call from '../../../assets/chat/call.svg'
import dropdown from '../../../assets/chat/dropdown.svg'
import profile from '../../../assets/chat/profile.svg'
import search from '../../../assets/chat/search.svg'
import searchRed from '../../../assets/chat/searchRed.svg'
import tickGray from '../../../assets/chat/tickGray.svg'
import tickRed from '../../../assets/chat/tickRed.svg'
import video from '../../../assets/chat/video.svg'
import person from '../../../assets/home/recommendation/girl.png'

const TestImg = () => {
  return <img src={profile} alt="" />
}

const OnlinePerson = () => {
  return (
    <div className="relative">
      <img className='w-[70px] h-[70px] rounded-full' src={person} alt="" />
      <div className="bg-green-500 w-4 h-4 rounded-full border border-white absolute bottom-1 right-0"></div>
    </div>
  )
}

const InboxContainer = ({ isActive }) => {
  return (
    <div className={isActive ? 'flex justify-between bg-gradient-to-l from-primary-100 cursor-pointer' : 'flex justify-between hover:bg-gray-200 cursor-pointer'}>
      <div className="flex py-2">
        <div className="w-[90px]">
          <OnlinePerson />
        </div>
        <div className="w-full px-2 flex flex-col justify-evenly">
          <div className="flex justify-between items-end">
            <p className='text-[#434656] font-alice text-xl'>Ralph Edwards</p>
            <p className='font-lato text-[14px] text-[#8695AC]'>05:15 pm</p>
          </div>
          <div className="flex justify-between">
            <p className='text-[14px] font-lato text-[#8695AC] '>Lorem Ipsum is simply dummy</p>
            <img src={tickGray} alt="" />
          </div>
        </div>
      </div>

      {isActive && <div className="bg-primary-500 w-2"></div>}
    </div>
  )
}

const ChatBubbleStart = () => {
  return (
    <div className="chat chat-start ">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={person} />
        </div>
      </div>
      <div className="chat-header flex">
        Obi-Wan Kenobi
        <time className="text-xs opacity-50 ">12:45</time>
      </div>
      <div className="chat-bubble bg-white text-black">You were the Chosen One!</div>
      <div className="chat-footer opacity-50">
        Delivered
      </div>
    </div>
  )
}

const ChatBubbleEnd = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={person} />
        </div>
      </div>
      <div className="chat-header">
        Anakin
        <time className="text-xs opacity-50">12:46</time>
      </div>
      <div className="chat-bubble bg-[#FF7474]  text-white">I hate you!</div>
      <div className="chat-footer opacity-50">
        Seen at 12:46
      </div>
    </div>
  )
}

export { TestImg, OnlinePerson, InboxContainer, ChatBubbleStart, ChatBubbleEnd };