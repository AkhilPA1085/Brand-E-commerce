import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import NavButtons from "./NavButtons";

import LOGO from "../../../../public/assets/zmark-logo.svg"


const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="bg-white fixed w-full z-10">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="flex justify-between items-center">
          <div
            className={`flex justify-between w-1/2 md:w-auto ${
              searchOpen && `md:z-10 2xl:hidden`
            }`}
          >
            <Link href="/">
              <Image src={LOGO} alt="LOGO"
              width={200} height={60} className="w-full"/>

            </Link>
          </div>

          <ul className="hidden md:flex items-center capitalize font-semibold">
            <NavbarLinks />
          </ul>

          <div className="flex items-center md:mr-5">
            <NavButtons
              searchOpen={searchOpen}
              setSearchOpen={setSearchOpen}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          </div>

          {/* mobile menu */}
          <ul
            className={`
            md:hidden bg-white fixed h-screen w-full bottom-0 z-10
            duration-500 overflow-scroll ${
              menuOpen ? "right-0" : "right-[-100%]"
            }
          `}
          >
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavbarLinks />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
