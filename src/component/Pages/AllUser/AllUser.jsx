import { useContext, useEffect, useState } from "react";
import UserCard from "./UserCard";
import Loading from "../../../Shared/Loading";
import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { BsSearchHeartFill } from "react-icons/bs";
import { Helmet } from "react-helmet";
import noUser from "../../../assets/other/3024049.png";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const AllUser = () => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const searchData = location.state;
  const [users, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [proVisit, setProVisit] = useState(false);

  const [filteredUsers, setFilteredUsers] = useState(users);
  // fetch happyStories data
  useEffect(() => {
    fetch("https://harmony-matrimony-server.vercel.app/allUser")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUserData(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://harmony-matrimony-server.vercel.app/userPlan?email=${user?.email}`
      )
      .then((response) => {
        if (response.data.profileVisit > 0) {
          console.log(response.data.profileVisit);
          setLoading(false);
          setProVisit(true);
        }
      });
  }, [user, setProVisit]);

  useEffect(() => {
    if (searchData) {
      // If searchData is available from location state, filter the users accordingly
      const filtered = users.filter((user) => {
        // Apply filters based on searchData
        return (
          user.gender === searchData.gender &&
          // user.age >= searchData.minAge &&
          // user.age <= searchData.maxAge &&
          user.religion === searchData.religion &&
          user.country === searchData.country
          // user.language === searchData.language
        );
      });
      setFilteredUsers(filtered);

      // Update filteredUsers, not users
    } else {
      // If searchData is not available, show all users
      setFilteredUsers(users);
    }
  }, [searchData, users]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl animate-pulse">
        <Loading></Loading>
      </div>
    );
  }

  const onSubmit = (data) => {
    const { gender, age, religion, country, language } = data;

    const filteredData = users.filter((user) => {
      return (
        (gender === "" || user.gender === gender) &&
        // (age === "" || user.age === age) &&
        (religion === "" || user.religion === religion) &&
        (country === "" || user.country === country)
        // (language === "" || user.language === language)
      );
    });

    setFilteredUsers(filteredData);
  };

  return (
    <div className=" w-[80%] mx-auto">
      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | All User</title>
      </Helmet>

      <div className="mt-10 mb-32">
        <div className=" p-5 rounded-xl my-10  border-2 border-[#FF725E]  border-opacity-50  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 2xl:grid-cols-5 lg:gap-16 md:gap-10 gap-6 w-[100%] mx-auto ">
              <div className="flex flex-col">
                <h4 className="text-base font-medium mb-2 text-left mx-auto text-gray-500">
                  I am looking for a{" "}
                </h4>
                <select
                  {...register("gender", { required: true })}
                  className="text-lg border-2 border-gray-400 border-opacity-50 px-2 rounded-md w-44 md:w-52 mx-auto text-center"
                >
                  <option value="Female">Woman</option>
                  <option value="Male">Man</option>
                </select>
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-medium mb-2 text-left mx-auto text-gray-500">
                  age
                </h4>
                <select
                  {...register("age", { required: true })}
                  className="text-lg border-2 border-gray-400  border-opacity-50 px-2 rounded-md w-44 md:w-52 mx-auto text-center"
                >
                  <option value="20 to 23">20 to 23</option>
                  <option value="24 to 27">24 to 27</option>
                  <option value="28 to 31">28 to 31</option>
                  <option value="32 to 35">32 to 35</option>
                  <option value="36 to 40">36 to 40</option>
                </select>
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-medium mb-2 text-left mx-auto text-gray-500">
                  religion
                </h4>
                <select
                  {...register("religion", { required: true })}
                  className="text-lg border-2 border-gray-400  px-2 border-opacity-50 rounded-md w-44 md:w-52 mx-auto text-center"
                >
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Christian">Christian</option>
                  <option value="Buddhist">Buddhist</option>
                  <option value="Jewish">Jewish</option>
                  <option value="No Religion">No Religion</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-medium mb-2 text-left mx-auto text-gray-500">
                  living in
                </h4>
                <select
                  {...register("country", { required: true })}
                  className="text-lg border-2 border-gray-400  px-2 border-opacity-50 rounded-md w-44 md:w-52 mx-auto text-center"
                >
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="MUSAan">USA</option>
                  <option value="United Kingdom">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                </select>
              </div>

              <button
                className="hidden h-10 my-auto w-36 mx-auto  2xl:flex  gap-2 justify-center items-center bg-[#62b08d] text-white rounded"
                type="submit"
              >
                <h2 className="text-lg ">Search </h2>
                <p className="text-2xl ">
                  <BsSearchHeartFill></BsSearchHeartFill>
                </p>
              </button>
            </div>

            <button
              className="btn 2xl:hidden flex mt-10 h-10 my-auto w-36 mx-auto  gap-2 justify-center items-center bg-[#62b08d] text-white rounded"
              type="submit"
            >
              <h2 className="text-lg ">Search </h2>
              <p className="text-2xl ">
                <BsSearchHeartFill></BsSearchHeartFill>
              </p>
            </button>
          </form>
        </div>
      </div>
      {proVisit ? (
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 mx-auto my-10 gap-10 mb-24">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((filteredUser) => (
              <UserCard key={filteredUser._id} filteredUser={filteredUser} />
            ))
          ) : (
            <div className="w-full flex justify-center items-center">
              <img
                className="w-[400px] mx-auto my-20"
                src={noUser}
                alt="No users found"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="w-full text-center mb-10">
          <img
            className="w-[400px] mx-auto mb-8"
            src={noUser}
            alt="No users found"
          />
          <h1 className="text-2xl font-bold text-red-600">
            Your selected usage plan is over
          </h1>
          <p className="mt-3 text-xl font-bold ">
            <span>Please select your plan</span>
            <span className="ms-2 underline text-blue-900 hover:text-red-500">
              <Link to="/plans">Click Here</Link>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default AllUser;
