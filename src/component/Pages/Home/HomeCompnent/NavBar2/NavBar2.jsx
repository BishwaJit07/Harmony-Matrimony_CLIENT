import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../../assets/logo/logo3.png'
import useMyData from '../../../../../Hooks/useMyData';
import noProfile from "../../../../../assets/other/blank.png"
import { useContext } from 'react';
import { AuthContext } from '../../../../../Provider/AuthProvider';
import Headroom from 'react-headroom'
import './NavBar2.css'

const NavBar2 = () => {
  // if you need to add new links in navbar, add it in li element
  const [userInfo ] = useMyData();
  const { user, logOut } = useContext(AuthContext);
  const NavItems = () => {
    return (
      <>
        <li className=' font-semibold text-base '><NavLink to="/" className={({ isActive }) => (isActive && 'w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px]')}>Home</NavLink></li>
        <li className=' font-semibold text-base'><NavLink to="/allUser" className={({ isActive }) => (isActive && 'w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px]')}>Explore</NavLink></li>
        <li className=' font-semibold text-base'><NavLink to="/about" className={({ isActive }) => (isActive && 'w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px]')}>About us</NavLink></li>
        <li className=' font-semibold text-base'><NavLink to="/blog" className={({ isActive }) => (isActive && 'w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px]')}>Blog</NavLink></li>
        <li className=' font-semibold text-base '><Link to="/plans" className={({ isActive }) => (isActive && 'w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px]')}>Plans</Link></li>
      </>
    );
  }


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };

  return (

    <Headroom style={{ backgroundColor: "white", zIndex: 50, boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" }}>
      <div className="navbar bg-base-100 w-[80%] mx-auto select-none">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <NavItems></NavItems>
            </ul>
          </div>
          <Link to="/" className='hidden md:flex'><img className='scale-75' src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
                <NavItems></NavItems>
          </ul>
        </div>
        <div className="navbar-end ml-auto">
            {user ? (
              <div className="flex gap-2 items-center">
                <div className="hidden md:flex navbar-end me-3">
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm text-red-600 rounded-s-full rounded-b-full text-xs "
                  >
                    Logout
                  </button>
                </div>
                <Link to="/myProfile">
                  <div className="avatar online">
                    <div className="w-11 rounded-full">
                      {userInfo?.profileImage ? <img className="rounded-full w-10 mr-3" src={userInfo?.profileImage} /> : <img src={noProfile} alt="Shoes" className="rounded-full w-10 mr-3" />}
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="">
                <Link to="/signup">
                  <button className='bg-primary-500 rounded-full text-white px-10 py-2   justify-center items-center hidden md:flex'>Join Now</button>
                </Link>
              </div>
            )}

          </div>
      </div>
    </Headroom>
  );
};

export default NavBar2;