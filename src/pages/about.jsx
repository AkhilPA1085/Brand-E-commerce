import PageDescriptionCard from "@/components/basic/PageDescriptionCard";
import PageTitleBanner from "@/components/basic/PageTitleBanner";
import { useRouter } from "next/router";
import { getAboutPageDetails } from "./services/test";

const About = () => {
  const router = useRouter();
  const { pathname } = router;
  const pagename = pathname.slice(1);
  const datas = getAboutPageDetails();
  const ImageUrl = "https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?w=826&t=st=1676019524~exp=1676020124~hmac=a343ea7e8f0d254e7472275fde706508dc35513718cdf010d9a10c228efe4a6chttps://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?w=826&t=st=1676019524~exp=1676020124~hmac=a343ea7e8f0d254e7472275fde706508dc35513718cdf010d9a10c228efe4a6c"
  return (
    <div className="max-w-screen-xl mx-auto pt-14">
      <PageTitleBanner
        pathname={pagename}
        className={"pb-28"}
        bgImage={ImageUrl}
      />

      <div className="max-w-screen-lg mx-auto p-4 pt-14">
        {datas.map((data,index)=>(
          <PageDescriptionCard data={data} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default About;
