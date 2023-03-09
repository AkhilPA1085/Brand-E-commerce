import Image from "next/image";

const BlogCard = ({blog}) => {
  return (
    <div className="grid md:grid-cols-3 pb-24">
      <div className="col-span-2 md:mr-8">
        <Image width={500} height={500} src={blog.img} alt="" className="h-full w-full" />
      </div>
      <div>
        <p className="date pb-4 text-[#9B9B9B] text-base">{blog.date}</p>
        <h2 className="font-bold text-4xl text-black capitalize pb-8">
          {blog.maintitle}
        </h2>
        <p className="date pb-4 text-black text-base">{blog.desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
