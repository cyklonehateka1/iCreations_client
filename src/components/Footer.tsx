import { Link } from "react-router-dom";
import facebook_icon from "../assets/icons/facebook.svg";
import linkedin_icon from "../assets/icons/linkedin.svg";
import twitter_icon from "../assets/icons/twitter.svg";
const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-white w-full lg:px-24 px-5 lg:py-20 py-10 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row w-full justify-between lg:pl-16 rounded-lg border border-[#E3DFDF]">
          <div className="flex flex-col lg:w-[40%] w-full lg:my-20 my-8 px-5">
            <h3 className="font-montserrat font-bold lg:text-[2.9rem] text-[2.3rem] mb-2">
              Get in Touch
            </h3>
            <p className="font-sfregular text-[0.8rem]">
              Leave us your details and we will give you a call soon
            </p>
            <form action="" className="flex flex-col w-full mb-5 lg:mb-0">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="border border-[#E0E0E0] h-12 px-3 my-3 rounded-lg outline-none placeholder:font-montserrat text-[0.8rem]"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="border border-[#E0E0E0] h-12 px-3 my-3 rounded-lg outline-none placeholder:font-montserrat text-[0.8rem]"
              />
              <input
                type="text"
                placeholder="Phone number *"
                name="phone"
                className="border border-[#E0E0E0] h-12 px-3 my-3 rounded-lg outline-none placeholder:font-montserrat text-[0.8rem]"
              />
              <input
                type="drop-down"
                className="border border-[#E0E0E0] h-12 px-3 my-3 rounded-lg outline-none"
              ></input>
              <button className="w-full py-4 font-sfregular text-[0.8rem] text-white rounded-lg bg-black">
                Send
              </button>
            </form>
          </div>
          <div className="relative flex lg:w-[40%] w-full justify-between">
            <div className=""></div>
            <div className="bg-[#EDEDED] w-[40%] rounded-tr-lg rounded-br-lg"></div>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between lg:pt-20 pt-8 lg:px-7 px-2">
          <div className="mb-10 flex justify-center md:justify-start">
            <div className="">
              <div className="flex lg:my-6 my-2 items-center">
                <p className="font-inter font-semibold text-[0.8rem] w-[5rem] uppercase">
                  Address:
                </p>
                <span className="text-[#293E3D] font-inter text-[0.8rem]">
                  Obeyeyie, Ga - West
                </span>
              </div>
              <div className="flex lg:my-6 my-2 items-center">
                <p className="font-inter font-semibold text-[0.8rem] w-[5rem] uppercase">
                  Phone:
                </p>
                <span className="text-[#293E3D] font-inter text-[0.8rem]">
                  +233 555155972 / 0593667545
                </span>
              </div>
              <div className="flex lg:my-6 my-2 items-center">
                <p className="font-inter font-semibold text-[0.8rem] w-[5rem] uppercase">
                  Email:
                </p>
                <span className="font-inter text-[0.8rem]">
                  info@icreationsghana.com
                </span>
              </div>
              <p className="font-inter font-semibold text-[0.8rem]">
                iCREATIONS GHANA LOGO
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <p className="font-inter font-semibold text-[0.8rem] uppercase mb-3">
              Newsletter:
            </p>
            <div className="flex items-center mb-6 flex-col md:flex-row w-full">
              <input
                type="email"
                placeholder="Your email here"
                className="px-2 mr-2 border outline-none border-[#E0E0E0] h-12 lg:h-10 lg:w-60 md:w-48 w-full mb-3 md:mb-0 rounded-lg"
              />
              <button className="lg:px-7 px-5 lg:h-10 h-14 w-full md:w-auto bg-black text-white font-sfregular text-[0.8rem] rounded-md">
                Subscribe
              </button>
            </div>
            <p className="font-inter font-semibold text-[0.8rem] uppercase mb-3">
              Social:
            </p>
            <div className="flex gap-5">
              <Link to="/">
                <img src={facebook_icon} alt="" />
              </Link>
              <Link to="/">
                <img src={linkedin_icon} alt="" />
              </Link>
              <Link to="/">
                <img src={twitter_icon} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black lg:px-28 px-5 lg:py-6 py-3 text-white w-full flex justify-center md:justify-start">
        <p className="font-montserrat text-[0.8rem]">
          iCreations Ghana© 2024 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
