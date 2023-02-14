import BlogCard from "@/components/basic/BlogCard";
import BlogsSideBar from "@/components/sections/BlogsSideBar";
import { getAllBlogs } from "./services/test";

const Blogs = () => {
  const blogs = getAllBlogs();
  return (
    <div className="max-w-screen-lg mx-auto pt-24">
      <p className="font-semibold">Home/blogs</p>
      <div className="grid grid-cols-4 pb-24 gap-8">
        <div className="col-span-3 pt-8">
          {blogs.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>

        <div className="col-span-1 pl-4">
            <BlogsSideBar/>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
