import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import payment from '../../assets/payment/payment.jpg'


const PaymentPage = () => {
  return (
    <div className=' max-w-7xl mx-auto '>
      <div className="max-w-[680px]  mx-auto mt-12 mb-8">
        <p className="text-[42px] font-alice text-[#272932] text-center">We’ve Got The <span className="text-[#0F7173]">Perfect Plan</span>  That is Finding for <span className="text-[#0F7173]">Your Need</span> </p>
        <p className="text-[#3E4A5B] font-lato text-center px-8 my-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
      <div className="grid grid-cols-2 gap-4 my-6 ">
        <div className="">
          <img className='h-[550px] w-full rounded-2xl brightness-50' src={payment} alt="" />
        </div>
        <div className="w-full">
          <div className="flex w-full">
            <NavLink to="/payment/stripe" className={({isActive}) => isActive ? ' w-full border text-center p-4 link-shadow' : 'w-full border text-center p-4'}>Stripe</NavLink>
            <NavLink to="/payment/sslCommerz" className={({ isActive }) => isActive ? ' w-full border text-center p-4 link-shadow' : 'w-full border text-center p-4'}>sslCommerz</NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;