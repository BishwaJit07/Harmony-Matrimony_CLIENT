import { Outlet } from "react-router";
import {NavLink} from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 h-full secondary text-base-content">
                    {/* Sidebar content here */}
                    <h1 className="text-[#FF725E] text-2xl font-bold border-b-2 border-[#FF725E] w-fit mx-auto p-2">
                        Dashboard
                    </h1>
                    <div className="">
                        <img src='https://i.ibb.co/swBsp3p/flower.png' alt="" className="lg:w-[40%] w-[60%] md:w-[40%] mx-auto -mt-1 mb-5" />
                    </div>
                    {isAdmin ? <div className="navStyle">
                        <div className="divider">Admin Home</div>
                        <li><NavLink to='/contact/manageUser'>Manage User</NavLink></li>
                        <li><NavLink to='/contact/allUser'>All User</NavLink></li>
                    </div> : <div className="navStyle">
                        <div className="divider"> Home</div>
                        <li><NavLink to='/contact/manageUser'>Manage User!!!</NavLink></li>
                        <li><NavLink to='/contact/allUser'>All User</NavLink></li> 
                        <li><NavLink to='/contact/bookService'>Service Booking </NavLink></li> 
                        
                        
                        </div>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;