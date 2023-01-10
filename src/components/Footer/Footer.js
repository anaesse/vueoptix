import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="px-4 sm:px-24 lg:px-28 py-12 mt-32  bg-[#5A2047]">
            <div className="lg:flex gap-24 lg:gap-32">
                <div className="mb-6 md:mb-2">
                    <div>
                        <a href="/">
                            <span className="self-center text-base font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#0A27BF] via-[#FF2626] to-[#C109d1] ">VueOPtix</span>
                        </a>
                        <ul className="text-white">
                            <li className="flex items-center pt-2 gap-1">
                                <IoCallOutline className="text-[#0447b9]" />
                                <a href="/" className="hover:underline text-[12px]"> +23470 5387 5718</a>
                            </li>
                            <li className="flex items-center py-2 gap-1">
                                <IoMailOutline className="text-[#0447b9]" />
                                <a href="/" className="hover:underline text-[12px]">vueoptix@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-2 gap-8 md:gap-16 md:grid-cols-3">
                    <div>
                        {/* <h2 className="mb-6 text-sm font-semibold text-[#0447b9] ">Product</h2> */}
                        <ul className="text-white pt-5">
                            <li>
                                <a href="/" className="hover:underline text-[12px]">Home services</a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline text-[12px] pt-2">Mailing list</a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline text-[12px] py-2">Contact us</a>
                            </li>

                        </ul>
                    </div>
                    <div>
                        {/* <h2 className="mb-6 text-sm font-semibold text-[#0447b9] ">Company</h2> */}
                        <ul className="text-white pt-5">
                            <li>
                                <a href="/" className="hover:underline text-[12px]">Virtual consultation</a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline pt-2 text-[12px] ">Blue block  lenses</a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline py-2 text-[12px] ">Standard photochronic lenses</a>
                            </li>

                        </ul>
                    </div>

                    <div>
                        {/* <h2 className="mb-6 text-sm font-semibold text-[#0447b9] ">Contacts us</h2> */}
                        <ul className="text-white pt-5">
                            <li className="flex items-center gap-1">
                                <a href="/" className="hover:underline text-[12px]">Polarized lenses</a>
                            </li>
                            <li className="flex items-center pt-2 gap-1">
                                <a href="/" className="hover:underline text-[12px]"> Sunglasses</a>
                            </li>
                            <li className="flex items-center py-2  gap-1">
                                <a href="/" className="hover:underline text-[12px]">Physical consultation</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;





