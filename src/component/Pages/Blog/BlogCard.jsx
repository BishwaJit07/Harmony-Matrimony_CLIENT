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
          <p>{data.details}<Link to={`/blogs/${data._id}`} className="text-blue-500">Read more...</Link></p>
          
        </div>
      </div>
    </>
  );
};

export default BlogCard;
