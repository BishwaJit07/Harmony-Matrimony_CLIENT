import { useContext, useState } from "react";
import sliderbtn from "../../../assets/other/control.png"
import { BiHome, BiUser } from "react-icons/bi";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import DashboardNav from "./Shared/DashboardNav";
import FooterDashboard from "./FooterDashboard";
import { FaUserTie } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import DashboardProfile from "./Shared/DashboardProfile";

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const {user} = useContext(AuthContext);
    console.log(user?.email);
    const Menus = [
       
        { title: "Dashboard", icon: <BiHome></BiHome>, link: "/dashboard/adminUser" },
        { title: "Manage User", icon: <BiUser></BiUser>, link: "/dashboard/manageUser" },
        { title: "Add Service", icon: <BiHome></BiHome>, link: "/dashboard/addService" },
        { title: "Add Blog", icon: <BiHome></BiHome>, link: "/dashboard/addBlog" },
        { title: "Book Service", icon: <BiUser></BiUser>, link: "/dashboard/bookService" },
        { title: "All User", icon: <BiUser></BiUser>, link: "/dashboard/allUser" },
        { title: "Verify User", icon: <BiUser></BiUser>, link: "/dashboard/verifyUser" },
        {title: "User Support", icon: <FaUserTie></FaUserTie>, link: "/dashboard/userDetails"}


    ];

    return (
        <div className="flex select-none">
            <div className={` ${open ? "w-72" : "w-20 "}  h-screen p-5  pt-8 relative duration-300 `}>
                <img src={sliderbtn} className={`absolute cursor-pointer -right-3 top-[90px] w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
                <div className="flex gap-x-4 items-center ">
                    <img src="" className={`cursor-pointer duration-500 ${open && "rotate-[360deg] "}`}/>
                    <h1 className={` origin-left ms-16 font-medium text-xl duration-200 ${!open && "scale-0 "}`}>Soulmate</h1>
                </div>
                <div>
                  <div className="avatar  my-5">
                    <div className="w-24 ms-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img className={user?.photoURL} src='' />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-center text-xl my-2 text-cyan-700 font-medium">{user?.displayName}</h4>
                    <h6 className="text-center text-md text-gray-500 border font-medium">Admin</h6>
                  </div>
                </div>
                <ul className="pt-6 ">
                    {Menus.map((Menu, index) => (
                        <li key={index} className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white  text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}>
                            <NavLink to={Menu.link}>
                                <button className="flex items-center gap-5 cursor-pointer">
                                    {Menu.icon}
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                        {Menu.title}
                                    </span>
                                </button>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 bg-slate-200 flex-col flex-grow">
                <DashboardNav></DashboardNav>
                <div className=""><Outlet></Outlet></div>
                <DashboardProfile></DashboardProfile>
                <FooterDashboard></FooterDashboard>
            </div>

        </div>
    );
};
export default Dashboard;