import React from "react";
import { Router } from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav className="nav">
          <div>Website</div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Router>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About/>}>
        </Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/contact" element={<contact />} ><Route>
      </Router>
    </Router>
  );
};

export default Navbar;
