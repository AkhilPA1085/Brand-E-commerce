import DescriptionCard from "@/components/basic/DescriptionCard";
import ProductTitleBanner from "@/components/basic/ProductTitleBanner";
import { useRouter } from "next/router";
import { getAboutPageDetails } from "./services/test";

const About = () => {
  const router = useRouter();
  const { pathname } = router;
  const pagename = pathname.slice(1);
  const datas = getAboutPageDetails()
  return (
    <div className="max-w-screen-xl mx-auto pt-14">
      <ProductTitleBanner pathname={pagename} className={"pb-28"} />

      <div className="max-w-screen-lg mx-auto p-4 pt-14">
        {datas.map((data,index)=>(
          <DescriptionCard data={data} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default About;
