import { Helmet } from "react-helmet";

const Plans = () => {
  return (
    <div className="font-plans">

      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Services</title>
      </Helmet>
      
      {/* hero Content */}
      <div className="bg-gradient-to-r from-[#8A216B]  to-[#D74354] pb-10 text-center text-white pt-20 w-full lg:h-[calc(100vh-150px)]">
        <p className="font-semibold font-plans ">PRICING</p>
        <h1 className="text-5xl font-bold pt-5 font-plans leading-snug">
          Get Started <br /> Pick your Plan Now
        </h1>
        <p className=" mt-4 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="mt-4 bg-[#DB214C] w-56 mx-auto rounded-xl ">
          No credit card required
        </p>
      </div>

      {/* 

card section */}

      <div className="bg-white w-full lg:h-[calc(100vh-100px)] xl:h-[calc(100vh-200px)]">
        <div className="lg:grid grid-cols-3 gap-10 xl:gap-20 mx-auto  lg:mx-28 ">
          {/* card-1 */}
          <div className="lg:-mt-16  mb-10 lg:mb-0  w-80 lg:w-full mx-auto mt-10 ">
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
              <button className="bg-blue-500 w-full my-5  text-white font-semibold  mx-auto px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                Get Started
              </button>
            </div>
          </div>

          {/* 2nd card */}

          <div className="lg:-mt-32 mb-10 w-80 lg:w-full mx-auto lg:mb-0">
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
              <button className="bg-blue-500 w-full mx-auto font-semibold my-5  text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                Get Started
              </button>
            </div>
          </div>
          {/* 3rd card */}
          <div className="lg:-mt-16 mb-10 w-80 lg:w-full mx-auto lg:mb-0">
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
              <button className="bg-blue-500 w-full mx-auto font-semibold text-white px-4 py-2 my-5 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                Get Started
              </button>
            </div>
          </div>
        </div>


      </div>

      {/* support-section */}
        <div className=" relative top-7 text-center mx-auto max-w-2xl ">
          <p className="bg-[#FF166C] py-5 px-4 text-xl text-white rounded-md"><span>Free support:<a href="tel:+4733378901"> + 47 333 78 901</a></span> | <span>Email: <a href="mailto:m.bluth@example.com">info@example.com</a></span></p>
        </div>
    </div>
  );
};

export default Plans;
