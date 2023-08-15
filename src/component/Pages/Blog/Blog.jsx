import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import LeftCard from "./LeftCard";
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
  console.log(blogData);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl animate-bounce">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#FFFBF0] py-10">
        <h1 className="text-center text-5xl font-semibold">Blog & Articles</h1>
        <p className="text-center pt-5">
          lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla
        </p>
      </div>
      <div className="flex justify-center gap-16 ">
        <div className="lg:w-2/3 mx-auto w-full lg:ml-28 mt-10">
          <h1 className="text-2xl font-semibold mb-4">LATEST & POPULAR</h1>
          {blogData.map((data) => (
            <BlogCard key={data._id} data={data}></BlogCard>
          ))}
        </div>
        <div className="w-1/3 hidden lg:block lg:mr-28  mt-10">
          <h1 className="text-xl font-semibold mb-5">TRENDING POSTS</h1>
          {blogData.slice(0,4).map((data) => (
            <LeftCard key={data._id} data={data}></LeftCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
