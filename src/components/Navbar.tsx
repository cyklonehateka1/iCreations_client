import { useState } from "react";
import { Link } from "react-router-dom";
import Bars from "../assets/images/bars.png";

const Navbar = () => {
  const [isBar, setIsBar] = useState(false);
  return (
    <div className="flex justify-between items-center sticky top-0 left-0 right-0 py-5 xl:px-16 lg:px-10 px-5 w-full bg-white z-[10000]">
      <div className="md:w-auto w-full flex items-center justify-between gap-2">
        <h4 className="font-sfregular font-bold text-[1rem] cursor-pointer">
          <a href="/" className="text-lg font-sfbold font-bold">
            Empathy labs
          </a>
        </h4>
        <div className="sm:hidden " onClick={() => setIsBar(!isBar)}>
          <img
            src={Bars}
            alt="bars"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <Link
          to="/"
          className="font-sfregular cursor-pointer my-2 sm:my-0 text-[1.5rem] sm:text-[0.938rem]"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="font-sfregular cursor-pointer my-2 sm:my-0 text-[1.5rem] sm:text-[0.938rem]"
        >
          Services
        </Link>
        <Link
          to="/project"
          className="font-sfregular cursor-pointer my-2 sm:my-0 text-[1.5rem] sm:text-[0.938rem]"
        >
          Project
        </Link>
        <Link
          to="/project#contact-us"
          className="font-sfregular cursor-pointer my-2 sm:my-0 text-[1.5rem] sm:text-[0.938rem]"
        >
          Contact Us
        </Link>
      </div>

      {isBar && (
        <div className="w-full h-auto  fixed top-0 left-0 bg-white shadow-sm z-[10000] p-3">
          <div className="flex items-center justify-between">
            <h4 className="font-sfregular font-bold text-lg">
              iCreations Ghana
            </h4>
            <div className="w-[35px] h-[35px] rounded-full border-2 flex items-center justify-center">
              <h1 className="text-lg" onClick={() => setIsBar(!isBar)}>
                x
              </h1>
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center mt-5">
            <Link
              onClick={() => setIsBar(!isBar)}
              to="/"
              className="px-7 font-sfregular cursor-pointer my-2 sm:my-0 text-lg sm:text-[0.938rem]"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsBar(!isBar)}
              to="/services"
              className="px-7 font-sfregular cursor-pointer my-2 sm:my-0 text-lg sm:text-[0.938rem]"
            >
              Services
            </Link>
            <Link
              onClick={() => setIsBar(!isBar)}
              to="/project"
              className="px-7 font-sfregular cursor-pointer my-2 sm:my-0 text-lg sm:text-[0.938rem]"
            >
              Project
            </Link>
            <Link
              onClick={() => setIsBar(!isBar)}
              to="/product/#contact-us"
              className="px-7 font-sfregular cursor-pointer my-2 sm:my-0 text-lg sm:text-[0.938rem]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
