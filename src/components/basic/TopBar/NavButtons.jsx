import CartSideBar from "@/components/sections/CartSideBar";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const NavButtons = ({ searchOpen, setSearchOpen }) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between gap-5">
        <div className={`flex flex-col md:items-center text-start bg-white ${searchOpen && `full-width-search-box`}`}>
          <div
            onClick={() => setSearchOpen(true)}
            className={`md:bg-gray-200 flex items-center rounded-full py-2 pl-2 ${searchOpen && `w-3/4 md:ml-20`}`}
          >
            <AiOutlineSearch size={22} />

            <input
              type="text"
              placeholder="Search"
              className={`outline-none bg-gray-200 rounded-full`}
            />
          </div>
          {searchOpen && 
          <ul>
            <li className="capitalize text-gray-200">Popular search terms</li>
            <li>
              <Link href="#">Mens wear</Link>
            </li>
          </ul>
          }
        </div>

        {searchOpen ? (
          <p onClick={() => setSearchOpen(false)} className="cursor-pointer z-10 py-2 md:py-0">
            Cancel
          </p>
        ) : (
          <>
            <div>
              <AiOutlineHeart size={22} />
            </div>

            <div
              className="cursor-pointer"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <AiOutlineShoppingCart size={22} />
            </div>
          </>
        )}
        {cartOpen && (
          <CartSideBar cartOpen={cartOpen} setCartOpen={setCartOpen} />
        )}
      </div>
    </>
  );
};

export default NavButtons;
