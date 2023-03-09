import PageTitleBanner from "@/components/basic/PageTitleBanner";
import Accordion from "@/components/basic/Accordion";
import { useRouter } from "next/router";
import {
  getOrderAndShippingQueries,
  getReturnsAndExchangeQueries,
} from "./api/services/test";

const Helpdesk = () => {
  const router = useRouter();
  const { pathname } = router;
  const pagename = pathname.slice(1);
  const orderAndShippingQueries = getOrderAndShippingQueries();
  const returnsAndExchangeQueries = getReturnsAndExchangeQueries();

  const styles = {
    titletext: "text-black font-semibold text-start text-xl",
    border:'border-b-2',
    show: false,
  };
  const ImageUrl = "https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?w=826&t=st=1676019524~exp=1676020124~hmac=a343ea7e8f0d254e7472275fde706508dc35513718cdf010d9a10c228efe4a6chttps://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?w=826&t=st=1676019524~exp=1676020124~hmac=a343ea7e8f0d254e7472275fde706508dc35513718cdf010d9a10c228efe4a6c"
  return (
    <div className="max-w-screen-xl mx-auto pt-14">
      <PageTitleBanner pathname={pagename} className={"pb-28"} bgImage={ImageUrl}/>

      <div className="max-w-screen-lg mx-auto p-4 pt-14">
        <div className="grid md:grid-cols-2">
          <div className="mr-8">
            <h6 className="text-base text-[#9B9B9B] pb-3">
              Common purchase queries answered
            </h6>
            <h1 className="text-4xl text-black font-semibold pb-7">
              Orders and Shipping
            </h1>

            {orderAndShippingQueries.map(
              (orderAndShippingQuery) => (
                <Accordion
                  key={orderAndShippingQuery.id}
                  accordionData={orderAndShippingQuery}
                  styles={styles}
                />
              )
            )}
          </div>
          <div>
            <h6 className="text-base text-[#9B9B9B] pb-3">
              If you need to swap an item
            </h6>
            <h1 className="text-4xl text-black font-semibold pb-7">
              Returns and Exchanges
            </h1>

            {returnsAndExchangeQueries.map((returnsAndExchangeQuery) => (
              <Accordion
                key={returnsAndExchangeQuery.id}
                accordionData={returnsAndExchangeQuery}
                styles={styles}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpdesk;
