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
import SignUpStep1 from "../component/Pages/SignUp/SignUpStep1";
import SignUpStep2 from "../component/Pages/SignUp/SignUpStep2";
import SignUp from "../component/Pages/SignUp/SignUp";
import About from "../component/Pages/AboutP/About";
import PatnerProfile from "../component/Pages/patnerProfile/PatnerProfile";
import SingleHappyStory from "../component/Pages/Home/HomeCompnent/HappyStory/SingleHappyStory";
import SingleBlogs from "../component/Pages/Blog/SingleBlogs";
import Contact from "../component/Pages/Contact/Contact";



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
        path:'/blog',
        element:<Blog></Blog>
      },
      {

        path: '/dashboard',
        element : <Dashboard></Dashboard>,
        children : [
          {
            path :'/dashboard/manageUser',
            element : <ManageUser></ManageUser>
          },
          {
            path :'/dashboard/allUser',
            element : <AllUserD></AllUserD>
          },
        ]
      },

      {
        path: "/happy",
        element: <Happy />
      },
      {
        path:'/plans',
        element:<Plans></Plans>
      },
      {
        path:'/contact-us',
        element: <Contact />
      },
      {
        path:'/alluser',

        element: <AllUser></AllUser>
      },
      {

        path:'/patnerProfile/:id',
        element: <PatnerProfile></PatnerProfile>
      },
      {
        path:'/allcouple/:id',
        element: <SingleHappyStory/>
      },
      {
        path:'/blogs/:id',
        element: <SingleBlogs/>



      }
    ],
  },

  {
    path: "/signup",
   
    children: [
      {
        path: "step-1",
        element: <SignUpStep1 />,
      },
      {
        path: "step-2",
        element: <SignUpStep2 />,
      },
      {
        path: "final_signup",
        element: <SignUp />,
      },
     ],
  },

]);

export default router;
