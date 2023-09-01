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
  const [userInfo] = useMyData();
  const { user, logOut } = useContext(AuthContext);
  const NavItems = () => {
    return (
      <>
        <li className=' font-semibold'><NavLink to="/" className={({ isActive }) => (isActive && 'bg-primary-400 text-white')}>Home</NavLink></li>
        <li className=' font-semibold'><NavLink to="/allUser" className={({ isActive }) => (isActive && 'bg-primary-400 text-white')}>Explore</NavLink></li>
        <li className=' font-semibold'><NavLink to="/about" className={({ isActive }) => (isActive && 'bg-primary-400 text-white')}>About us</NavLink></li>
        <li className=' font-semibold'><NavLink to="/blog" className={({ isActive }) => (isActive && 'bg-primary-400 text-white')}>Blog</NavLink></li>
        <li className=' font-semibold'><NavLink to="/plans" className={({ isActive }) => (isActive && 'bg-primary-400 text-white')}>Plans</NavLink></li>
      </>
    );
  }

  
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    
    <Headroom style={{ backgroundColor: "white", zIndex: 50, boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" }}>
      <div className='max-w-7xl mx-auto '>
        <div className="navbar ">
        <div className="justify-start">

          {/* drawer is here */}
          <div className="drawer md:hidden">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
              <label htmlFor='my-drawer-2' className="btn md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
            </div>

            <div className="drawer-side z-30">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <NavItems></NavItems>
              </ul>
            </div>
          </div>
          {/* drawer is here */}
          
          
          {/* TODO: create svg animation for this logo */}
          <Link to='/'>
            <img className='scale-75' src={logo} alt="" />
          </Link>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavItems></NavItems>
          </ul>
        </div>
        <div className="justify-end ml-auto">
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
                {userInfo?.profileImage ? <img className="rounded-full w-10 mr-3" src={userInfo?.profileImage} />  : <img src={noProfile} alt="Shoes" className="rounded-full w-10 mr-3"/>}
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
      </div>
    </Headroom>
  );
};

export default NavBar2;