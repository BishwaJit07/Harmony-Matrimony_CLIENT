import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const navItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>About</Link></li>
    <li><Link to='/'>Contact</Link></li>
    <li><Link to='/'>All Profile</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
  </>
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error))
}
  return (
    <div>
      {/* This is a demo navbar */}
      <div className="navbar red-primary text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
              {navItem}
            </ul>
          </div>
          <div className="text-left">
            <Link to='/' className=" normal-case md:text-3xl  font-mono text-xl">SoulMates</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem}
          </ul>
        </div>
        {user ? <div className="navbar-end me-3"><button onClick={handleLogOut} className="btn btn-sm text-red-600 rounded-s-full rounded-b-full text-xs ">Logout</button></div>
         : 
         <div className="navbar-end me-3">
          <Link to='signin' className="m-3 hidden md:flex">Sign In</Link>
          <Link to='signup' className="btn btn-sm text-red-600 rounded-s-full rounded-b-full text-xs ">Join Now</Link>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;