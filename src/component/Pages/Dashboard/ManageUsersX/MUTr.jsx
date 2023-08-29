import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import {motion} from 'framer-motion'

const MUTr = ({user}) => {
  console.log(user)
  return (
      <motion.tr
       className="bg-white   hover:bg-gray-50 "
       initial={{opacity: 0, scale: 0, }}
       whileInView={{opacity: 1, scale: 1,}}
       whileHover={{scaleX: 1.005,}}
      //  transition={{duration: .3}}
      >
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
          <img className="w-10 h-10 rounded-full" src={user.img} alt="Jese image" />
          <div className="pl-3">
            <div className="text-base font-semibold">{user.name}</div>
            <div className="font-normal text-gray-500">{user.email}</div>
          </div>
        </th>
        <td className="px-6 py-4">
          {user.status ? user.status : <p>Position not found</p>}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="">
          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Make Admin</span>
          <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Remove Admin</span>
          </div>
        </td>
        <td className=''>
          <RiDeleteBinLine className='text-xl ml-8 cursor-pointer'/>
        </td>
      </motion.tr>
  );
};

export default MUTr;