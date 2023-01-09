import { NavLink } from "react-router-dom";
import "../../App.css";


const Navbar = () => {
  return (
    <nav className="bg-[#5A2047] border-[#5A2047] h-[120px] px-4 sm:px-24 lg:px-28 py-2.5 flex itewms-center ">
      <div className="container flex flex-wrap items-center lg:gap-[85px] NavBar mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#0A27BF] via-[#FF2626] to-[#C109d1] ">VueOPtix</span>
        </a>
        <div className="flex md:order-2">
          <button data-collapse-toggle="navbar-cta" aria-controls="navbar-cta" aria-expanded="false" type="button" className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 md:py-1 lg:py-2.5 text-center text-#FFFDFD mr-3 md:mr-0 bg-gradient-to-t from-[#FF2626] to-[#0A27BF]">Get started</button>
          <button data-collapse-toggle="#navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 " aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className={`flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium`}>
            <li>
              <NavLink
                to="/" className="block py-2 pl-3 pr-4 text-[#FFFDFD] text-sm font-medium md:p-0 ">Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about" className="block py-2 pl-3 pr-4 text-[#FFFDFD] text-sm font-medium  md:p-0">About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact" className="block py-2 pl-3 pr-4 text-[#FFFDFD] text-sm font-medium  md:p-0">Contact us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/consultation" className="block py-2 pl-3 pr-4 text-[#FFFDFD] text-sm font-medium  md:p-0">Consultation
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};
export default Navbar;
