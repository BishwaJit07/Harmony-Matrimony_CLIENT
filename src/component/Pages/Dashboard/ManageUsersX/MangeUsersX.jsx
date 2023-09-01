import useAllUsers from "../../../../hooks/useAllUsers";
import MUTr from "./MUTr";
import "../../../../style.css"
import FooterDashboard from "../FooterDashboard";
const MangeUsersX = () => {
  const [users, loading] = useAllUsers()
  if(loading){
    return(
      <div className="flex justify-center h-screen items-center ">
        <span className="loading loading-bars loading-lg scale-150"></span>
      </div>
    )
  }
  return (
    <div className="container flex-grow-1 overflow-y-auto ">
    <div className="px-6 w-[90%] mx-auto py-6 my-10 table-container flex flex-col ">
      <table className="w-full text-sm text-left text-gray-500    ">

        {/* This is table HEAD */}
        
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>

        {/* This is table body, all users goes here */}
        
        <tbody className="">
          {users.map((user, index) => <MUTr key={user._id} user={user} index={index}/>)}
        </tbody>
      </table>
    </div>
    </div>

  );
};

export default MangeUsersX;