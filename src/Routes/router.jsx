import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Pages/Home/Home";
import Main from "../Layouts/Main";
import SignIn from "../component/Pages/SignIn/SignIn";
import Blog from "../component/Pages/Blog/Blog";
import AddBlog from "../component/Pages/Blog/AddBlog";
import Plans from "../component/Pages/Plans/Plans";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Dashboard from "../component/Pages/Dashboard/Dashboard";
import AllUserD from "../component/Pages/Dashboard/AllUserD";
import Happy from "../Shared/Happy/Happy";
import AllUser from "../component/Pages/AllUser/AllUser";
import SignUp from "../component/Pages/SignUp/SignUp";
import About from "../component/Pages/AboutP/About";
import PatnerProfile from "../component/Pages/patnerProfile/PatnerProfile";
import SingleHappyStory from "../component/Pages/Home/HomeCompnent/HappyStory/SingleHappyStory";
import SingleBlogs from "../component/Pages/Blog/SingleBlogs";
import Service from "../component/Pages/Service/Service";
import ServiceCard from "../component/Pages/Service/ServiceCard";
import Contact from "../component/Pages/Contact/Contact";
import BlogDetails from "../component/Pages/Blog/BlogDetails";
import TermCondition from "../component/Pages/SignUp/TermCondition";
import MyProfile from "../component/Pages/MyProfle/MyProfile";
import SearchFunction from "../component/Pages/SignUp/SearchFunction";
import UserInfo1 from "../component/Pages/MyProfle/UserInfo1";
import Userinfo2 from "../component/Pages/MyProfle/Userinfo2";
import Userinfo3 from "../component/Pages/MyProfle/Userinfo3";
import Userinfo4 from "../component/Pages/MyProfle/Userinfo4";
import Userinfo5 from "../component/Pages/MyProfle/Userinfo5";
import Userinfo6 from "../component/Pages/MyProfle/Userinfo6";
import Userinfo7 from "../component/Pages/MyProfle/Userinfo7";
import BookService from "../component/Pages/Dashboard/BookService/BookService";
import PaymentCard from "../component/Pages/PaymentPage/PaymentCard";
import PaymentSuccess from "../component/Pages/PaymentPage/PaymentSuccess";
import PaymentFail from "../component/Pages/PaymentPage/PaymentFail";
import AddService from "../Shared/AddService/AddService";
import StripePayment from "../payments/StripePayment/StripePayment";
import MangeUsersX from "../component/Pages/Dashboard/ManageUsersX/MangeUsersX";
import AuthoritySignIn from "../component/Pages/AuthorityAccount/AuthoritySignIn";
import AuthoritySignUp from "../component/Pages/AuthorityAccount/AuthoritySignUp";
import Profile2 from "../component/Pages/MyProfle/Profile2/Profile2";

import AdminHome from "../component/Pages/Dashboard/AdminHome/AdminHome";

import ChatRoom from "../ChatApp/ChatRoom/ChatRoom";
import UserProfile from "../component/Pages/UserProfile/UserProfile";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {

        path: '/userProfile',
        element: <UserProfile />
      },
      {
        path: '/profile/:id',
        element: <Profile2 />

      },
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
        path: "/addBlog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,

        loader: ({ params }) => fetch(`https://harmony-matrimony-server.vercel.app/blogsDetails/${params.id}`)

      },
      {
        path: "/termCondition",
        element: <TermCondition></TermCondition>,
      },

      {
        path: "/service",
        element: <Service></Service>,
      },

      {

        path: "/chat",
        element:<ChatRoom/>,
      },
      {
        path: "hotel/:id",
        element: <ServiceCard></ServiceCard>,
        loader: ({ params }) =>
          fetch(`https://harmony-matrimony-server.vercel.app/service/${params.id}`),
      },
      {
        path: "/paymentOne",

        element: <PaymentCard></PaymentCard>,
      },

      {
        path: "/payment/success/:tranId",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/payment/fail/:tranId",

        element: <PaymentFail></PaymentFail>,
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
        path: "/payment",
        element: <StripePayment />,
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
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlogs />,
      },

      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },

      
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/select",
        element: <SearchFunction></SearchFunction>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "hotel/:id",
        element: <ServiceCard></ServiceCard>,
        loader: ({ params }) =>

          fetch(`https://soulmates-server-two.vercel.app/service/${params.id}`),

      },
    ],
  },

  {
    path: "/",
    children: [
      {
        path: "/userinfo1",
        element: <UserInfo1></UserInfo1>,
      },
      {
        path: "/userinfo2",
        element: <Userinfo2 />,
      },
      {
        path: "/userinfo3",
        element: <Userinfo3 />,
      },
      {
        path: "/userinfo4",
        element: <Userinfo4 />,
      },
      {
        path: "/userinfo5",
        element: <Userinfo5 />,
      },
      {
        path: "/userinfo6",
        element: <Userinfo6 />,
      },
      {
        path: "/userinfo7",
        element: <Userinfo7 />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "adminUser",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageUser",
        element: <MangeUsersX></MangeUsersX>,
      },
      {
        path: "allUser",
        element: <AllUserD></AllUserD>,
      },
      {
        path: "bookService",
        element: <BookService></BookService>,
      },
      {
        path: "addService",
        element: <AddService />,
      },
    ],
  },
  {
    path: "/",
    children: [
      {
        path: "authoritysignin",
        element: <AuthoritySignIn />,
      },
      {
        path: "authoritysignup",
        element: <AuthoritySignUp />,
      },
    ],
  },
]);
export default router;
