import { NavLink } from "react-router-dom";
import "../../App.css";
import React, { useState } from "react";


const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
   
    <nav className="bg-[#5A2047] border-[#5A2047] h-[120px] px-4 sm:px-24 lg:px-28  flex items-center justify-between  w-full z-20  ">
      
       <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#0A27BF] via-[#FF2626] to-[#C109d1] ">VueOPtix</span>
        </a>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute top-10 right-10  cursor-pointer md:hidden text-white "
        >
          <ion-icon name={open ? "close" : "menu"} ></ion-icon>
        </div>

        <ul
          className={`bg-[#5A2047] md:flex md:items-center md:gap-4 lg:gap-14 md:pb-0 pb-12 md:mt-3 absolute md:static  md:z-auto left-0 w-full  md:w-auto md:pl-0  NavLinks transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="my-6 md:my-0 ">
            <NavLink
              to="/"
              // className={({ isActive }) => (isActive ? "link active" : "link")}
              className="block pl-3  text-[#FFFDFD] text-sm font-medium  md:p-0"
            >
              Home
            </NavLink>
          </li>
          <li  className="mb-6 md:mb-0 ">
              <NavLink
                to="/about" className="block pl-3 text-[#FFFDFD] text-sm font-medium  md:p-0">About
              </NavLink>
            </li>
            <li className="mb-6 md:mb-0 ">
              <NavLink
                to="/contact" className="block pl-3 text-[#FFFDFD] text-sm font-medium  md:p-0">Contact us
              </NavLink>
            </li>
            <li className="mb-6 md:mb-0 ">
              <NavLink
                to="/consultation" className="block pl-3 text-[#FFFDFD] text-sm font-medium  md:p-0">Consultation
              </NavLink>
            </li>
        <div>

            <button data-collapse-toggle="navbar-cta" aria-controls="navbar-cta" aria-expanded="false" type="button" className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ml-3 md:ml-0 lg:py-2.5 text-center text-#FFFDFD mr-3 md:mr-0 bg-gradient-to-t from-[#FF2626] to-[#0A27BF]">Get started</button>
        </div>
        </ul>
        
    </nav>
  );
};


// const Navbar = () => {
//   return (
//     <nav className="bg-[#5A2047] border-[#5A2047] h-[120px] px-4 sm:px-24 lg:px-28 py-2.5 flex itewms-center ">
//       <div className="container flex flex-wrap items-center lg:gap-[85px] NavBar mx-auto">
//         <a href="/" className="flex items-center">
//           <span className="self-center text-xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#0A27BF] via-[#FF2626] to-[#C109d1] ">VueOPtix</span>
//         </a>
//         <div className="flex md:order-2">
//           <button data-collapse-toggle="navbar-cta" aria-controls="navbar-cta" aria-expanded="false" type="button" className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 md:py-1 lg:py-2.5 text-center text-#FFFDFD mr-3 md:mr-0 bg-gradient-to-t from-[#FF2626] to-[#0A27BF]">Get started</button>
//           <button data-collapse-toggle="#navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 " aria-controls="navbar-cta" aria-expanded="false">
//             <span className="sr-only">Open main menu</span>
//             <svg className="w-6 h-6" aria-hidden="true" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
//           </button>
//         </div> 
//         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
//           <ul className={`flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium`}>
//             <li>
//               <NavLink
//                 to="/" className="block py-2 pl-3 pr-4 text-[#FFFDFD] text-sm font-medium md:p-0 ">Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about" className="block py-2 pl-3 pr-4 text-[#FFFDFD] text-sm font-medium  md:p-0">About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contact" className="block py-2 pl-3 pr-4 text-[#FFFDFD] text-sm font-medium  md:p-0">Contact us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/consultation" className="block py-2 pl-3 pr-4 text-[#FFFDFD] text-sm font-medium  md:p-0">Consultation
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>

//   );
// };
export default Navbar;
