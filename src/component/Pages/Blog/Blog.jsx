import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import LeftCard from "./LeftCard";
import Loading from "../../../Shared/Loading";
import { Helmet } from "react-helmet";
const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [react, setReact] = useState(false);

  // fetch Blog data
  useEffect(() => {
    fetch("https://harmony-matrimony-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBlogData(data);
      });
  }, [react]);

  const handleShowBlogByCategory = (type) => {
      fetch(`https://harmony-matrimony-server.vercel.app/blogs/type/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBlogData(data);
      });
  }

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

      <div className="secondary h-[200px] bg-[url('https://i.ibb.co/txC9WyP/Photo.jpg')]">
        <h1 className="text-center pt-16 text-5xl font-semibold text-[#FF725E] ">Blog & Articles</h1>

      </div>
      <div className="flex justify-center gap-16 ">
        <div className="lg:w-2/3 mx-5 w-full lg:ml-28 mt-10">
          <h1 className="text-4xl font-semibold mb-8 font-serif text-center">ALL BLOG</h1>
          <div className="grid xl:grid-cols-2 gap-5">
            {blogData.map((data) => (
              <BlogCard key={data._id} data={data} setReact={setReact} react={react}></BlogCard>
            ))}
          </div>
        </div>
        <div className="w-1/3 hidden lg:block lg:mr-28  mt-10">

          <div className="tags-section mb-5">
            <div className="border-b-2 border-red-700 py-2">
              <h3 className="font-medium text-3xl font-serif">Tags</h3>
            </div>
            <div className="my-3">
              <button onClick={()=>handleShowBlogByCategory('advice')} className="btn btn-sm rounded-xl bg-slate-200 ms-2">Advice</button>
              <button  onClick={()=>handleShowBlogByCategory('engagement')} className="btn btn-sm rounded-xl bg-slate-200 ms-2">Engagement</button>
              <button  onClick={()=>handleShowBlogByCategory('wedding')} className="btn btn-sm rounded-xl bg-slate-200 ms-2">Wedding</button>
            </div>
            <div>
              <button  onClick={()=>handleShowBlogByCategory('date')} className="btn btn-sm rounded-xl bg-slate-200 ms-2">Dates</button>
              <button  onClick={()=>handleShowBlogByCategory('photography')} className="btn btn-sm rounded-xl bg-slate-200 ms-2">Photography</button>
            </div>
          </div>
            <LeftCard></LeftCard>
        </div>
      </div>
    </div>
  );
};

export default Blog;
