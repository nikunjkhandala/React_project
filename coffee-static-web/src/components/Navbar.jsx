import React from "react";
import { FaCoffee } from "react-icons/fa";
import "tailwindcss";
import { IoPerson } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className=" relative bg-cover bg-center shadow-xl border-4 border-dashed border-amber-500 rounded-xl overflow-hidden">
      < div className="bg-amber-700">
      <div className="flex justify-between bg-amber-700 mx-23 px-4 py-5">
        <div className="flex relative max-w-7xl">
          <FaCoffee />
          <a className="lobster text-white text-18px" href="">
            Cafe Royale
          </a>
        </div>

        <div className="text-white text-center">
          <a className="mr-7" href="">
            Home
          </a>
          <a className="mr-7" href="">
            Menu
          </a>
          <a className="mr-7" href="">
            About
          </a>
          <a className="mr-7" href="">
            Testimonial
          </a>
        </div>

        <div className="flex space-x-8 ">
          <button className="flex bg-amber-300 h-9 rounded-2xl p-2 text-white">
            <FaCoffee />
            Order Now
          </button>
          <button className="flex border-2 h-9 rounded-2xl p-2 border-amber-400 text-amber-300">
            <IoPerson />
            Login
          </button>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
