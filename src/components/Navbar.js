import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    
<nav className="bg-[#5A2047] border-[#5A2047] h-[120px] px-4 sm:px-24 lg:px-28 py-2.5 flex itewms-center ">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="/" className="flex items-center">

      <span className="self-center text-xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#0A27BF] via-[#FF2626] to-[#C109d1] ">VueOPtix</span>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-#FFFDFD mr-3 md:mr-0 bg-gradient-to-t from-[#FF2626] to-[#0A27BF]">Get started</button>
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
            <NavLink
              to="/" className="block py-2 pl-3 pr-4 text-[#FFFDFD] md:p-0" aria-current="page">Home
            </NavLink>
      </li>
      <li>
            <NavLink
              to="/" className="block py-2 pl-3 pr-4 text-[#FFFDFD] md:p-0">About
            </NavLink>
      </li>
      <li>
            <NavLink
              to="/" className="block py-2 pl-3 pr-4 text-[#FFFDFD] md:p-0">Contact us
            </NavLink>
      </li>
      <li>
            <NavLink
              to="/" className="block py-2 pl-3 pr-4 text-[#FFFDFD] md:p-0">Consultation
            </NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

  );
};
export default Navbar;
