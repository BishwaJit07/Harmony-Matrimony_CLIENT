import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import message from "../../../../assets/other/message.svg";
import renderMetInfo from "./renderMetInfo";
import { useCustomQuery } from "../../../../utilities/utilities";

const FixedMet = ({ partnerUser }) => {
  const { _id, name } = partnerUser;
  const params = useParams();
  const [userId, setUserId] = useState("");
  const [showModal8, setShowModal8] = useState(false);
  const { register, handleSubmit } = useForm();
  const [userInfo, setUserInfo] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const [metForm, setMetForm] = useState(true);
  const [accept, setAccept] = useState(false);
  const [request, setRequest] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (params.id) {
      setUserId(params.id);
    } else {
      setUserId(_id);
    }
  }, [_id, params, setUserId]);

  console.log(userId);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/userPlanInfo?email=${user?.email}`)
      .then((response) => {
        setUserInfo(response.data);
      });
  }, [user, loading]);

  const { refetch: refetchAccept, data: acceptInfo = [] } = useCustomQuery(
    ["accept", userId],
    `http://localhost:5000/reqAccept/${userId}`
  );

  const { refetch: refetchPending, data: pendingInfo = [] } = useCustomQuery(
    ["req", userId],
    `http://localhost:5000/getReqPending/${userId}`
  );

  const { refetch: refetchReq, data: requestInfo = [] } = useCustomQuery(
    ["pending", userId],
    `http://localhost:5000/sendReqPending/${userId}`
  );

  useEffect(() => {
    refetchAccept();
    refetchReq();
    refetchPending();
  }, [userId]);

  const refetch = () => {
    refetchAccept();
    refetchReq();
    refetchPending();
  };

  const visibility = (form, accept, req, pend) => {
    setMetForm(form);
    setAccept(accept);
    setRequest(req);
    setPending(pend);
  };

  const showModal = () => {
    setShowModal8(true);

    if (params.id) {
      visibility(true, false, false, false);
    } else {
      visibility(false, true, false, false);
    }
  };

  const onSubmit = (data) => {
    const setMet = {
      userId: userInfo._id,
      partner: data.id,
      metDate: data.date,
      status: "pending",
    };

    axios
      .post(`http://localhost:5000/setMeeting?email=${user?.email}`, setMet)
      .then((response) => {
        if (response.data.insertedId) {
          setShowModal8(false);
          Swal.fire("Wait!", "Your Meeting is pending now", "success");
        }
      });

    console.log(setMet);
  };

  return (
    <div>
      <button
        onClick={showModal}
        className="bg-[#3E4A5B] text-[#F0F2F5] px-[15px] py-[10px] rounded-full flex gap-1 items-center"
      >
        <span>
          <img className="hidden lg:block" src={message} alt="" />
        </span>
        Meeting
      </button>
      {showModal8 ? (
        <>
          <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">
            <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card relative">
              <button
                onClick={() => setShowModal8(false)}
                className=" bg-[#FF725E] text-white py-2 px-4 rounded-md w-fit absolute top-2 right-2"
              >
                X
              </button>

              {params.id ? (
                <>
                  {metForm ? (
                    <>
                      <div className="md:card-body ">
                        <p className="text-lg font-medium text-center">
                          Set Metting With {name}
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <input
                            type="hidden"
                            value={_id}
                            className="w-full text-blue-950"
                            {...register("id", { required: true })}
                          />

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">
                                Select Your Date
                              </span>
                            </label>
                            <label className="input-group">
                              <span>Date</span>
                              <input
                                type="datetime-local"
                                className="input input-bordered"
                                {...register("date", { required: true })}
                              />
                            </label>
                          </div>
                          <div className="mt-5 text-center">
                            <button className="w-3/6 bg-[#FF725E] text-white py-2 px-4 rounded-md">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </>
                  ) : null}
                </>
              ) : null}

              {accept ? renderMetInfo(acceptInfo, "accept", refetch) : null}
              {request ? renderMetInfo(requestInfo, "request", refetch) : null}
              {pending ? renderMetInfo(pendingInfo, "pending", refetch) : null}

              {params.id ? null : (
                <>
                  <div className="divider">OR</div>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => visibility(false, true, false, false)}
                      className="bg-[#FF725E] text-white py-2 px-4 rounded-md"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => visibility(false, false, true, false)}
                      className="bg-[#FF725E] text-white py-2 px-4 rounded-md"
                    >
                      Request
                    </button>
                    <button
                      onClick={() => visibility(false, false, false, true)}
                      className="bg-[#FF725E] text-white py-2 px-4 rounded-md"
                    >
                      Pending
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default FixedMet;
