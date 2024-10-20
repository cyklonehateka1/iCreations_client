import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 xl:px-16 lg:px-10 px-5 w-full bg-white">
      <div className="">
        <h4 className="font-sfregular font-bold text-[1rem]">
          iCreations Ghana
        </h4>
      </div>
      <div className="sm:relative w-full sm:w-auto text-center sm:text-right pt-10 sm:pt-0 top-[-20rem] sm:top-0 sm:right-0 absolute bg-[#EEF0F9] sm:bg-white flex flex-col sm:flex-row right-0 h-[20rem] sm:h-auto rounded-br-2xl rounded-bl-2xl">
        <Link
          to="/"
          className="px-7 font-sfregular cursor-pointer my-2 sm:my-0 text-[1.5rem] sm:text-[0.938rem]"
        >
          Our work
        </Link>
        <Link
          to="/"
          className="px-7 font-sfregular cursor-pointer my-2 sm:my-0 text-[1.5rem] sm:text-[0.938rem]"
        >
          Services
        </Link>
        <Link
          to="/project"
          className="px-7 font-sfregular cursor-pointer my-2 sm:my-0 text-[1.5rem] sm:text-[0.938rem]"
        >
          Project
        </Link>
        <Link
          to="/"
          className="px-7 font-sfregular cursor-pointer my-2 sm:my-0 text-[1.5rem] sm:text-[0.938rem]"
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
    </div>
  );
};

export default Navbar;
