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

import Service from "../component/Pages/Service/Service";
import ServiceCard from "../component/Pages/Service/ServiceCard";
import Contact from "../component/Pages/Contact/Contact";
import Post from "../component/postFunction/Post";
import MyProfile from "../component/Pages/MyProfle/MyProfile";
import BookService from "../component/Pages/Dashboard/BookService/BookService";
import PaymentCard from "../component/Pages/PaymentPage/PaymentCard";
import PaymentCardTwo from "../component/Pages/PaymentPage/PaymentCardTwo";
import PaymentSuccess from "../component/Pages/PaymentPage/PaymentSuccess";
import PaymentFail from "../component/Pages/PaymentPage/PaymentFail";

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
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "hotel/:id",
        element: <ServiceCard></ServiceCard>,
        loader: ({ params }) =>
          fetch(
            `https://harmony-matrimony-server.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/paymentOne",
        element:<PaymentCard></PaymentCard>
      },
      {
        path: "/paymentTwo",
        element:<PaymentCardTwo></PaymentCardTwo>
      },
      {
        path: "/payment/success/:tranId",
        element:<PaymentSuccess></PaymentSuccess>
      },
      {
        path: "/payment/fail/:tranId",
        element:<PaymentFail></PaymentFail>
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
          {
            path: "/contact/bookService",
            element: <BookService></BookService>,
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
        path: "/blogs/:id",
        element: <SingleBlogs />,
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
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
