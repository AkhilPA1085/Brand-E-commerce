import BlogCard from "@/components/basic/BlogCard";
import BlogsSideBar from "@/components/sections/BlogsSideBar";
import { getAllBlogs } from "./api/services/test";

const Blogs = () => {
  const blogs = getAllBlogs();
  return (
    <div className="max-w-screen-lg mx-auto pt-24 p-4">
      <p className="font-semibold">Home/blogs</p>
      <div className="grid md:grid-cols-4 pb-24">
        <div className="col-span-3 pt-8 md:mr-8">
          {blogs.map((blog,index) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <div className="col-span-1 md:pl-4">
            <BlogsSideBar/>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
