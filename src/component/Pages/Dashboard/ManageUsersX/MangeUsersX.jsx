import useAllUsers from "../../../../hooks/useAllUsers";
import MUTr from "./MUTr";

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
    <div className="relative overflow-x-auto  rounded-2xl px-6 w-[90%] mx-auto py-6 my-10  ">
      {/* Input field */}
      {/* <div className="flex items-center justify-between py-4 bg-white w-full">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search htmlFor users" />
        </div>
      </div> */}

      <table className="w-full text-sm text-left text-gray-500 overflow-hidden">

        {/* This is table HEAD */}
        
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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

  );
};

export default MangeUsersX;