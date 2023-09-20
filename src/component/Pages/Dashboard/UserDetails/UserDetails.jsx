import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import '../Dashboard.css'
const UserDetails = () => {
  const { user } = useContext(AuthContext);
  const [datas, setDatas] = useState([]);
  const [serviceData, setServiceData] = useState({})
  const [loading, setLoading] = useState(true);
  const [profileDatas, setProfileDatas] = useState({});

  useEffect(() => {
    fetch(`https://soulmates-server.vercel.app/singleBookedService/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setServiceData(data)
      })
  }, [user])

  // console.log(serviceData);

  useEffect(() => {
    fetch(`https://soulmates-server.vercel.app/userStats/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, [user]);
  // console.log(datas);

  // console.log('data', profileDatas );

  useEffect(() => {
    fetch(`https://soulmates-server.vercel.app/profileData/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setProfileDatas(data)
      })
      .catch(error => console.log(error))
  }, [user])

  return (
    <div>
      {/* support info */}
      <div className="relative">
        <img className="object-cover w-full " src="https://i.ibb.co/ys5nwDm/3301579-491922-PHD87-D-829-1.jpg" alt="" />
        <img className="absolute rounded-full h-[120px] w-[120px] top-1/2 transform -translate-y-1/2 left-[59%]" src={profileDatas?.profileImage} alt="" />
        <div className="absolute top-6 left-10 text-blue-900">
          <p className="text-3xl">Welcome back</p>
          <h1 className="text-5xl font-medium ">{profileDatas?.name}!</h1>
          <p className="text-lg italic">{profileDatas?.email}</p>
          <div className="ms-96 ps-72">
            <button className="btn text-lg text-blue-600 px-4 font-medium">{profileDatas?.role}</button>
          </div>
        </div>
      </div>
      <div className="flex justify-around my-10">
        <div className=" ml-5">
          <div className="stats stats-vertical shadow ">
            <div className="stat flex items-center justify-between">
              <h1 className="stat-title  font-semibold text-lg">Package</h1>
              <p className="stat-desc font-semibold text-lg">
                {datas.package ? datas.package.order.plan : "Free"}
              </p>
            </div>
            <div className="stat flex items-center justify-between">
              <div className="">
                <div className="stat-title ">Blogs</div>
                <div className="stat-value text-2xl font-bold">
                  {datas.blog ? datas.blog : 2}
                </div>
              </div>
              <progress
                className="progress progress-accent w-56 "
                value={datas.blog ? datas.blog : 2}
                max={datas.blogs ? datas.blogs : 10}
              ></progress>
            </div>
            <div className="stat flex items-center justify-between">
              <div className="">
                <div className="stat-title ">Orders</div>
                <div className="stat-value text-2xl font-bold">
                  {datas.order ? datas.order : 5}
                </div>
              </div>
              <progress
                className="progress progress-accent w-56 "
                value={datas.order ? datas.order : 5}
                max={datas.subscription ? datas.subscription : 10}
              ></progress>
            </div>
            <div className="stat flex items-center justify-between">
              <div className="">
                <div className="stat-title ">BookedService</div>
                <div className="stat-value text-2xl font-bold">
                  {datas.bookedService ? datas.bookedService : 4}
                </div>
              </div>
              <progress
                className="progress progress-accent w-56 "
                value={datas.bookedService ? datas.bookedService : 4}
                max={datas.bookedServices ? datas.bookedServices : 10}
              ></progress>
            </div>
          </div>
        </div>
        {/* total number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full gap-5 ">
            <div className="stat flex items-center justify-between">
              <div className="stat-title  text-xl font-semibold">Total Blogs : </div>
              <div className="stat-value text-2xl font-semibold ">14</div>
            </div>
          </div>
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full gap-5">
            <div className="stat flex items-center justify-between">
              <div className="stat-title text-xl font-semibold">Total Orders</div>
              <div className="stat-value text-2xl font-semibold">{datas.subscription ? datas.subscription : 18}</div>
              {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>
          </div>
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full gap-5">
            <div className="stat flex items-center justify-between">
              <div className="stat-title text-xl font-semibold"> Total Booked Services : </div>
              <div className="stat-value text-2xl font-semibold">20</div>
              {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>
          </div>
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full gap-5 ">
            <div className="stat flex items-center justify-between">
              <div className="stat-title  text-xl font-semibold">Total CoupleData</div>
              <div className="stat-value text-2xl font-semibold">33</div>
              {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>
          </div>
          {/* end */}
        </div>
      </div>

      {/* chart */}
      <div></div>
    </div>
  );
};

export default UserDetails;
