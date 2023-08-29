import { Outlet, useLocation } from 'react-router-dom';

import Navbar from '../Shared/Navbar';
import HomeNavbar from '../component/Pages/Home/HomeCompnent/HomeNavbar';
import Footer from '../Shared/Footer/Footer';


const Main = () => {
    const location = useLocation();
    const homeheader = location.pathname.includes("/signup") || location.pathname.includes("/signIn")  || location.pathname.includes("/blog") || location.pathname.includes("/alluser") || location.pathname.includes("/about") || location.pathname.includes("/patnerProfile") || location.pathname.includes("/plans") || location.pathname.includes("/myProfile") || location.pathname.includes("/contact")|| location.pathname.includes("/happy");
    return (
        <div>
            { homeheader ?  <Navbar/> : <HomeNavbar/>}
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Main;