import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const [isBar, setIsBar] = useState(false);
  return (
    <div className="flex justify-between items-center sticky top-0 left-0 right-0 py-5 xl:px-16 lg:px-10 px-5 w-full bg-white z-[10000]">
      <div className=" flex items-center gap-2">
        <div
          className="sm:hidden flex flex-col gap-1"
          onClick={() => setIsBar(!isBar)}
        >
          <span className="w-7 h-1 bg-black"></span>
          <span className="w-7 h-1 bg-black"></span>
          <span className="w-7 h-1 bg-black"></span>
        </div>
        <h4 className="font-sfregular font-bold text-[1rem] cursor-pointer">
          <a href="/">iCreations Ghana</a>
        </h4>
      </div>
      <div className="sm:relative w-full sm:w-auto text-center sm:text-right pt-10 sm:pt-0 top-[-20rem] sm:top-0 sm:right-0 absolute bg-[#EEF0F9] sm:bg-white flex flex-col sm:flex-row gap-4 right-0 h-[20rem] sm:h-auto rounded-br-2xl rounded-bl-2xl">
        <Link
          to="/"
          className="font-sfregular cursor-pointer my-2 sm:my-0 text-[1.5rem] sm:text-[0.938rem]"
        >
          Our work
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
          to="/project/#contact-us"
          className="font-sfregular cursor-pointer my-2 sm:my-0 text-[1.5rem] sm:text-[0.938rem]"
        >
          Contact Us
        </Link>
      </div>
      <button className="text-sm h-[40px] px-3 bg-[#FF0000] text-[#fff] rounded-md flex items-center gap-2">
        Start my project{" "}
        <span className="w-5 h-5 rounded-full flex items-center justify-center bg-white">
          <MdKeyboardArrowRight className="text-[#000]" />
        </span>
      </button>
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
              Our work
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
