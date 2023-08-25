import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div className="font-plans">

      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Services</title>
      </Helmet>
        <div className="h-[200px] md:h-[400px] bg-gradient-to-t from-[#FF725E] to-[#ec1d02] ">
          <div className="text-center space-y-5 pt-10">
            <p className="text-3xl md:text-7xl font-extrabold bg-clip-text text-transparent text-white">PRICING</p>
            <p className="text-white text-lg">Get Started <br /> Pick your Plan Now</p>
          </div>
        </div>

     
      {/* 

card section */}


      <div className="bg-white w-[80%] mx-auto lg:h-[calc(100vh-100px)] xl:h-[calc(100vh-500px)]">
        <div className="lg:grid grid-cols-3 gap-10  mx-auto justify-items-center   max-w-screen-lg ">

          {/* card-1 */}
          <div className="lg:-mt-16  mb-10 lg:mb-0  mx-auto mt-10 max-w-sm">
            <div className="bg-white shadow-md rounded-xl p-6">
              <div className="mb-4 text-center">
                <h2 className="text-5xl font-semibold mb-4 text-[#66451C]">
                  Free
                </h2>
                <p className=" mb-4 text-[#66451C]">
                  Printer took a type and scrambled
                </p>

                <p className="text-gray-600 text-3xl font-bold ">$0/mo</p>
              </div>
              <ul className="mb-4">
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  5 Premium Profiles view /mo
                </li>
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.293 7.293a1 1 0 0 1 1.414 0L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Free user profile can view
                </li>
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  View contact details
                </li>
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Send interest
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Start Chat
                </li>
              </ul>
              <button className="bg-[#34af78] w-full my-5  text-white font-semibold  mx-auto px-4 py-2 rounded-full  hover:bg-[#30855e]transition duration-300 ease-in-out">
                Get Started
              </button>
            </div>
          </div>

          {/* 2nd card */}

          <div className="lg:-mt-32 mb-10 max-w-sm mx-auto lg:mb-0">
            <div className="bg-white shadow-md rounded-xl p-6 w-full">
              <div className=" mb-4 text-center">
                <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  Most Popular Plan
                </span>
                <h2 className="text-5xl font-semibold text-[#66451C] mb-4 mt-9">Gold Plan</h2>
                <p className="text-[#66451C]-700 mb-4">
                  Printer took a type and scrambled
                </p>
                <span className="text-gray-600 text-3xl font-semibold">
                  $349/mo
                </span>
              </div>
              <ul className="mb-4">
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.293 7.293a1 1 0 0 1 1.414 0L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  20 Premium Profiles view /mo
                </li>
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.293 7.293a1 1 0 0 1 1.414 0L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Free user profile can view
                </li>
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.293 7.293a1 1 0 0 1 1.414 0L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View contact details
                </li>
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.293 7.293a1 1 0 0 1 1.414 0L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Send interest
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.293 7.293a1 1 0 0 1 1.414 0L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Start Chat
                </li>
              </ul>
  <Link to='/paymentOne'>
              <button className="bg-[#34af78] w-full mx-auto font-semibold my-5  text-white px-4 py-2 rounded-full  hover:bg-[#30855e]transition duration-300 ease-in-out">


            
             
                Get Started
              </button>
              </Link>
            </div>

             
          </div>
          {/* 3rd card */}
          <div className="lg:-mt-16 mb-10 max-w-sm mx-auto lg:mb-0">
            <div className="bg-white shadow-md rounded-xl p-6 w-full">
              <div className="mb-4 text-center">
                <h2 className="font-semibold mb-4 text-5xl text-[#66451C] ">Platinum</h2>
                <p className="text-[#66451C]-700 mb-4">
                  Printer took a type and scrambled
                </p>
                <span className="text-gray-600 text-3xl font-semibold">
                  $549/mo
                </span>
              </div>
              <ul className="mb-4">
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.293 7.293a1 1 0 0 1 1.414 0L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  0 Premium Profiles view /mo
                </li>
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.293 7.293a1 1 0 0 1 1.414 0L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Free user profile can view
                </li>
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.293 7.293a1 1 0 0 1 1.414 0L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View contact details
                </li>
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.293 7.293a1 1 0 0 1 1.414 0L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Send interest
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.293 7.293a1 1 0 0 1 1.414 0L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Start Chat
                </li>
              </ul>

            

              <Link to='/paymentTwo'>
               <button className="bg-[#34af78] w-full mx-auto font-semibold text-white px-4 py-2 my-5 rounded-full hover:bg-[#30855e] transition duration-300 ease-in-out">

                Get Started
              </button>
              </Link>
            </div>
          </div>
        </div>


      </div>

      
    </div>
  );
};

export default Plans;
