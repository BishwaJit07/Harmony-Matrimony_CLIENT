import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import payment from '../../assets/payment/payment.jpg'


const PaymentPage = () => {
  return (
    <div className=' max-w-7xl mx-auto '>
      <div className="max-w-[680px]  mx-auto mt-12 mb-8">
        <p className="text-[42px] font-alice text-[#272932] text-center dark:text-white">We’ve Got The <span className="text-[#0F7173] dark:text-cyan-300">Perfect Plan</span>  That is Finding for <span className="text-[#0F7173] dark:text-cyan-300">Your Need</span> </p>
        <p className="text-[#3E4A5B] font-lato text-center px-8 my-[18px] dark:text-gray-200">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
      <div className="grid grid-cols-2 gap-4 my-6 ">
        <div className="">
          <img className='h-[550px] w-full rounded-2xl brightness-50' src={payment} alt="" />
        </div>
        <div className="w-full">
          <h3 className='dark:text-white text-center my-2 font-bold text-red-500'>
            Select Your Favourite Payment Method
            <hr className='my-4'/>
          </h3>
          <div className="flex w-full">
            <NavLink to="/payment/stripe" className={({isActive}) => isActive ? ' w-full border text-center p-4 link-shadow dark:text-cyan-200' : 'w-full border text-center p-4 dark:text-cyan-200'}>Stripe</NavLink>
            <NavLink to="/payment/sslCommerz" className={({ isActive }) => isActive ? ' w-full border text-center p-4 link-shadow dark:text-cyan-200' : 'w-full border text-center p-4 dark:text-cyan-200'}>sslCommerz</NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;