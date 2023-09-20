import { useEffect, useState } from "react";
import axios from "axios";
import follow from "../../../../assets/other/follow.svg";
import useMyData from "../../../../Hooks/useMyData";
import { performAction } from "../../../../utilities/utilities";

const RelationSts = ({ partnerUser }) => {
  const [userInfo] = useMyData();
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/disableRltn/${userInfo._id}/${partnerUser._id}`
      )
      .then((response) => {
        if (response.data.userId) {
          setDisable(true);
        }
      });
  }, [partnerUser, userInfo]);

  const handleRelation = () => {
    const reqRltn = {
      favId: partnerUser._id,
      favUser: partnerUser.name,
      favImg: partnerUser.profileImage,
      status: "pending",
    };

    performAction(
      userInfo._id,
      "showRelation",
      "takeRltnPsn",
      "setReqRelation",
      reqRltn,
      () => {
        setDisable(true);
      }
    );
  };

  const handleDelRelation = () => {
    const unfollow = {
      favId: partnerUser._id,
      favUser: partnerUser.name,
      favImg: partnerUser.profileImage,
    };
    axios
      .put(`http://localhost:5000/delRltn/${userInfo._id}`, unfollow)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          setDisable(false);
        }
      });
  };

  return (
    <div>
      {disable ? (
        <button
          onClick={handleDelRelation}
          className="bg-[#3E4A5B] text-[#F0F2F5] px-[15px] py-[10px] rounded-full flex gap-1 items-center"
        >
          <span>
            <img className="hidden lg:block" src={follow} alt="" />
          </span>
          Relationship Sent
        </button>
      ) : (
        <button
          onClick={handleRelation}
          className="bg-[#3E4A5B] text-[#F0F2F5] px-[15px] py-[10px] rounded-full flex gap-1 items-center"
        >
          <span>
            <img className="hidden lg:block" src={follow} alt="" />
          </span>
          Send Relationship
        </button>
      )}
    </div>
  );
};

export default RelationSts;
