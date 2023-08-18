import { useEffect, useState } from "react";
import { BsChatSquareHeartFill, BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import {  useParams } from 'react-router-dom';
const PatnerProfile = () => {
    const params = useParams();
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch(`https://harmony-matrimony-server.vercel.app/specificUser/${params.id}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])
    const { img, name, country, religion, physical_attributes, contact , gender  } = user

    console.log(user);
    return (
        <div className="h-screen ">
            <div className="flex gap-5 card card-side shadow-xl bg-[#f2fef9] w-[80%] mx-auto  my-20">
                <figure className=" hover:scale-105 duration-300 "><img src={img} alt="Movie" className=" h-full  lg:h-[300px]"/></figure>
                <div className="">

                    <div className="w-[100%] flex flex-col flex-grow  p-5">
                        <div >
                            <h2 className="text-2xl font-bold mb-5">{name}</h2>
                        </div>
                        <div className="flex flex-wrap gap-1 lg:gap-4">
                            <h2 className="text-white bg-[#99dabc] py-1 px-2 rounded text-base">{gender}</h2>
                            <h2 className="text-white bg-[#99dabc] py-1 px-2 rounded text-base">{country}</h2>
                            <h2 className="text-white bg-[#99dabc] py-1 px-2 rounded text-base">{religion}</h2>
                            <h2 className="text-white bg-[#99dabc] py-1 px-2 rounded text-base">{physical_attributes?.height}</h2>
                            <h2 className="text-white bg-[#99dabc] py-1 px-2 rounded text-base">{physical_attributes?.weight}</h2>
                        </div>
                       
                        <div className="flex flex-grow-0 absolute bottom-10 ">
                            <div className="flex gap-1">
                                <button className=" hover:bg-[#FF725E] hover:text-white hover:rounded-full hover:duration-300 py-2 px-2 text-base"><BsChatSquareHeartFill /></button>
                                <button  data-tip={contact?.email} className="tooltip hover:bg-[#FF725E] hover:text-white hover:rounded-full hover:duration-300 py-2 px-2 text-lg"><BsFillEnvelopeFill /></button>
                                <button data-tip={contact?.phone} className="tooltip hover:bg-[#FF725E] hover:text-white hover:rounded-full hover:duration-300 py-2 px-2 text-lg"><BsFillTelephoneFill /></button>

                            </div>
                           <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatnerProfile;