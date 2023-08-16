import { createBrowserRouter } from "react-router-dom";

import Home from "../component/Pages/Home/Home";
import Main from "../Layouts/Main";
import SignIn from "../component/Pages/SignIn/SignIn";
import SignUp from "../component/Pages/SignUp/SignUp";
import About from "../component/Pages/About/About";
import Blog from "../component/Pages/Blog/Blog";
import ErrorPage from "../component/ErrorPage/ErrorPage";


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
        path: "/about",
        element: <About />
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }

    ],
  },
]);

export default router;
