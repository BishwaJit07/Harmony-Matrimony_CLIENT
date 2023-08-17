import { createBrowserRouter } from "react-router-dom";

import Home from "../component/Pages/Home/Home";
import Main from "../Layouts/Main";
import SignIn from "../component/Pages/SignIn/SignIn";
import SignUp from "../component/Pages/SignUp/SignUp";
import Blog from "../component/Pages/Blog/Blog";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Happy from "../Shared/Happy/Happy";


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
        path: "/happy",
        element: <Happy />
      }

    ],
  },
]);

export default router;
