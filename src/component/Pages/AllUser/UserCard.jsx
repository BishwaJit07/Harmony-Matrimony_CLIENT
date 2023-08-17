import { BsChatSquareHeartFill, BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";

import { Link } from "react-router-dom";
const UserCard = ({ user }) => {
    const { img, name, country, religion, physical_attributes, contact , gender , _id } = user

    return (
        <div>
            <div className="flex gap-5 card card-side shadow-xl bg-[#f2fef9]">
                <figure className=" hover:scale-105 duration-300 "><img src={img} alt="Movie" className=" h-full  lg:h-[300px]"/></figure>
                <div className="">


                    <div className="w-[100%] flex flex-col  p-5">
    <div >
                            <h2 className="text-2xl font-bold mb-5">{name}</h2>
                        </div>
                        <div className="flex flex-wrap gap-1 lg:gap-4">
                            <h2 className="text-white bg-[#99dabc] py-1 px-2 rounded text-xs">{gender}</h2>
                            <h2 className="text-white bg-[#99dabc] py-1 px-2 rounded text-xs">{country}</h2>
                            <h2 className="text-white bg-[#99dabc] py-1 px-2 rounded text-xs">{religion}</h2>
                            <h2 className="text-white bg-[#99dabc] py-1 px-2 rounded text-xs">{physical_attributes?.height}</h2>
                            <h2 className="text-white bg-[#99dabc] py-1 px-2 rounded text-xs">{physical_attributes?.weight}</h2>
                        </div>

                        <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-400 mt-10  " />
                        <div className="flex flex-grow-0 ">
                            <div className="flex gap-1">
                                <button className=" hover:bg-[#FF725E] hover:text-white hover:rounded-full hover:duration-300 py-2 px-2 text-base"><BsChatSquareHeartFill /></button>
                                <button data-tip={contact?.email} className="tooltip hover:bg-[#FF725E] hover:text-white hover:rounded-full hover:duration-300 py-2 px-2 text-lg"><BsFillEnvelopeFill /></button>
                                <button data-tip={contact?.phone} className="tooltip hover:bg-[#FF725E] hover:text-white hover:rounded-full hover:duration-300 py-2 px-2 text-lg"><BsFillTelephoneFill /></button>

                            </div>
                            <button className="text-white bg-[#FF725E] py-1 px-2 rounded text-xs  ml-auto"><Link to={`/patnerProfile/${_id}`}>More Details</Link></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;