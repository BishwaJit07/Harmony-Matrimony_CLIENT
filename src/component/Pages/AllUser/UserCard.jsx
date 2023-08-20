

import { Link } from "react-router-dom";
const UserCard = ({ user }) => {
    const { img, name, country, religion, physical_attributes, gender, _id , about } = user

    return (
        <div>
           
                <div className=" bg-[#FF725E] bg-opacity-5  rounded-lg shadow-2xl text-gray-700 p-7 md:w-96 mx-auto text-center">
                    
                    <div className="mx-auto w-[99%]">
                    <img
                        className="round border border-teal-400 rounded-full p-2 text w-40 h-40 mx-auto object-fill"
                        src={img}
                        alt="user"
                    />
                    </div>
                    <h3 className="my-2 text-xl font-semibold text-[#ec5553] "><Link to={`/patnerProfile/${_id}`}>{name}</Link></h3>
                    <h6 className="mb-1 text-sm  uppercase font-medium">{country}</h6>
                    <p className="text-sm leading-relaxed">{about}
                    </p>
                    <div className="buttons mt-3 space-x-3">
                        <button className="primary-btn bg-[#62b08d] p-2 text-white rounded-md">Message</button>
                        <button className="primary-btn bg-[#62b08d] p-2 text-white rounded-md ghost-btn">Following</button>
                    </div>
                    <div className=" text-left p-3 mt-6">
                        <h6 className="mb-2 text-xs tracking-wide uppercase">Myself</h6>
                        <ul className="list-none m-0 p-0">
                            <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
                                {religion}
                            </li>
                            <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
                                {gender}
                            </li>
                            <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
                                {physical_attributes?.height}
                            </li>
                            <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
                                {physical_attributes?.weight}
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
       
    );
};

export default UserCard;