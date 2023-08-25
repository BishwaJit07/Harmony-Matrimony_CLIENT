import  { useState } from 'react';

const AuthForm = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-700 via-purple-800 to-indigo-900">
        <div className="main w-72 h-96 bg-red-500 overflow-hidden rounded-lg shadow-lg relative">
          <input
            type="checkbox"
            id="chk"
            aria-hidden="true"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
  
          <div className="signup w-full h-full">
            <form className="flex flex-col items-center justify-center h-full">
              <label
                htmlFor="chk"
                aria-hidden="true"
                className="text-white text-4xl font-bold cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-110"
              >
                Sign up
              </label>
              <input
                type="text"
                name="txt"
                placeholder="User name"
                required
                className="w-3/5 h-12 bg-gray-300 justify-center flex my-5 p-2 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-3/5 h-12 bg-gray-300 justify-center flex my-5 p-2 rounded-md"
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
                className="w-3/5 h-12 bg-gray-300 justify-center flex my-5 p-2 rounded-md"
              />
              <button className="w-3/5 h-12 bg-purple-700 text-white font-bold text-lg rounded-md transition duration-200 ease-in-out hover:bg-purple-800">
                Sign up
              </button>
            </form>
          </div>
  
          <div className={`login h-96 bg-gray-300 rounded-full transform transition-transform duration-800 ease-in-out ${isChecked ? '-translate-y-96' : 'translate-y-0'}`}>
            <form className="flex flex-col items-center justify-center h-full">
              <label
                htmlFor="chk"
                aria-hidden="true"
                className="text-purple-700 text-4xl font-bold transform scale-60"
              >
                Login
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-3/5 h-12 bg-gray-100 justify-center flex my-5 p-2 rounded-md"
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
                className="w-3/5 h-12 bg-gray-100 justify-center flex my-5 p-2 rounded-md"
              />
              <button className="w-3/5 h-12 bg-purple-700 text-white font-bold text-lg rounded-md transition duration-200 ease-in-out hover:bg-purple-800">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default AuthForm;