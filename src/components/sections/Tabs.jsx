import Image from "next/image";
import { useState } from "react";

const Tabs = ({ descriptions, count = 1 }) => {
  const [openTab, setOpenTab] = useState(0);
  descriptions = descriptions.slice(0, count);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex justify-center mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {descriptions.map((description, index) => (
              <li className="-mb-px mr-2 last:mr-0 text-center">
                <a
                  className={`text-xs uppercase px-5 py-3 leading-normal ${
                    openTab === index
                      ? `font-semibold border-b-2 border-black`
                      : ``
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(index);
                  }}
                  data-toggle="tab"
                  href={`#${description.label}`}
                  role="tablist"
                >
                  {description.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
              {descriptions.map((description, index) => (
                  <div
                    className={openTab === index ? `block flex flex-col sm:flex-row w-1/2 py-4` : "hidden"}
                    id={description.label}
                  >
                    <div className="pr-8">
                      <h4 className="font-bold">Lorem ipsum dolor sit amet.</h4>
                      <p>{description.content}</p>
                    </div>
                    <Image width={415} height={177} src={description.image} alt="" className="object-cover"/>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
