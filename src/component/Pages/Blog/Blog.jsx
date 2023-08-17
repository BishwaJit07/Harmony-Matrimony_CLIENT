import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import LeftCard from "./LeftCard";
import Loading from "../../../Shared/Loading";
import { Helmet } from "react-helmet";
const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch Blog data
  useEffect(() => {
    fetch("https://harmony-matrimony-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBlogData(data);
      });
  }, []);


  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div>

      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Blog</title>
      </Helmet>
      
      <div className="secondary py-10">
        <h1 className="text-center text-5xl font-semibold text-[#FF725E]">Blog & Articles</h1>
        
      </div>
      <div className="flex justify-center gap-16 ">
        <div className="lg:w-2/3 mx-5 w-full lg:ml-28 mt-10">
          <h1 className="text-2xl font-semibold mb-4">LATEST & POPULAR</h1>
          {blogData.map((data) => (
            <BlogCard key={data._id} data={data}></BlogCard>
          ))}
        </div>
        <div className="w-1/3 hidden lg:block lg:mr-28  mt-10">
          <h1 className="text-xl font-semibold mb-5">TRENDING POSTS</h1>
          {blogData.map((data) => (
            <LeftCard key={data._id} data={data}></LeftCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
