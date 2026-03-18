import React from 'react'
import myImage from "/Users/js/Full-Stack/ReactJs_projects/nike-page/src/assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between py-4 px-2">
        <div>
          <img
            className="absolute ml-18 h-11 w-19 "
            src={myImage}
            alt="logo"
          />
        </div>
        <div className="text-neutral-800 font-bold">
          <ul className="flex gap-6">
            <li className="" href="">
              MENU
            </li>
            <li href="">LOCATION</li>
            <li href="">ABOUT</li>
            <li href="">CONTACT</li>
          </ul>
        </div>
        <div className="mr-18">
          <button className="bg-[#D01C28] py-1.5 px-4 rounded text-white ">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar