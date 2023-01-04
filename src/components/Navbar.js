import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    
<nav class="bg-[#5A2047] border-[#5A2047] h-[120px] px-4 sm:px-24 lg:px-28 py-2.5 flex itewms-center ">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="/" class="flex items-center">

      <span class="self-center text-xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#0A27BF] via-[#FF2626] to-[#C109d1] ">VueOPtix</span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-#FFFDFD mr-3 md:mr-0 bg-gradient-to-t from-[#FF2626] to-[#0A27BF]">Get started</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 " aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
            <NavLink
              to="/" class="block py-2 pl-3 pr-4 text-[#FFFDFD] text-sm font-medium md:p-0 " className={({ isActive }) => (isActive ? "link active" : "link")}>Home
            </NavLink>
      </li>
      <li>
            <NavLink
              to="/about" class="block py-2 pl-3 pr-4 text-[#FFFDFD] text-sm font-medium  md:p-0" className={({ isActive }) => (isActive ? "link active" : "link")}>About
            </NavLink>
      </li>
      <li>
            <NavLink
              to="/contact" class="block py-2 pl-3 pr-4 text-[#FFFDFD] text-sm font-medium  md:p-0" className={({ isActive }) => (isActive ? "link active" : "link")}>Contact us
            </NavLink>
      </li>
      <li>
            <NavLink
              to="/consultation" class="block py-2 pl-3 pr-4 text-[#FFFDFD] text-sm font-medium  md:p-0"  className={({ isActive }) => (isActive ? "link active" : "link")}>Consultation
            </NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

  );
};
export default Navbar;
