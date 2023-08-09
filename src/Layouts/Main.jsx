import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className='mx-12'>
            <Outlet/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Main;