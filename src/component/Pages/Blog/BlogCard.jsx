import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineCalendar , AiOutlineArrowRight} from 'react-icons/ai'



const BlogCard = ({ data, react, setReact }) => {

  const handleReact = id => {
    console.log(id);
    fetch(`https://harmony-matrimony-server.vercel.app/blogs/${id}`, {
      method: "PATCH",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setReact(!react)
        }
      })
  }

  return (
    <>
      <div className="card card-compact w-full bg-base-200 shadow-xl mb-10 relative ">
        <figure>
          <img
            src={data?.image}
            alt={data?.title}
            className="w-full h-80 object-cover "
          />
        </figure>
        <div className="bg-black text-white bg-opacity-25 opacity-0 hover:opacity-100 rounded-2xl absolute inset-4 inset-y-30 mb-72">
          <div className=" flex justify-center mt-36">
           <Link to={`/blogDetails/${data._id}`}><button className="">View Details </button></Link>
            <AiOutlineArrowRight className="mt-1"/>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title font-serif">{data?.title}</h2>

          <div className="flex justify-between">
            <div className="flex text-xl text-red-600">
              <button onClick={() => handleReact(data?._id)} className="text-2xl"><AiOutlineHeart /></button>
              <p className="font-medium">{data?.react}</p>
            </div>
            <div className="flex">
              <button className="text-lg mb-2"><AiOutlineCalendar /></button>
              <p className="font-medium">{data?.date}</p>
            </div>
          </div>

          <p className="text-xs lg:text-sm xl:text-base py-3 text text-[#728483] text-clip text ">{data?.details < 200 ? <>{data.details}</> :
            <>{data?.details.slice(0, 150)}... </>} <button><Link to={`/blogDetails/${data._id}`} className="text-red-600">Read more</Link></button> </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
