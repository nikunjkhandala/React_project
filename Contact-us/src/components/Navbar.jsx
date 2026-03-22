import React from 'react'
import myImage from "/Users/js/Full-Stack/ReactJs_projects/Contact-us/src/assets/logo.png";
const Navbar = () => {
  return (
    <div>
      <nav className=" h-[72px] w-[1440px]">
        <img className="h-[72px] w-[72px] mt-[4px] ml-[91px]" src={myImage} alt="logo" />
      </nav>
    </div>
  );
}

export default Navbar