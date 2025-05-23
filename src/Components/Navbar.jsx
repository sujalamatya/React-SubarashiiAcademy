import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/LogoMain.jpg";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(!(currentScrollY > lastScrollY && currentScrollY > 100));
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full z-50 transition-all duration-300 ease-in-out">
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={`bg-white backdrop-blur-sm bg-opacity-80 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" aria-label="Homepage">
                <img
                  src={Logo}
                  alt="Subarashii Academy Logo"
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Hamburger for Mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-black focus:outline-none"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>

            {/* Navigation Links */}
            <ul
              className={`md:flex items-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static bg-white md:bg-transparent w-full md:w-auto top-16 left-0 md:top-0 text-center md:text-left transition-all duration-300 ease-in-out ${
                isMenuOpen ? "block p-4 shadow-md" : "hidden md:flex"
              }`}
            >
              <li>
                <NavLink
                  to="/"
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/location"
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Location
                </NavLink>
              </li>
              {/* <li>
                <button
                  aria-label="Search"
                  className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
                >
                  <FaSearch />
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
