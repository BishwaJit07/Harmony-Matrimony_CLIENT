import useMyData from "../../../../Hooks/useMyData";
import { updateStatus, useCustomQuery } from "../../../../utilities/utilities";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListPanel from "./ListPanel";

const Proposal = () => {
  const [userInfo] = useMyData();

  const { refetch: refetchProposal, data: proposal = [] } = useCustomQuery(
    ["proposal", userInfo._id],
    `https://soulmates-server.vercel.app/getProposal/${userInfo._id}`
  );

  const { refetch: refetchAccept, data: accept = [] } = useCustomQuery(
    ["acceptt", userInfo._id],
    `https://soulmates-server.vercel.app/getAccept/${userInfo._id}`
  );

  const { refetch: refetchReject, data: reject = [] } = useCustomQuery(
    ["reject", userInfo._id],
    `https://soulmates-server.vercel.app/getReject/${userInfo._id}`
  );

  const refetchFunc = () => {
    refetchProposal();
    refetchReject();
    refetchAccept();
  };

  const deleteHandle = (id) => {
    updateStatus("deleteMet", id, "proposal reject", refetchFunc);
  };

  const acceptHandle = (id) => {
    updateStatus("acceptMet", id, "proposal accept", refetchFunc);
  };

  return (
    <div className="mb-5 border border-[#C3CAD5] rounded-2xl overflow-hidden">
      <div className="flex justify-between items-center px-5 py-3">
        <p className="font-alice text-[25px] ">Proposal</p>
      </div>
      <hr className="border border-[#C3CAD5]" />
      <div className="p-4">
        <div className="bg-[#F0F2F5] py-3 px-4 rounded-2xl text-[#536279] text-base place-items-center">
          <Tabs>
            <TabList>
              <Tab>Pendings</Tab>
              <Tab>Accept</Tab>
              <Tab>Reject</Tab>
            </TabList>

            <TabPanel>
              <ListPanel
                data={proposal}
                user={userInfo._id}
                datatype={"proposal"}
                onDelete={deleteHandle}
                onAccept={acceptHandle}
              />
            </TabPanel>

            <TabPanel>
              <ListPanel
                data={accept}
                user={userInfo._id}
                datatype={"accept"}
                onDelete={deleteHandle}
                onAccept={acceptHandle}
              />
            </TabPanel>

            <TabPanel>
              <ListPanel
                data={reject}
                user={userInfo._id}
                datatype={"reject"}
                onDelete={deleteHandle}
                onAccept={acceptHandle}
              />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
