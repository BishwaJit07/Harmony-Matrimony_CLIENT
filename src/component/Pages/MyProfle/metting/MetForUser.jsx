import FixedMet from "./FixedMet";
import renderMetInfo from "./renderMetInfo";
import useMyData from "../../../../Hooks/useMyData";
import { useCustomQuery } from "../../../../utilities/utilities";

const MetForUser = () => {
  const [userInfo] = useMyData();
  const { refetch: refetchPending, data: pendingInfo = [] } = useCustomQuery(
    ["req", userInfo._id],
    `http://localhost:5000/getReqPending/${userInfo._id}`
  );

  const showPending = pendingInfo.slice(0, 3);

  return (
    <div className="mb-5 border border-[#C3CAD5] rounded-2xl overflow-hidden">
      <div className="flex justify-between items-center px-5 py-3">
        <p className="font-alice text-[25px] ">Meeting</p>
        <FixedMet partnerUser={userInfo} />
      </div>
      <hr className="border border-[#C3CAD5]" />
      <div className="p-4">
        <div className="flex gap-3 flex-wrap">
          <div className="bg-[#F0F2F5] py-3 px-4 rounded-2xl text-[#536279] text-base">
            {userInfo
              ? renderMetInfo(showPending, "pending", refetchPending)
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetForUser;
 