import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AuthContext } from "../../Provider/AuthProvider";

const PostShow = ({ status, setLoader }) => {
  const { user } = useContext(AuthContext);
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);

  const { _id, userId, post, postDate, postImg } = status;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDelete = (id) => {
    setLoader(true);
    axios.delete(`http://localhost:5000/statusPost/${id}`).then((response) => {
      if (response.data.deletedCount) {
        setLoader(false);
      }
    });
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-2">
      <div className="card-body relative">
        {/* Toggle button */}
        <button
          className="absolute top-2 right-2 bg-gray-200 px-2 py-1 rounded text-xs"
          onClick={() => setShowOptions(!showOptions)}
        >
          <BsThreeDots />
        </button>

        {/* Edit & Delete options */}
        {showOptions && (
          <div
            ref={optionsRef}
            className="grid absolute top-6 right-0 mt-2 mr-2 space-y-2"
          >
            <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
              Edit
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        )}

        <div className="flex gap-3">
          <img
            src={user?.photoURL}
            className="w-12 h-12 rounded-full"
            alt="User"
          />
          <div>
            <h2 className="card-title">{userId}</h2>
            <p>{postDate}</p>
          </div>
        </div>

        <p>{post}</p>
      </div>
      <figure>
        <img src={postImg} className="h-96 w-full" />
      </figure>
    </div>
  );
};

export default PostShow;
