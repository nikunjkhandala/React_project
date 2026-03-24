import React from "react";
import myImage from "/Users/js/Placement/ReactJs_projects/e-commerce/src/assets/Admin_Assets/nav-logo.svg";
import cart_icon from "/Users/js/Placement/ReactJs_projects/e-commerce/src/assets/Frontend_Assets/cart_icon.png";
import Shop from "../pages/Shop";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between mx-27">
        <div>
          <img src={myImage} alt="" />
        </div>
        <div>
          <ul className="flex gap-10 items-center py-4">
            <li>
              <NavLink to="/">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/men">Men</NavLink>
            </li>
            <li>
              Women <NavLink to="/women">Women</NavLink>
            </li>
            <li>
              <NavLink to="/kids">kids</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-7 py-4">
          <button className="border-1 border-solid rounded-full py-2 px-7">
            Login
          </button>
          <img src={cart_icon} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
