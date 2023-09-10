import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import {RxCross1} from "react-icons/rx";
import {motion} from 'framer-motion'
import GLightbox from 'glightbox';

const VerifyTr = ({index, user, handleVerify,  handleVerifyCancle}) => {
    return (
        <motion.tr
       className="bg-white   hover:bg-gray-50 "

      // remake
      transition={{delay: 0.1 * index}}
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 20}}
      
      >
        <td className="text-black">{index + 1}</td>
        <td scope="row" className="flex items-center px-6 py-4 whitespace-nowrap ">
          <a href={user?.verificationImage} className="glightbox">
          <img className="w-10 h-10 rounded-full " src={user?.verificationImage
          } alt="Jese image" />
          </a>
        </td>
        <td> <div className="text-black ">{user?.name}</div></td>
        <td className="px-6 py-4">
         <div className="">
          <button onClick={()=>handleVerify(user.email)} className='text-xl text-white bg-green-500 p-2 rounded-full ml-8 cursor-pointer'><AiOutlineCheck/></button>
          <button onClick={()=>handleVerifyCancle(user.email)} className='text-xl text-white bg-red-500 p-2 rounded-full ml-8 cursor-pointer'><RxCross1/></button>
          </div> 
       
        </td>
      </motion.tr>
    );
};

export default VerifyTr;