import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Pages/Home/Home";
import Main from "../Layouts/Main";
import SignIn from "../component/Pages/SignIn/SignIn";
import Blog from "../component/Pages/Blog/Blog";
import AddBlog from "../component/Pages/Blog/addBlog";
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

import Service from "../component/Pages/Service/Service";
import ServiceCard from "../component/Pages/Service/ServiceCard";
import Contact from "../component/Pages/Contact/Contact";

import BlogDetails from "../component/Pages/Blog/BlogDetails";
import TermCondition from '../component/Pages/SignUp/TermCondition'

import MyProfile from "../component/Pages/MyProfle/MyProfile";
import AuthForm from "../component/Pages/AuthFrom/AuthForm";
import UserInfo1 from "../component/Pages/MyProfle/UserInfo1";
import SearchFunction from "../component/Pages/SignUp/SearchFunction";
import Userinfo2 from "../component/Pages/MyProfle/Userinfo2";
import Userinfo3 from "../component/Pages/MyProfle/Userinfo3";
import Userinfo4 from "../component/Pages/MyProfle/Userinfo4";
import Userinfo5 from "../component/Pages/MyProfle/Userinfo5";


import BookService from "../component/Pages/Dashboard/BookService/BookService";
import PaymentCard from "../component/Pages/PaymentPage/PaymentCard";
import PaymentCardTwo from "../component/Pages/PaymentPage/PaymentCardTwo";
import PaymentSuccess from "../component/Pages/PaymentPage/PaymentSuccess";
import PaymentFail from "../component/Pages/PaymentPage/PaymentFail";


import AddService from "../Shared/AddService/AddService";

import StripePayment from "../payments/StripePayment/StripePayment";

import Post from "../component/Pages/MyProfle/postFunction/Post";


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

        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/addBlog',
        element : <AddBlog></AddBlog>
      },
      {
        path: '/blogDetails/:id',
        element : <BlogDetails></BlogDetails>,
        loader: ({params}) => fetch(`https://soulmates-server-two.vercel.app/blogsDetails/${params.id}`)
      },
      {
        path :'/termCondition',
        element : <TermCondition></TermCondition>
      },
      {

        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/manageUser',
            element: <ManageUser></ManageUser>
          },
          {
            path: '/dashboard/allUser',
            element: <AllUserD></AllUserD>
           },
    ]},
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "hotel/:id",
        element: <ServiceCard></ServiceCard>,
        loader: ({ params }) =>
          fetch(
            `https://soulmates-server-two.vercel.app/service/${params.id}`
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
          {
            path: "/contact/addService",
            element: <AddService />
          }

        ],
      },

      {
        path: "/happy",
        element: <Happy />,
      },
      {

        path: '/plans',
        element: <Plans></Plans>

      },

      {

        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: '/payment',
        element: <StripePayment />
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
      }
    ],
  },

]}

])
;

export default router;
