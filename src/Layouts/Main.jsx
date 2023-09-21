import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import ScrollToTopButton from '../Shared/ScrollTopToButtom';
import NavBar from '../Shared/NavBar/NavBar';
import ScrollToTop from '../Shared/scroll to top/ScrollToTop';

const Main = () => {
    const location = useLocation();
    const removeFoother = location.pathname.includes("/message")
    return (
        <div >
            <ScrollToTop/>
            <NavBar />
            <Outlet/>
            {removeFoother ? <></> :  <Footer></Footer>}
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default Main;