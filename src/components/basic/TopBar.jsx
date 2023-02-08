import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import CartSideBar from "./CartSideBar";

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white">
      <div className="container mx-auto pt-3 pb-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="left-col">
            <Link href="/">Logo</Link>
          </div>
          <div className="center-col text-center">
            <ul
              className={`menu-list ${
                menuOpen
                  ? `mob-menu`
                  : `full-menu hidden lg:flex justify-between`
              }`}
            >
              <li className="list-item">
                <Link href={`/categories/women`}>Women</Link>
              </li>
              <li className="list-item">
                <Link href={`/categories/men`}>men</Link>
              </li>
              <li className="list-item">
                <Link href={`/categories/kids`}>kids</Link>
              </li>
              <li className="list-item">
                <Link href="#">fashion</Link>
              </li>
            </ul>
          </div>
          <div className="right-col flex items-center justify-end gap-2">
            <div className="search-box hidden lg:flex items-center">
              <AiOutlineSearch size={22}/>
              <input type="text" placeholder="Search..." className="search" />
            </div>
            <div className="icons flex gap-2">
              <AiOutlineHeart size={22}/>
              <AiOutlineShoppingCart size={22} onClick={()=>setCartOpen(!cartOpen)}/>
            </div>
            
            <CartSideBar cartOpen={cartOpen} setCartOpen={setCartOpen}/>

            <div className="mobile-menu-icon flex lg:hidden items-center gap-2">
              <div onClick={() => setSearchOpen(!searchOpen)} className="z-20">
                {!searchOpen ? (
                  <AiOutlineSearch size={22}/>
                ) : (
                  <p className="cancel-button">Cancel</p>
                )}
              </div>
              <div
                className={`mob-search-box ${searchOpen ? `active` : `close`}`}
               >
                <input
                  type="text"
                  placeholder="Search"
                  className={!searchOpen ? `hidden` : `block`}
                />
              </div>
              <div onClick={() => setMenuOpen(!menuOpen)}>
                {!menuOpen ? (
                  <AiOutlineMenu size={22}/>
                ) : (
                  <div className="mob-menu-close-icon">
                    <AiOutlineClose size={22}/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
