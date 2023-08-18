import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleSwitch } from "flowbite-react";
import { AppContext } from "../ContextProvider";

interface NavbarLinkProps {
  to: string;
  content: string;
}

export const NavbarLink = ({ to, content }: NavbarLinkProps) => {
  return (
    <Link
      to={to}
      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    >
      {content}
    </Link>
  );
};

// // //
// Dropdown menu
// // //

interface NavbarDropdownProps {
  title: string;
  links: NavbarLinkProps[];
}

export const NavbarDropdown = ({ title, links }: NavbarDropdownProps) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  };
  return (
    <>
      <button
        id="aircraftDropdownButton"
        onClick={toggleDropdown}
        data-dropdown-toggle="aircraftDropdown"
        className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      >
        {title}{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id="aircraftDropdown"
        className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute ${
          isDropdownMenuOpen ? "" : "hidden"
        }`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-400"
          aria-labelledby="aircraftDropdownButton"
        >
          {links.map((link) => (
            <li className="p-2">
              <NavbarLink to={link.to} content={link.content} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// // //
// Settings menu
// // //
export const NavbarSettings = () => {
  const { allExpanded, setAllExpanded, darkMode, setDarkMode } =
    useContext(AppContext)!;
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const allExpandedFromLocalStorage = localStorage.getItem("allExpanded");
  const darkModeFromLocalStorage = localStorage.getItem("darkMode");

  useEffect(() => {
    if (allExpandedFromLocalStorage) {
      setAllExpanded(allExpandedFromLocalStorage === "true");
    }
  }, []);

  useEffect(() => {
    if (darkModeFromLocalStorage) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const toggleSettingsDropdown = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleAllExpanded = (isChecked: boolean) => {
    setAllExpanded(isChecked);
    localStorage.setItem("allExpanded", isChecked.toString());
  };

  const handleDarkMode = (isChecked: boolean) => {
    setDarkMode(isChecked);
    localStorage.setItem("darkMode", isChecked.toString());
    if (isChecked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <button
        id="settingsDropdownButton"
        onClick={toggleSettingsDropdown}
        data-dropdown-toggle="settingsDropdown"
        className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="my-auto w-6 h-6 stroke-black dark:stroke-gray-100"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </button>
      {/* Settings dropdown menu */}
      <div
        id="settingsDropdown"
        className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow min-w-[16rem]  dark:bg-gray-700 dark:divide-gray-600 absolute -translate-x-36 ${
          isSettingsOpen ? "" : "hidden"
        }`}
      >
        <ul
          className="p-2 text-sm text-gray-700 dark:text-gray-400"
          aria-labelledby="aircraftDropdownButton"
        >
          <li className="py-2">
            <ToggleSwitch
              label="Expand all by default"
              onChange={(e) => handleAllExpanded(e)}
              checked={allExpanded}
            />
          </li>
          <li className="py-2">
            <ToggleSwitch
              label="Dark mode"
              onChange={(e) => handleDarkMode(e)}
              checked={darkMode}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
