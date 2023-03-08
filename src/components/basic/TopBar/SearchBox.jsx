import Image from "next/image";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import SEARCHICON from "../../../../public/assets/search-outline.svg"

const SearchBox = ({ searchOpen, setSearchOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setSearchOpen(true);
  };

  return (
    <div
      className={`${
        searchOpen
          ? `absolute top-8 md:top-0 bottom-4 md:bottom-0 left-0 right-0 flex justify-center items-center`
          : `relative`
      }`}
    >
      <div className={`flex items-center justify-center w-full bg-white ${searchOpen && `py-5 my-5`}`}>
        <div
          className={`md:bg-gray-200 rounded-full md:px-2 py-2 flex items-center w-full ${
            searchOpen && `w-2/3 py-5 md:py-0`
          }`}
          onClick={handleClick}
        >
          {/* <AiOutlineSearch size={22} /> */}
          <Image src={SEARCHICON} width={22} height={22} className="w-8 h-6" alt="search"/>
          <input
            type="text"
            className={`md:w-full bg-gray-200 rounded-full text-gray-700 border-gray-300 focus:outline-none ${
              searchOpen ? `w-2/3  bg-gray-200 rounded-full px-4 py-2` : `w-0`
            }`}
            placeholder="Search"
          />
        </div>
        {searchOpen && (
          <div
            onClick={() => setSearchOpen(false)}
            className="cursor-pointer z-10 py-2 md:py-0 ml-2"
          >
            Cancel
          </div>
        )}
      </div>
      {searchOpen && (
        <div
          className="absolute top-4 md:top-16 z-10 w-full mt-2 bg-white shadow-lg justify-center items-center flex-col"
          style={{ display: isOpen ? "flex" : "none" }}
          onClick={() => setIsOpen(false)}
        >
          <p className={`block px-4 py-2 text-sm text-gray-200 ${
              searchOpen && `w-2/3`
            }`}>Popular Search</p>
          <a
            href="#"
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-black ${
              searchOpen && `w-2/3`
            }`}
          >
            Item 1
          </a>
          <a
            href="#"
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-black ${
              searchOpen && `w-2/3`
            }`}
          >
            Item 2
          </a>
          <a
            href="#"
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-black ${
              searchOpen && `w-2/3`
            }`}
          >
            Item 3
          </a>
          <a
            href="#"
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-black ${
              searchOpen && `w-2/3`
            }`}
          >
            Item 3
          </a>
          <a
            href="#"
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-black ${
              searchOpen && `w-2/3`
            }`}
          >
            Item 3
          </a>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
