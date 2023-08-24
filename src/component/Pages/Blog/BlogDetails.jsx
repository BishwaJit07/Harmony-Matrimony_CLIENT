import { AiOutlineCalendar, AiFillHeart} from "react-icons/ai";
import { useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="flex items-center">
            <div className="m-10 w-1/2">
                <img className="h-[500px] w-full  object-cover" src={data.image} alt="" />
            </div>
            <div className="w-1/2 space-y-5">
                <h1 className="text-3xl font-medium font-serif">{data.title}</h1>
                <p className="text-slate-600">{data.details}</p>
                <div className="flex text-xl ">
                    <p className="font-light me-2" ><AiOutlineCalendar className="inline-block mb-1" />{data.date}  </p>
                    <p>|   <AiFillHeart className="inline-block text-red-600" /> {data.react}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;