import { Link } from "react-router-dom";


const Navbar = () => {
  const navItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>About</Link></li>
    <li><Link to='/'>Contact</Link></li>
    <li><Link to='/'>Event</Link></li>
    <li><Link to='/'>Blog</Link></li>
  </>
  return (
    <div>
      {/* This is a demo navbar */}
      <div className="navbar red-primary text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl font-mono">SoulMates</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end me-3">
          <p className="m-3">Sign In</p>
          <a className="btn btn-sm text-red-600 rounded-s-full rounded-b-full">Join Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;