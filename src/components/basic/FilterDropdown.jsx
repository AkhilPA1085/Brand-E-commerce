import Image from "next/image";
import { useState } from "react";

import DOWNARROW from "/public/assets/down-arrow.svg"

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative">
        <button
          className="flex items-center py-2 px-4 text-sm font-medium text-[#9B9B9B] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          Dropdown
          <Image src={DOWNARROW} width={22} height={22} alt="cart" className="w-8 h-6"/>
        </button>
        {isOpen && (
          <div className="z-50 absolute bg-white py-2 rounded-lg">
            <a
              href="#"
              className="block px-4 py-2 text-sm font-medium text-[#9B9B9B] hover:bg-gray-100"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm font-medium text-[#9B9B9B] hover:bg-gray-100"
            >
              Option 2
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterDropdown;
