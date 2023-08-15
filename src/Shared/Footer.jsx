import { FaGoogle, FaYoutube, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="">
      {/* THIS IS DEMO FOOTER  */}
      <footer className="footer p-10  bg-opacity-95 text-white rounded-t-2xl flex flex-col md:flex-row justify-center  bg-red-500">
        <div className="lg:ps-8 lg:p-0 ">
          <span className=" uppercase text-3xl font-extralight text-white pb-4">Get In Touch</span>
          <p>Address : Lane City Jackson, USA</p>
          <p>Phone : +92 (8800) 435434</p>
          <p>Email : soulmate@example.com</p>
        </div>
        <div className="lg:ps-28 sm:p-0 lg:border-s-2 sm:border-hidden border-slate-300">
          <span className="uppercase text-3xl font-extralight text-white pb-4">Help & Support</span>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Testimonial</a>
        </div>

        <div className="lg:ps-28 sm:p-0 lg:border-s-2 sm:border-hidden border-slate-300 ">
          <span className="uppercase text-3xl font-extralight text-white pb-4">Social Media</span>
          <div className="flex space-x-4 ">
            <FaGoogle className="text-2xl" />
            <FaGithub className="text-2xl" />
            <FaYoutube className="text-2xl" />
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-1font-bold bg bg-[#d55140]">
        <div>
          <p className=" text-xs text-white">Copyright © 2023 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;