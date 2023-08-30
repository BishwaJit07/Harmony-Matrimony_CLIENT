// import { Outlet } from "react-router";
// // import { NavLink } from "react-router-dom";
// import useAuth from "../../../Hooks/useAuth";
// import useAdmin from "../../../Hooks/useAdmin";
// import { NavLink } from "react-router-dom";

// const Dashboard = () => {
//   const [isAdmin] = useAdmin();
//   console.log(isAdmin);
//     const auth = useAuth();
//     console.log(auth);
//     return (
//         <div className="drawer lg:drawer-open">
//             <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content flex flex-col ">
//                 {/* Page content here */}
//                 <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
//                 <Outlet></Outlet>
//             </div>
//             <div className="drawer-side">
//                 <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

//                 <ul className="menu p-4 w-80 h-full secondary text-base-content">
//                     {/* Sidebar content here */}
//                     <h1 className="text-[#FF725E] text-2xl font-bold border-b-2 border-[#FF725E] w-fit mx-auto p-2">
//                         Dashboard
//                     </h1>
//                     <div className="">
//                         <img src='https://i.ibb.co/swBsp3p/flower.png' alt="" className="lg:w-[40%] w-[60%] md:w-[40%] mx-auto -mt-1 mb-5" />
//                     </div>
//                     <div>

//                      {/* {isAdmin ? <div className="navStyle">
//                         <div className="divider">Admin Home</div>

//                         <li><NavLink to='/dashboard/manageUser'>Manage User</NavLink></li>
//                         <li><NavLink to='/dashboard/allUser'>All User</NavLink></li>
//                     </div> : <div className="navStyle">
//                         <div className="divider"> Home</div>
//                         <li><NavLink to='/dashboard/manageUser'>Manage User!!!</NavLink></li>
//                         <li><NavLink to='/dashboard/allUser'>All User</NavLink></li> </div>}  */}

//                         <li><NavLink to='/dashboard/manageUser'>Manage User</NavLink></li>
//                         <li><NavLink to='/dashboard/allUser'>All User</NavLink></li>
//                         <li><NavLink to='/dashboard/addService'>Add Service</NavLink></li>
//                     </div> : <div className="navStyle">
//                         <div className="divider"> Home</div>
//                         <li><NavLink to='/dashboard/manageUser'>Manage User!!!</NavLink></li>
//                         <li><NavLink to='/dashboard/allUser'>All User</NavLink></li> 
//                         <li><NavLink to='/dashboard/bookService'>Service Booking </NavLink></li> 


//                         </div>

//                 </ul>

//             </div>
//         </div>
//     );
// };

// export default Dashboard;
import { useState } from "react";
import sliderbtn from "../../../assets/other/control.png"
import { BiHome, BiUser } from "react-icons/bi";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", icon: <BiHome></BiHome>, link: "/dashboard" },
        { title: "User", icon: <BiUser></BiUser>, link: "/dashboard/manageUser" },
        { title: "Add Service", icon: <BiHome></BiHome>, link: "/dashboard/addService" },
        { title: "Book Service", icon: <BiUser></BiUser>, link: "/dashboard/bookService" },

    ];

    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    }  bg-blue-900 h-screen p-5  pt-8 relative duration-300`}
            >
                <img
                    src={sliderbtn}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src=" "
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Soulmate
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            <NavLink to={Menu.link}>
                                <div className="flex items-center gap-5">
                                    {Menu.icon}
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                        {Menu.title}
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-screen flex-1 p-7">
                <Outlet></Outlet>
            </div>
        </div>
    );
};
export default Dashboard;

