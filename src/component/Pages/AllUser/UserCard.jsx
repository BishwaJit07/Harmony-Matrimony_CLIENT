import { Link } from "react-router-dom";
import Loading from "../../../Shared/Loading";
import axios from "axios";
import Swal from "sweetalert2";
import useMyData from "../../../Hooks/useMyData";

const UserCard = ({ filteredUser, length }) => {
  const [userInfo, refetch] = useMyData();

  const {
    profileImage,
    name,
    country,
    religion,
    physical_attributes,
    gender,
    _id,
    about,
  } = filteredUser;

  const handleClick = () => {
    axios
      .put(
        `https://harmony-matrimony-server.vercel.app/profileVisit?user=${userInfo?.email}`
      )
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          if (refetch()) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `You Have ${userInfo.profileVisit - 1} only`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      });
    // Perform any additional actions here
  };

  return (
    <div>
      <div className=" bg-[#FF725E] bg-opacity-5  rounded-lg shadow-2xl text-gray-700 p-7  mx-auto text-center">
        <div className="mx-auto w-[99%]">
          <img
            className="round border border-teal-400 rounded-full p-2 text w-40 h-40 mx-auto object-fill"
            src={profileImage}
            alt="user"
          />
        </div>
        <h3 className="my-2 text-xl font-semibold text-[#ec5553] ">
          <Link to={`/patnerProfile/${_id}`} onClick={handleClick}>
            {name}
          </Link>
        </h3>
        <h6 className="mb-1 text-sm  uppercase font-medium">{country}</h6>
        <p className="text-sm leading-relaxed w-[80%] mx-auto">
          {about < 50 ? <>{about}</> : <>{about?.slice(0, 50)}... </>}
        </p>
        {/* <p className="text-xs lg:text-sm xl:text-base py-3 text text-[#728483] text-clip text ">{data.details < 200 ? <>{data.details }</> :
                        <>{data?.details.slice(0, 200)}... </>} </p> */}
        <div className="buttons mt-3 space-x-3">
          <button className="primary-btn bg-[#62b08d] p-2 text-white rounded-md">
            Message
          </button>
          <button className="primary-btn bg-[#62b08d] p-2 text-white rounded-md ghost-btn">
            Following
          </button>
        </div>
        <div className=" text-left p-3 mt-6">
          <h6 className="mb-2 text-xs tracking-wide uppercase">Myself</h6>
          <ul className="list-none m-0 p-0">
            <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
              {religion}
            </li>
            <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
              {gender}
            </li>
            <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
              {physical_attributes?.height}
            </li>
            <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
              {physical_attributes?.weight}
            </li>
          </ul>
        </div>
        {length === 0 ? <Loading></Loading> : <></>}
      </div>
    </div>
  );
};

export default UserCard;
