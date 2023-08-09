
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/footer';
import Navbar from '../Shared/navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;