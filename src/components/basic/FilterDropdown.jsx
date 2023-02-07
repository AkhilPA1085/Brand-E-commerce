import { useState } from "react";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="z-50 absolute bg-white py-2 rounded-lg shadow-xl">
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
