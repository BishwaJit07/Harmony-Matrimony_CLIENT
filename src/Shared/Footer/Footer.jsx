import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineLocationCity, MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import FooterBotom from "./FooterBotom";
const Footer = () => {
  return (
    <div>
      <footer className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full  font-alice py-10 px-20 bg-[#222328] text-white mx-auto ">
        <div className="mr-10">
          <span className="footer-title">Services</span>
          <p className=" max-w-xs text-[#C3CAD5]">
            Discover your ideal partner through our trusted matrimonial website.
            We bring people together, fostering genuine connections based on
            compatibility and shared life goals. Start your journey to a joyful
            and fulfilling relationship with us.
          </p>
          <p className="footer-title mt-5 text-[#FFFFFF] opacity-[100%]">
            Follow Us
          </p>
          <div className="flex space-x-4 mb-5">
            <a href="#">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="mr-10">
          <span className="footer-title text-[30px] leading-[45px] opacity-[100%]">
            Quick Link
          </span>
          <Link
            to="#"
            className="link link-hover flex items-center gap-2 text-[#C3CAD5] text-[16px]"
          >
            <FaArrowRight /> About us
          </Link>
          <Link
            to="#"
            className="link link-hover flex items-center gap-2 text-[#C3CAD5] text-[16px]"
          >
            <FaArrowRight /> Explore
          </Link>
          <Link
            to="#"
            className="link link-hover flex items-center gap-2 text-[#C3CAD5] text-[16px]"
          >
            <FaArrowRight /> Blog
          </Link>
          <Link
            to="#"
            className="link link-hover flex items-center gap-2 text-[#C3CAD5] text-[16px]"
          >
            <FaArrowRight /> Contact Us
          </Link>
          <Link
            to="#"
            className="link link-hover flex items-center gap-2 text-[#C3CAD5] text-[16px]"
          >
            <FaArrowRight /> Plans
          </Link>
          <Link
            to="#"
            className="link link-hover flex items-center gap-2 text-[#C3CAD5] text-[16px]"
          >
            <FaArrowRight /> Privacy Policy
          </Link>
        </div>

        <div className="mr-10">
          <span className="footer-title text-[30px] leading-[45px] opacity-[100%]">
            Contact Details
          </span>
          <a href="" className="link link-hover text-[#C3CAD5] text-[16px]">
            <p className="text-[22px] mb-3">Phone Number</p>
            <div className="flex items-center gap-2 text-base ">
              <FaPhoneAlt></FaPhoneAlt>
              <span>+123 456 789</span>
            </div>
          </a>
          <a href="" className="link link-hover text-[#C3CAD5] text-[16px]">
            <p className="text-[22px] mb-3">Email</p>
            <div className="flex items-center gap-2 text-base ">
              <MdOutlineMail></MdOutlineMail>
              <span>xyz@gmail.com</span>
            </div>
          </a>
          <a href="" className="link link-hover text-[#C3CAD5] text-[16px]">
            <p className="text-[22px] mb-3">Office Location</p>
            <div className="flex items-center gap-2 text-base ">
              <MdOutlineLocationCity></MdOutlineLocationCity>
              <span>Dhaka, Dhaka, Bangladesh</span>
            </div>
          </a>
        </div>

        <div>
          <span className="footer-title text-[30px] leading-[45px] opacity-[100%]">
            Newsletter
          </span>
          <div className="form-control max-w-prose">
            <p className="text-[16px] text-[#C3CAD5]">
              Sign Up to get updates & news about us . Get Latest Deals from
              Walker is Inbox to our mail address.
            </p>
            <label className="label">
              <span className="label-text text-[#C3CAD5]"> Email</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 border border-[#cf9063]"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                sent
              </button>
            </div>
          </div>
          <button className=" mt-5 btn bg-[#cf9063] text-white hover:bg-[#8f5f3d] w-full">
            Subscribe
          </button>
        </div>
      </footer>
      <FooterBotom></FooterBotom>
    </div>
  );
};

export default Footer;
