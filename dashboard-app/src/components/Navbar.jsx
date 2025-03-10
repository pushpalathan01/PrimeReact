import React, { useState, useEffect, useRef } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = ({ toggleSidebar }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 text-gray-800 dark:text-white px-6 py-4 flex items-center shadow-md w-full">
      {/* Left: Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-md  focus:outline-none"
        aria-label="Toggle Sidebar"
      >
        <BsFillArrowLeftSquareFill size={24} />
      </button>

      {/* Center: Welcome Message */}
      <h1 className="text-xl font-semibold flex-1 text-center">Welcome to Collegemate</h1>

      {/* Right: User Menu & ThemeSwitcher */}
      <div className="flex items-center space-x-4">
        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className="h-10 w-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold focus:outline-none"
            aria-label="User Menu"
          >
            U
          </button>

          {dropdownVisible && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg w-48 z-50 text-left">
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">View Profile</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Help Center</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Theme Switcher */}
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Navbar;
