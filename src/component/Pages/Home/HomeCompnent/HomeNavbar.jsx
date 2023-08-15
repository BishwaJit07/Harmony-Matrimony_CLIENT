import { Link } from "react-router-dom";
import { useContext } from "react";
import logo from "../../../../assets/logo/logo.png"
import { AuthContext } from "../../../../Provider/AuthProvider";

const HomeNavbar = () => {
    const navItem = < >
    <li><Link  to='/'>Home</Link></li>
    <li><Link  to='/about'>About</Link></li>
    <li><Link  to='/'>Contact</Link></li>
    <li><Link  to='/'>All Profile</Link></li>
    <li><Link  to='/blog'>Blog</Link></li>
  </>
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error))
}
  return (
    <div className="secondary">

      <div className="navbar  text-[#728483] w-[84%] mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
              {navItem}
            </ul>
          </div>
          <div className="">
            <Link to='/' className=""><img className="w-40 " src={logo} alt="" /></Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            {navItem}
          </ul>
        </div>
        {user ? <div className="navbar-end me-3"><button onClick={handleLogOut} className="btn btn-sm text-red-600 rounded-s-full rounded-b-full text-xs ">Logout</button></div>
         : 
         <div className="navbar-end me-3 ">
          
          
          <button >
            <Link to="signup">
              <p className="  text-[#FF725E] p-1 px-2 text-base lg:text-base  font-semibold rounded-xl outline outline-offset-2 outline-4 outline-[#FF725E] hover:outline-[#bc1828]">
                Join Now
              </p>
            </Link>
          </button>
        </div>}
      </div>
    </div>
  )
};

export default HomeNavbar;