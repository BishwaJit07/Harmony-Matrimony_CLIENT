import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Pages/Home/Home";
import Main from "../Layouts/Main";
import SignIn from "../component/Pages/SignIn/SignIn";
import Blog from "../component/Pages/Blog/Blog";
import Plans from "../component/Pages/Plans/Plans";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Dashboard from "../component/Pages/Dashboard/Dashboard";
import ManageUser from "../component/Pages/Dashboard/ManageUser";
import AllUserD from "../component/Pages/Dashboard/AllUserD";
import Happy from "../Shared/Happy/Happy";
import AllUser from "../component/Pages/AllUser/AllUser";
import SignUp from "../component/Pages/SignUp/SignUp";
import About from "../component/Pages/AboutP/About";
import PatnerProfile from "../component/Pages/patnerProfile/PatnerProfile";
import SingleHappyStory from "../component/Pages/Home/HomeCompnent/HappyStory/SingleHappyStory";
import SingleBlogs from "../component/Pages/Blog/SingleBlogs";
import Contact from "../component/Pages/Contact/Contact";
import Post from "../component/postFunction/Post";
import AuthForm from "../component/Pages/AuthFrom/AuthForm";
import SearchFunction from "../component/Pages/SignUp/SearchFunction";
import MyProfile from "../component/Pages/MyProfle/MyProfile";
import UserInfo1 from "../component/Pages/MyProfle/UserInfo1";
import Userinfo2 from "../component/Pages/MyProfle/Userinfo2";
import Userinfo3 from "../component/Pages/MyProfle/Userinfo3";
import Userinfo4 from "../component/Pages/MyProfle/Userinfo4";
import Userinfo5 from "../component/Pages/MyProfle/Userinfo5";
import Userinfo6 from "../component/Pages/MyProfle/Userinfo6";
import Userinfo7 from "../component/Pages/MyProfle/Userinfo7";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/contact/manageUser",
            element: <ManageUser></ManageUser>,
          },
          {
            path: "/contact/allUser",
            element: <AllUserD></AllUserD>,
          },
        ],
      },

      {
        path: "/happy",
        element: <Happy />,
      },
      {
        path: "/plans",
        element: <Plans></Plans>,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/alluser",

        element: <AllUser></AllUser>,
      },
      {
        path: "/patnerProfile/:id",
        element: <PatnerProfile></PatnerProfile>,
      },
      {
        path: "/allcouple/:id",
        element: <SingleHappyStory />,
      },
     
      {
        path: "/post",
        element: <Post />,
      },
      {
        path:'/blogs/:id',
        element: <SingleBlogs/>
      },
      {
        path:'/myProfile',
        element: <MyProfile></MyProfile>
      },
      {
        path:'/authFrom',
        element: <AuthForm></AuthForm>
      },
      {
        path:'/signup',
        element: <SignUp />
      },
      {
        path:'/select',
        element: <SearchFunction></SearchFunction>
      },

    ],
  },

  {
    path: "/",
    children: [
      {
        path:'/userinfo1',
        element: <UserInfo1></UserInfo1>
      },
      {
        path:'/userinfo2',
        element: <Userinfo2/>
      },
      {
        path:'/userinfo3',
        element: <Userinfo3/>
      },
      {
        path:'/userinfo4',
        element: <Userinfo4/>
      },
      {
        path:'/userinfo5',
        element: <Userinfo5/>
      },
      {
        path:'/userinfo6',
        element: <Userinfo6/>
      },
      {
        path:'/userinfo6',
        element: <Userinfo7/>
      }
    ],
  },
]);

export default router;
