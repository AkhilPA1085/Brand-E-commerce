import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavbarLinks from "./NavbarLinks";
import NavButtons from "./NavButtons";

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="flex justify-between items-center">
          <div className={`flex justify-between w-full md:w-auto ${searchOpen && `md:z-10`}`}>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="139.131"
                height="24.513"
                viewBox="0 0 139.131 24.513"
              >
                <g
                  id="Group_4"
                  data-name="Group 4"
                  transform="translate(-141.309 -316.93)"
                >
                  <g
                    id="Group_1"
                    data-name="Group 1"
                    transform="translate(271.998 320.041)"
                  >
                    <path
                      id="Path_1"
                      data-name="Path 1"
                      d="M362.377,332.2l0,1.994,0,1.544h-.861v-.861a6.075,6.075,0,0,1-1.108.64,2.171,2.171,0,0,1-.887.217,1.313,1.313,0,0,1-1.119-1.164,1.073,1.073,0,0,1,.493-.982,7.244,7.244,0,0,1,1.683-.9l.943-.381v-.246a3.069,3.069,0,0,0-.066-.738.836.836,0,0,0-.355-.411,1.267,1.267,0,0,0-.723-.179,1.708,1.708,0,0,0-1.04.271,2.43,2.43,0,0,0-.2-.191,2.506,2.506,0,0,1,1.368-.353,2.338,2.338,0,0,1,1.187.248,1.207,1.207,0,0,1,.56.548A2.378,2.378,0,0,1,362.377,332.2Zm-.861.395-.67.259q-1.56.631-1.56,1.594a.874.874,0,0,0,.2.615.664.664,0,0,0,.518.234,1.534,1.534,0,0,0,.656-.19,5.2,5.2,0,0,0,.846-.559Z"
                      transform="translate(-358.398 -325.425)"
                      fill="#5a5c5f"
                    />
                    <path
                      id="Path_2"
                      data-name="Path 2"
                      d="M368.222,332.275l-.888,0,0-1.721.009-6.705,0-1.748.724,0c0,.013.013.013.027,0h.138l-.013,8.453Z"
                      transform="translate(-361.954 -322.098)"
                      fill="#5a5c5f"
                    />
                    <path
                      id="Path_3"
                      data-name="Path 3"
                      d="M371.807,332.281h-.889l0-1.722.009-6.7,0-1.749h.724c0,.014.013.014.027,0h.137l-.013,8.453Z"
                      transform="translate(-363.381 -322.101)"
                      fill="#5a5c5f"
                    />
                  </g>
                  <g
                    id="Group_2"
                    data-name="Group 2"
                    transform="translate(173.336 319.668)"
                  >
                    <path
                      id="Path_4"
                      data-name="Path 4"
                      d="M208.828,340.376H194.51v-.736l10.608-16.8h-3.572a7.224,7.224,0,0,0-3.3.682q-1.363.709-1.99,3.545h-.846l.436-4.909h13.145v.792l-10.527,16.744h4.418a7.058,7.058,0,0,0,3.3-.709q1.335-.735,2.127-4.472h.736Z"
                      transform="translate(-194.51 -321.749)"
                      fill="#4e154a"
                    />
                    <path
                      id="Path_5"
                      data-name="Path 5"
                      d="M245.407,340.376v-.682h2.7V323.031l-5.564,17.344h-.928l-5.508-17.344v16.662h2.7v.682h-6.245v-.682h2.7V322.84h-2.7v-.682H239.6l3.818,12.49,3.955-12.49h6.9v.682h-2.7v16.854h2.7v.682Z"
                      transform="translate(-209.655 -321.749)"
                      fill="#5a5c5f"
                    />
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M279.027,340.105v-.682h2.809l-1.61-4.826H274.31l-1.691,4.826H275.4v.682H269.62v-.682H271.8l6.517-17.945h.955l6.218,17.945h2.154v.682Zm-1.663-13.8-2.754,7.609H279.9Z"
                      transform="translate(-224.403 -321.478)"
                      fill="#5a5c5f"
                    />
                    <path
                      id="Path_7"
                      data-name="Path 7"
                      d="M317.062,340.7a4.8,4.8,0,0,1-1.99-.382,3.554,3.554,0,0,1-1.992-2.672L313,336.476q-.083-1.308-.246-2.317a5.04,5.04,0,0,0-.573-1.718,3.085,3.085,0,0,0-2.863-1.446H307.9v8.7h2.7v.682h-8.865v-.682h2.7V322.84h-2.7v-.682h9.6a8.227,8.227,0,0,1,4.5.982,3.849,3.849,0,0,1,.11,6.056,9.415,9.415,0,0,1-4.336,1.554q3.409.709,4.309,2.481a7.283,7.283,0,0,1,.668,1.964,13.775,13.775,0,0,1,.232,2.291l.027,1.336a1.271,1.271,0,0,0,.655.872,1.936,1.936,0,0,0,.872.137,10.522,10.522,0,0,0,1.145-.081v.627A10.607,10.607,0,0,1,317.062,340.7Zm-4.091-16.963a2.881,2.881,0,0,0-2.4-.9H307.9v7.473h2.318a3.341,3.341,0,0,0,2.59-.9,4.081,4.081,0,0,0,.818-2.809A4.855,4.855,0,0,0,312.971,323.741Z"
                      transform="translate(-237.184 -321.749)"
                      fill="#5a5c5f"
                    />
                    <path
                      id="Path_8"
                      data-name="Path 8"
                      d="M333.445,340.376v-.682h2.7V322.84h-2.7v-.682h8.863v.682h-2.7v16.854h2.7v.682Zm10.663,0v-.682h2.836l-7.036-8.754,7.609-8.1h-3.11v-.682h6.845v.682h-2.672l-5.945,6.246,8.7,10.608h1.228v.682Z"
                      transform="translate(-249.805 -321.749)"
                      fill="#5a5c5f"
                    />
                  </g>
                  <g
                    id="Group_3"
                    data-name="Group 3"
                    transform="translate(141.309 316.93)"
                  >
                    <path
                      id="Path_9"
                      data-name="Path 9"
                      d="M144.887,320.6s.824-3.484,7.728-3.23c0,0,9.31.76,12.286-.443,0,0-2.787,2.85-11.147,2.28C153.755,319.21,147.1,318.577,144.887,320.6Z"
                      transform="translate(-142.733 -316.93)"
                      fill="#4e154a"
                      opacity="0.4"
                    />
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M141.309,327.951s.38-4.561,7.348-6.271c0,0,3.8-.886,6.587-1.393,0,0,6.4-1.14,8.234-3.357,0,0-1.52,3.484-7.791,5l-4.622,1.14A22.43,22.43,0,0,0,141.309,327.951Z"
                      transform="translate(-141.309 -316.93)"
                      fill="#4e154a"
                      opacity="0.7"
                    />
                    <path
                      id="Path_11"
                      data-name="Path 11"
                      d="M142.444,338.466s-2.091-6.017,7.475-11.274c0,0,4.749-2.47,7.22-3.991,0,0,5.7-3.357,6.713-6.271,0,0-.506,4.307-6.968,8.551l-5.826,3.8S143.964,334.285,142.444,338.466Z"
                      transform="translate(-141.684 -316.93)"
                      fill="#4e154a"
                    />
                    <path
                      id="Path_12"
                      data-name="Path 12"
                      d="M164.481,351.546s-.824,3.483-7.727,3.23c0,0-9.311-.76-12.288.444,0,0,2.787-2.851,11.148-2.281C155.613,352.939,162.263,353.572,164.481,351.546Z"
                      transform="translate(-142.565 -330.707)"
                      fill="#4e154a"
                      opacity="0.4"
                    />
                    <path
                      id="Path_13"
                      data-name="Path 13"
                      d="M166.635,339.341s-.38,4.56-7.348,6.271c0,0-3.8.887-6.587,1.394,0,0-6.4,1.14-8.235,3.357,0,0,1.52-3.484,7.791-5l4.624-1.14A22.432,22.432,0,0,0,166.635,339.341Z"
                      transform="translate(-142.565 -325.849)"
                      fill="#4e154a"
                      opacity="0.7"
                    />
                    <path
                      id="Path_14"
                      data-name="Path 14"
                      d="M165.874,321.875s2.091,6.017-7.473,11.274c0,0-4.75,2.471-7.22,3.991,0,0-5.7,3.357-6.715,6.271,0,0,.507-4.307,6.968-8.552l5.827-3.8S164.354,326.055,165.874,321.875Z"
                      transform="translate(-142.565 -318.898)"
                      fill="#4e154a"
                    />
                  </g>
                </g>
              </svg>
            </Link>
          </div>

          <ul className="hidden md:flex items-center gap-8 capitalize font-semibold">
            {/* <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li> */}
            <NavbarLinks />
          </ul>

          <div className="flex items-center gap-5">
            <NavButtons searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

            <div
              className={`${!searchOpen && `z-50`} md:hidden`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {!menuOpen ? (
                <AiOutlineMenu size={22} />
              ) : (
                <AiOutlineClose size={22} />
              )}
            </div>
          </div>

          {/* mobile menu */}
          <ul
            className={`
            md:hidden bg-white absolute h-screen w-full bottom-0 z-10
            duration-500 ${menuOpen ? "right-0" : "right-[-100%]"}
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
    </nav>
  );
};

export default TopBar;
