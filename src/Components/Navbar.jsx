import Logo from "../assets/LogoMain.jpg";
import React from "react";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
export default function Navbar(props) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [topNavbar, setTopNavbar] = useState(true);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 100) {
      setTopNavbar(true);
    } else {
      setTopNavbar(false);
    }
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div>
      <nav
        className={`font-sans text-white hover:text-white-300 fixed w-full top-0 z-50 p-1 px-8 bg-transparent overflow-auto border-b border-solid border-gray-300 transition-all duration-200 ease-in-out ${
          showNavbar
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <ul className="flex justify-around items-center list-none mt-4 p-0 font-medium">
          {/* Logo Item */}
          <li className="mt-0">
            <img
              src={Logo}
              alt="logo"
              className="h-14 w-35" // Adjust the height as needed
            />
          </li>

          {/* Navigation Items */}
          <li className=" py-2 cursor-pointer relative group">
            <span className="relative ">
              <Link to="/">Home</Link>
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className=" py-2 cursor-pointer relative group">
            <NavLink to="/about" className="relative ">
              About Us
            </NavLink>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className=" py-2 cursor-pointer relative group">
            <span className="relative ">Services</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className=" py-2 cursor-pointer relative group">
            <NavLink to="/location" className="relative ">
              Location
            </NavLink>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>

          {/* Search Icon */}
          <li>
            <i className="fa fa-fw fa-search cursor-pointer "></i>
          </li>
        </ul>
      </nav>
    </div>
  );
}
