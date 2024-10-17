// Navbar.jsx
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <nav className="fixed w-full bg-teal-500 text-white border-b border-teal-400 z-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4">
        <div className="pl-4 flex items-center">
          <svg
            className="h-5 pr-3 fill-current text-teal-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M17.94 11H13V9h4.94A8 8 0 0 0 11 2.06V7H9V2.06A8 8 0 0 0 2.06 9H7v2H2.06A8 8 0 0 0 9 17.94V13h2v4.94A8 8 0 0 0 17.94 11zM10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
          </svg>
          <a
            className="text-teal-700 text-base no-underline hover:no-underline font-extrabold text-xl"
            href="#"
          >
            Searchy
          </a>
          <div className="cursor-pointer pl-6" onClick={toggleSearch}>
            <svg
              className="fill-current pointer-events-none text-grey-darkest w-4 h-4 inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
            </svg>
          </div>
        </div>

        <div className="pr-4 lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-black hover:border-purple appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:flex-1 lg:justify-end lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          } mt-2 lg:mt-0 z-20`}
        >
          <ul className="list-reset flex justify-end items-center">
            <li className="mr-3 py-2 lg:py-0">
              <a
                className="inline-block py-2 px-4 text-black font-bold no-underline"
                href="#"
              >
                Inicio
              </a>
            </li>
            <li className="mr-3 py-2 lg:py-0">
              <a
                className="inline-block text-grey-dark no-underline hover:text-black hover:underline py-2 px-4"
                href="#"
              >
                Personajes
              </a>
            </li>
            <li className="mr-3 py-2 lg:py-0">
              <a
                className="inline-block text-grey-dark no-underline hover:text-black hover:underline py-2 px-4"
                href="#"
              >
                Planetas
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Search */}
      {isSearchVisible && (
        <div className="relative w-full bg-white shadow-xl">
          <div className="container mx-auto py-1 text-black">
            <input
              type="search"
              placeholder="Search..."
              autoFocus
              className="w-full text-grey-800 transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
