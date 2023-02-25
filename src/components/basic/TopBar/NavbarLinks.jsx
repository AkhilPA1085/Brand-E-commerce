import { menus } from "@/Data/data";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
const NavbarLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {menus.map((menu) => (
        <div key={menu.label}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center"
              onClick={() =>
                heading !== menu.label ? setHeading(menu.label) : setHeading("")
              }
            >
              {menu.label}

              {heading === menu.label ? <AiOutlineUp /> : <AiOutlineDown />}
            </h1>
            {menu.submenu && (
              <div>
                <div className="absolute top-20 z-10 hidden group-hover:md:block hover:md:block md:w-full md:left-0">
                  <div className={`bg-white p-5 grid grid-cols-4`}>
                    {menu.sublinks.map((mysublinks) => (
                      <div className="p-5" key={mysublinks.Head}>
                        <h1 className="text-lg font-bold capitalize">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            className="text-sm text-gray-600"
                            key={slink.name}
                          >
                            <Link href={slink.link}>{slink.name}</Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* mobile menu */}
          <div
            className={`bg-white ${
              heading === menu.label ? `md:hidden` : `hidden`
            }`}
          >
            {menu.sublinks.map((mySlink) => (
              <div key={mySlink.Head}>
                <div>
                  <h1
                    className="py-3 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                    onClick={() =>
                      subHeading !== mySlink.Head
                        ? setSubHeading(mySlink.Head)
                        : setSubHeading("")
                    }
                  >
                    {mySlink.Head}
                    {subHeading === mySlink.Head ? (
                      <AiOutlineUp />
                    ) : (
                      <AiOutlineDown />
                    )}
                  </h1>
                </div>
                <div
                  className={
                    subHeading === mySlink.Head ? "md:hidden" : "hidden"
                  }
                >
                  {mySlink.sublink.map((link) => (
                    <li className="text-sm py-3 pl-14" key={link.name}>
                      <Link href={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavbarLinks;
