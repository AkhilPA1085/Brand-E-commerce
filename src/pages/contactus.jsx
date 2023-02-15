import PageTitleBanner from "@/components/basic/PageTitleBanner";
import Accordion from "@/components/basic/Accordion";
import StyledButton from "@/components/common/StyledButton";
import { useRouter } from "next/router";
import {
  getFreaquantlyAskedQueries,
} from "./services/test";
import FormInput from "@/components/common/FormInput";

const Contactus = () => {
  const router = useRouter();
  const { pathname } = router;
  const pagename = pathname.slice(1);
  const freaquantlyAskedQueries = getFreaquantlyAskedQueries();

  const styles = {
    titletext: "text-black font-semibold text-start text-xl",
    border: "border-b-2",
    show: false,
  };
  const ImageUrl = "https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?w=826&t=st=1676019524~exp=1676020124~hmac=a343ea7e8f0d254e7472275fde706508dc35513718cdf010d9a10c228efe4a6chttps://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?w=826&t=st=1676019524~exp=1676020124~hmac=a343ea7e8f0d254e7472275fde706508dc35513718cdf010d9a10c228efe4a6c"
  return (
    <div className="max-w-screen-xl mx-auto pt-14">
      <PageTitleBanner pathname={pagename} className={"pb-28"} bgImage={ImageUrl}/>

      <div className="max-w-screen-lg mx-auto p-4 pt-14">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h6 className="text-base text-[#9B9B9B] pb-3">
              Common queries answered
            </h6>
            <h1 className="text-4xl text-black font-semibold pb-7">
              Frequently asked Questions
            </h1>

            {freaquantlyAskedQueries.map((freaquantlyAskedQuery) => (
              <Accordion
                key={freaquantlyAskedQuery.id}
                accordionData={freaquantlyAskedQuery}
                styles={styles}
              />
            ))}
          </div>
          <div>
            <h6 className="text-base text-[#9B9B9B] pb-3">Still need help?</h6>
            <h1 className="text-4xl text-black font-semibold pb-7">
              Get in touch with us
            </h1>

            <form>
              <FormInput
                id={"name"}
                type={"text"}
                placeholder={"name*"}
                className={"md:!w-full"}
              />
              <FormInput
                id={"email"}
                type={"email"}
                placeholder={"email*"}
                className={"md:!w-full"} 
              />
              <FormInput
                id={"mobile number"}
                type={"text"}
                placeholder={"mobile number*"}
                className={"md:!w-full"}
              />
              <FormInput
                id={"subject"}
                type={"text"}
                placeholder={"subject*"}
                className={"md:!w-full"}
              />
              <textarea
                className="appearance-none border rounded w-full py-2 mb-3 px-3 text-[#707070] leading-tight focus:outline-none capitalize"
                id="message"
                type="text"
                rows="4"
                placeholder="message*"
                required
              />
              <StyledButton className={"bg-black-button w-full"} type={"submit"}>
                send
              </StyledButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
