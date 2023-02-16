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

const NavButtons = ({ searchOpen, setSearchOpen, setMenuOpen, menuOpen }) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="flex items-center justify-between gap-2 md:gap-5">
      <div
        className={`flex items-baseline justify-between md:justify-evenly gap-2 text-start bg-white ${
          searchOpen && `full-width-search-box`
        }`}
      >
        <div 
            className={`duration-500 w-full ${
              searchOpen && `md:w-2/4`
            }`}>
          <ul
          >
            <li
              onClick={() => setSearchOpen(true)}
              className={`md:bg-gray-200 flex items-center rounded-full py-2 pl-2`}
            >
              <AiOutlineSearch size={22} />

              <input
                type="text"
                placeholder="Search"
                className={`outline-none bg-gray-200 rounded-full md:w-full ${
                  searchOpen ? `w-full py-1 px-2` : `w-0`
                }`}
              />
            </li>
            {searchOpen && (
              <>
                <li className="capitalize text-gray-200">Popular search terms</li>
                <li>
                  <Link href="#">Mens wear</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {searchOpen ? (
          <div
            onClick={() => setSearchOpen(false)}
            className="cursor-pointer z-10 py-2 md:py-0"
          >
            Cancel
          </div>
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
      </div>

      <div
        className={`${!searchOpen && `z-20`} md:hidden`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {!menuOpen ? <AiOutlineMenu size={22} /> : <AiOutlineClose size={22} />}
      </div>

      {cartOpen && (
        <CartSideBar cartOpen={cartOpen} setCartOpen={setCartOpen} />
      )}
    </div>
  );
};

export default NavButtons;
