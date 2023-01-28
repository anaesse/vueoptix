import { NavLink } from "react-router-dom";
import "../../App.css";
import React, { useState } from "react";
import Logo from "../../logo.svg";


const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
   
    <nav className="bg-[#F0EFEF] border-[#5A2047] h-[120px] px-4 sm:pr-24   lg:px-28  flex items-center justify-between  w-full z-20  ">
      
       <a href="/" className="flex items-center w-[20vh] h-[15vh] md:w-[25vh] md:h-[20vh]">
         <img src= {Logo}  alt="Logo" className="" style={{ width: '100%', height: "100%", objectFit: "cover" }} />
          {/* <span className="self-center text-xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#0A27BF] via-[#FF2626] to-[#C109d1] ">VueOPtix</span> */}
        </a>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute top-10 right-10  cursor-pointer md:hidden text-[#5A2047] "
        >
          <ion-icon name={open ? "close" : "menu"} ></ion-icon>
        </div>

        <ul
          className={`bg-[#F0EFEF] md:flex md:items-center md:gap-4 lg:gap-14 md:pb-0 md:pt-0 pt-12 pb-24 md:mt-3 absolute md:static  md:z-auto left-0 w-full  md:w-auto md:pl-0  NavLinks transition-all duration-500 ease-in ${
            open ? "top-24 " : "top-[-490px]"
          }`}
        >
          <li className="my-6 md:my-0 ">
            <NavLink
              to="/"
              // className={({ isActive }) => (isActive ? "link active" : "link")}
              className="block pl-14  text-[#5A2047] text-sm font-medium  md:p-0"
            >
              Home
            </NavLink>
          </li>
          <li  className="mb-6 md:mb-0 ">
              <NavLink
                to="/about" className="block pl-14 text-[#5A2047] text-sm font-medium  md:p-0">About
              </NavLink>
            </li>
            <li className="mb-6 md:mb-0 ">
              <NavLink
                to="/contact" className="block pl-14 text-[#5A2047] text-sm font-medium  md:p-0">Contact us
              </NavLink>
            </li>
            <li className="mb-6 md:mb-0 ">
              <NavLink
                to="/consultation" className="block pl-14 text-[#5A2047] text-sm font-medium  md:p-0">Consultation
              </NavLink>
            </li>
        <div>

            <button data-collapse-toggle="navbar-cta" aria-controls="navbar-cta" aria-expanded="false" type="button" className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ml-14 md:ml-0 lg:py-2.5 text-center text-#FFFDFD mr-3 md:mr-0 bg-gradient-to-t from-[#FF2626] to-[#0A27BF]">Get started</button>
        </div>
        </ul>
        
    </nav>
  );
};

export default Navbar;
