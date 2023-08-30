import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar2 from '../component/Pages/Home/HomeCompnent/NavBar2/NavBar2';

const Main = () => {
    // const location = useLocation();
    // const homeheader = location.pathname.includes("/signup") || location.pathname.includes("/signIn")  || location.pathname.includes("/blog") || location.pathname.includes("/alluser") || location.pathname.includes("/about") || location.pathname.includes("/patnerProfile") || location.pathname.includes("/plans") || location.pathname.includes("/myProfile") || location.pathname.includes("/contact")|| location.pathname.includes("/happy");
    return (
        <div>
            <NavBar2 />
            {/* { homeheader ?  <Navbar/> : <HomeNavbar/>} */}
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Main;