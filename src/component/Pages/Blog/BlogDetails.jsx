import { AiOutlineCalendar, AiFillHeart } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";

const BlogDetails = () => {
    const data = useLoaderData();

    return (

        <div>
            <div className="lg:flex items-center px-2 lg:px-0 me-8 lg:me-0">
                <div className="lg:m-10 m-12  lg:w-1/2 w-full">
                    <img className="lg:h-[500px] md:h-[400px] h-48 w-48 md:w-[700px] lg:w-full  object-cover" src={data.image} alt="" />
                </div>
                <div className="lg:w-1/2 w-full  m-10 lg:m-0 space-y-5">
                    <Fade><h1 className="text-3xl font-medium font-serif">{data.title}</h1></Fade>
                    <p className="text-slate-600">{data.details}</p>
                    <div className="lg:flex text-xl ">
                        <p className="font-light me-2" ><AiOutlineCalendar className="inline-block mb-1" />{data.date}  </p>
                        <p>|   <AiFillHeart className="inline-block text-red-600" /> {data.react}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetails;