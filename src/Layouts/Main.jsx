import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar2 from '../component/Pages/Home/HomeCompnent/NavBar2/NavBar2';
import ScrollToTopButton from '../Shared/ScrollTopToButtom';

const Main = () => {
    // const location = useLocation();
    // const homeheader = location.pathname.includes("/signup") || location.pathname.includes("/signIn")  || location.pathname.includes("/blog") || location.pathname.includes("/alluser") || location.pathname.includes("/about") || location.pathname.includes("/patnerProfile") || location.pathname.includes("/plans") || location.pathname.includes("/myProfile") || location.pathname.includes("/contact")|| location.pathname.includes("/happy");
    return (
        <div className='dark:bg-gray-800'>
            <NavBar2 />
            {/* { homeheader ?  <Navbar/> : <HomeNavbar/>} */}
            <Outlet/>
            <Footer></Footer>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default Main;