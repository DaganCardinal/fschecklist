import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { NavbarLink, NavbarDropdown, NavbarSettings } from "./NavbarComponents";

export const MainNavbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const navbarDropdownItems = [
    {
      to: "/737",
      content: "Boeing 737 NG",
    },
    {
      to: "/a320",
      content: "Airbus A320",
    },
    {
      to: "/crjx",
      content: "CRJ",
    },
    {
      to: "/c172",
      content: "Cessna 172",
    },
    {
      to: "/208",
      content: "Cessna 208B",
    },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 border-b-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/home" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="FS Checklist Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FS Checklist
          </span>
        </Link>
        {/* Mobile menu button */}
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          onClick={toggleMobileMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* Aircraft dropdown menu */}
        <div
          className={`${
            isMobileOpen ? "" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavbarDropdown title="Aircraft" links={navbarDropdownItems} />
            </li>
            <li>
              <NavbarLink to="/about" content="About" />
            </li>
            <li>
              <NavbarSettings />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};