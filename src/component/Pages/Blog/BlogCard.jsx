import { Link } from "react-router-dom";

const BlogCard = ({data}) => {
  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl mb-10 ">
        <figure>
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-96 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
       
          <p className="text-xs lg:text-sm xl:text-base py-3 text text-[#728483] text-clip text ">{data.details < 200 ? <>{data.details }</> :
                        <>{data?.details.slice(0, 200)}... </>} </p>
          <button><Link to={`/blogs/${data._id}`} className="btn red-primary">Read more</Link></button>
          
        </div>
      </div>
    </>
  );
};

export default BlogCard;
