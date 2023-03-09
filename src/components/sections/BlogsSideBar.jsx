import Link from "next/link";

const BlogsSideBar = () => {
  return (
    <>
      <h1 className="font-bold text-black text-2xl pb-4">The zMark All Blog</h1>
      <p className="desc text-black pb-20">
        Meditation williamsburg kogi blog bushwick pitchfork polaroid Austin
        dreamcatcher narwhal taxidermy tofu gentrify aesthetic.
      </p>

      <p className="uppercase text-[#9B9B9B] tracking-wide font-semibold">
        Categories
      </p>
      <ul className="pt-4">
        <li className="text-black font-semibold capitalize tracking-wide pb-4">
          <Link href="#">Men’s Fashion</Link>
        </li>
        <li className="text-black font-semibold capitalize tracking-wide pb-4">
          <Link href="#">women’s Fashion</Link>
        </li>
        <li className="text-black font-semibold capitalize tracking-wide pb-4">
          <Link href="#">kids Fashion</Link>
        </li>
      </ul>

      <p className="uppercase text-[#9B9B9B] tracking-wide font-semibold pt-20">
        tags
      </p>
      <ul className="pt-4">
        <li className="grid grid-cols-2 pb-4">
          <Link
            href="#"
            className="md:mr-4 mb-4 col-span-2 md:col-span-1 font-semibold capitalize tracking-wide bg-black text-white p-2 text-center text-base"
          >
            shiirt
          </Link>
          <Link
            href="#"
            className="md:mr-4 mb-4 col-span-2 md:col-span-1 font-semibold capitalize tracking-wide bg-black text-white p-2 text-center text-base"
          >
            shiirt
          </Link>
          <Link
            href="#"
            className="md:mr-4 mb-4 col-span-2 md:col-span-1 font-semibold capitalize tracking-wide bg-black text-white p-2 text-center text-base"
          >
            shiirt
          </Link>
          
        </li>
      </ul>
    </>
  );
};

export default BlogsSideBar;
