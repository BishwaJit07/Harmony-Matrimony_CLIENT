import { createBrowserRouter } from "react-router-dom";

import Home from "../component/Pages/Home/Home";
import Main from "../Layouts/Main";
import SignIn from "../component/Pages/SignIn/SignIn";

import Blog from "../component/Pages/Blog/Blog";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import AllUser from "../component/Pages/AllUser/AllUser";
import SignUpStep1 from "../component/Pages/SignUp/SignUpStep1";
import SignUpStep2 from "../component/Pages/SignUp/SignUpStep2";
import SignUp from "../component/Pages/SignUp/SignUp";
import About from "../component/Pages/AboutP/About";
import PatnerProfile from "../component/Pages/patnerProfile/patnerProfile";



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
        path:'/alluser',
        element: <AllUser></AllUser>
      },
      {
        path:'/patnerProfile/:id',
        element: <PatnerProfile></PatnerProfile>
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
