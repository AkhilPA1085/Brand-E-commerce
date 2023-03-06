import CartSideBar from "@/components/sections/CartSideBar";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import SearchBox from "./SearchBox";
import Image from "next/image";

import CARTICON from "../../../../public/assets/ShoppingBagOutline.svg"
import HEARTICON from "../../../../public/assets/heart-outline.svg"

const NavButtons = ({ searchOpen, setSearchOpen, setMenuOpen, menuOpen }) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between gap-2 md:gap-5">
        <div
          className={`flex items-baseline justify-between md:justify-evenly gap-2 text-start`}
        >
          <SearchBox searchOpen={searchOpen} setSearchOpen={setSearchOpen}/>
          
          {!searchOpen && (
            <>
              <div>
                {/* <AiOutlineHeart size={22} /> */}
                <Image src={HEARTICON} width={22} height={22} layout="fixed" className="w-8 h-6"/>
              </div>

              
              <div
                className="cursor-pointer"
                onClick={() => setCartOpen(!cartOpen)}
              >
                {/* <AiOutlineShoppingCart size={22} /> */}
                <Image src={CARTICON} width={22} height={22} className="w-8 h-6"/>
              </div>
            </>
          )}
        </div>

        <div
          className={`${!searchOpen && `z-20`} md:hidden`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? (
            <AiOutlineMenu size={22} />
          ) : (
            <AiOutlineClose size={22} />
          )}
        </div>

        {cartOpen && (
          <CartSideBar cartOpen={cartOpen} setCartOpen={setCartOpen} />
        )}
      </div>
    </>
  );
};

export default NavButtons;
