import { createBrowserRouter } from "react-router-dom";

import Home from "../component/Pages/Home/Home";
import Main from "../Layouts/Main";
import SignIn from "../component/Pages/SignIn/SignIn";
import SignUp from "../component/Pages/SignUp/SignUp";
import Blog from "../component/Pages/Blog/Blog";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Dashboard from "../component/Pages/Dashboard/Dashboard";
import ManageUser from "../component/Pages/Dashboard/ManageUser";
import AllUser from "../component/Pages/Dashboard/AllUser";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signIn",
        element: <SignIn />
      },
      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path: '/contact',
        element : <Dashboard></Dashboard>,
        children : [
          {
            path :'/contact/manageUser',
            element : <ManageUser></ManageUser>
          },
          {
            path :'/contact/allUser',
            element : <AllUser></AllUser>
          },
        ]
      }

    ],
  },
  
]);

export default router;
