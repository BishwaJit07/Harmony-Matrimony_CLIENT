import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import ScrollToTopButton from '../Shared/ScrollTopToButtom';
import NavBar from '../Shared/NavBar/NavBar';
import ScrollToTop from '../Shared/scroll to top/ScrollToTop';

const Main = () => {
    return (
        <div className='dark:bg-gray-800'>
            <ScrollToTop/>
            <NavBar />
            <Outlet/>
            <Footer></Footer>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default Main;