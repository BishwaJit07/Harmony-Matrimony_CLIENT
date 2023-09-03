import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import {RxCross1} from "react-icons/rx";
import {motion} from 'framer-motion'

const MUTr = ({user, index, handleMakeApprove,handleMakeDenied}) => {
  return (
      <motion.tr
       className="bg-white   hover:bg-gray-50 "

      // remake
      transition={{delay: 0.1 * index}}
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 20}}
      
      >
        <th scope="row" className="flex items-center px-6 py-4 whitespace-nowrap ">
          <img className="w-10 h-10 rounded-full" src={user?.profileImage} alt="Jese image" />
          <div className="pl-3">
            <div className="text-base font-semibold">{user.name}</div>
            <div className="font-normal text-gray-500">{user.email}</div>
          </div>
        </th>
        <td className="px-6 py-4">
          <p>{user?.role}</p>
        </td>
        <td className="px-6 py-4">
          {/* <div className="">
          {
            user.role == 'reqAdmin' ? <button onClick={() =>handleMakeAdmin(user._id)} className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Make Admin</button> : <button className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Admin</button>
          }
          <button onClick={() =>handleMakeSupport(user._id)}  className="bg-red-100 text-rose-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">Make Supporter</button>
          </div> */}
         {
          user?.status == 'pending' ?  <div>
          <button onClick={()=>handleMakeApprove(user._id)} className='text-xl text-white bg-green-500 p-2 rounded-full ml-8 cursor-pointer'><AiOutlineCheck/></button>
          <button onClick={()=>handleMakeDenied(user._id)} className='text-xl text-white bg-red-500 p-2 rounded-full ml-8 cursor-pointer'><RxCross1/></button>
          </div> : <button onClick={() =>handleMakeDenied(user._id)} className='text-xl text-white bg-red-500 p-2 rounded-full ml-16 cursor-pointer'><RiDeleteBinLine/></button>
         }
        </td>
        {/* <td className=''>
         <button onClick={() =>handleDelete(user._id)} className='text-xl text-white bg-red-500 p-2 rounded-full ml-8 cursor-pointer'><RiDeleteBinLine/></button>
        </td> */}
      </motion.tr>
  );
};

export default MUTr;