import { Link } from 'react-router-dom';
import logo from '../../../../../assets/logo/logo3.png'

const NavBar2 = () => {
  // if you need to add new links in navbar, add it in li element
  const NavItems = () => {
    return (
      <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/plans'>Plans</Link></li>
      </>
    );
  }

  return (
    <div className='max-w-7xl mx-auto'>
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
          <button className='bg-primary-500 rounded-full text-white px-10 py-2  flex justify-center items-center '>Join Now</button>
        </div>
      </div>
      
    </div>
  );
};

export default NavBar2;