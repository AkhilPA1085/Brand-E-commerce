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

import CARTICON from "../../../../public/assets/ShoppingBagOutline.svg";
import HEARTICON from "../../../../public/assets/heart-outline.svg";

const NavButtons = ({ searchOpen, setSearchOpen, setMenuOpen, menuOpen }) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between py-2 md:py-0">
        <div
          className={`flex items-baseline justify-between md:justify-evenly text-start mr-4`}
        >
          <SearchBox searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

          {!searchOpen && (
            <>
              <div>
                {/* <AiOutlineHeart size={22} /> */}
                <Image
                  src={HEARTICON}
                  width={22}
                  height={22}
                  alt="wish-list"
                  className="w-8 h-6"
                />
              </div>

              <div
                className="cursor-pointer"
                onClick={() => setCartOpen(!cartOpen)}
              >
                {/* <AiOutlineShoppingCart size={22} /> */}
                <div className="badge relative">
                  <Image
                    src={CARTICON}
                    width={22}
                    height={22}
                    alt="cart"
                    className="w-8 h-6 relative"
                  />
                  <div className="badge-number absolute bottom-auto -top-3 left-auto -right-3 h-6 w-6 rounded-full bg-black text-white flex justify-center items-center">
                    4
                  </div>
                </div>
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
