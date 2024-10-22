import React from "react";
import Ser1 from "../assets/images/ser-1.png";
import Ser2 from "../assets/images/ser-2.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import OurServices from "../components/OurServices";
import Icone1 from "../assets/icons/icon1.png";
import Icone2 from "../assets/icons/icon2.png";
import Icone3 from "../assets/icons/icon3.png";
import Icone4 from "../assets/icons/icon4.png";

const brand_strategy = [
  {
    image: Ser1,
    header: "Market Analysis:",
    p: "Gain insights into your target audience and competitors.",
  },
  {
    image: Ser1,
    header: "Positioning:",
    p: " Define your unique value proposition.",
  },
  {
    image: Ser1,
    header: "Growth Planning:",
    p: " Develop strategies for sustainable growth.",
  },
  {
    image: Ser1,
    header: "Brand Architecture:",
    p: " Organize your brand portfolio for clarity.",
  },
  {
    image: Ser1,
    header: "Brand Strategy:",
    p: "We craft compelling brand strategies that resonate with your target audience, setting you apart in the market.",
  },
  {
    image: Ser1,
    header: "Performance Metrics:",
    p: " Track and measure your brand’s success.",
  },
];
const Services = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full md:h-[15vh] h-[5vh] bg-gradient-to-b from-[#FDEAF5] to-[#fdeaf5ba]"></div>
      <div className="w-full md:h-[40vh] h-[20vh] md:mb-[80px] mb-[20px] relative">
        <div className=" absolute bottom-[40px] md:left-[40px] z-20 left-2">
          <h1 className="text-lg md:text-5xl font-sfregular font-bold">
            Empowering Businesses with
          </h1>
          <h1 className="text-lg md:text-4xl font-sfregular font-bold">
            Exceptional Branding Solutions
          </h1>
          <p className="text-sm text-[#667299]">
            We specialize in creating high-impact digital solutions that drive
            results for leading brands
          </p>
        </div>
      </div>
      <div className="w-full md:my-5 my-2 border border-1 md:p-7 p-3 shadow container mx-auto">
        <div className="w-full h-full block md:flex gap-5">
          <div className="w-full h-[365px] object-cover rounded-lg">
            <img
              src={Ser1}
              alt="image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-full bg-[#F8F8F8] rounded-xl p-3 md:p-7">
            <h1 className="text-lg font-sfmedium font-semibold">
              Unlock Your Brand's Potential with
            </h1>
            <h1 className="text-xl font-extrabold">Brand Strategy</h1>
            <p className="text-sm text-[#7A7474]">
              Our brand strategy service helps you define and position your
              brand in the market, ensuring long-term growth and success.
            </p>
            <div className="mt-3 flex flex-col gap-3">
              {brand_strategy.map((item, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <div className="w-4 h-4 rounded-full border-2 border-[#000]"></div>
                  <h1 className=" text-base text-[#7A7474]">
                    <span className="text-[#000] font-bold">{item.header}</span>{" "}
                    {item.p}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-auto my-10 grid md:grid-cols-3 grid-cols-1 gap-4">
          <div className="w-full h-full shadow-lg rounded-lg">
            <div className="w-full h-[246px] object-cover rounded-t-lg">
              <img
                src={Ser2}
                alt="image"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-10">
              <h1 className="text-sm">Make lasting impression with</h1>
              <h1 className="text-lg font-bold">Visual Identity</h1>
              <p className="text-sm text-[#7A7474] flex items-center gap-2">
                Learn more{" "}
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </p>
            </div>
          </div>
          <div className="w-full h-full shadow-lg rounded-lg">
            <div className="w-full h-[246px] object-cover rounded-t-lg">
              <img
                src={Ser2}
                alt="image"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-10">
              <h1 className="text-sm">Make lasting impression with</h1>
              <h1 className="text-lg font-bold">Visual Identity</h1>
              <p className="text-sm text-[#7A7474] flex items-center gap-2">
                Learn more{" "}
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </p>
            </div>
          </div>
          <div className="w-full h-full shadow-lg rounded-lg">
            <div className="w-full h-[246px] object-cover rounded-t-lg">
              <img
                src={Ser2}
                alt="image"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-10">
              <h1 className="text-sm">Make lasting impression with</h1>
              <h1 className="text-lg font-bold">Visual Identity</h1>
              <p className="text-sm text-[#7A7474] flex items-center gap-2">
                Learn more{" "}
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:h-[15vh] h-[5vh] bg-gradient-to-b from-[#FDEAF5] to-[#fdeaf5ba]"></div>
      <div className="container mx-auto my-10 bg-[#FAFAFA] p-3 rounded-lg">
        <div className="w-full my-5 ">
          <h1 className="text-3xl mb-1">More services</h1>
          <p className="text-sm text-[#667299]">
            We specialize in creating high-impact digital solutions that drive
            results for leading brands
          </p>
        </div>
        <div className="w-full container mx-auto grid md:grid-cols-4 grid-cols-1 my-10 gap-4">
          <div className="w-full h-[250px] rounded-lg shadow p-5 flex flex-col justify-between">
            <div className="w-[40px] h-[40px] object-cover rounded-full p-2 bg-black">
              <img
                src={Icone4}
                alt="icon"
                className="w-full h-full"
                width={1000}
                height={1000}
              />
            </div>
            <h1 className="text-lg ">Branding</h1>
            <p className="text-xs text-[#313131]">
              From visionary designs to innovative solutions, we bring your
              brand to life with creativity, strategy, and passion.
            </p>
            <button className="text-sm hover:text-red text-start">
              Learn more
            </button>
          </div>
          <div className="w-full h-[250px] rounded-lg shadow p-5 flex flex-col justify-between">
            <div className="w-[40px] h-[40px] object-cover p-2 rounded-full bg-black">
              <img
                src={Icone3}
                alt="icon"
                className="w-full h-full"
                width={1000}
                height={1000}
              />
            </div>
            <h1 className="text-lg ">Marketing</h1>
            <p className="text-xs text-[#313131]">
              From digital marketing to social media, we amplify your brand with
              targeted campaigns and engaging content to reach the right
              audience.
            </p>
            <button className="text-sm hover:text-red text-start">
              Learn more
            </button>
          </div>
          <div className="w-full h-[250px] rounded-lg shadow p-5 flex flex-col justify-between">
            <div className="w-[40px] h-[40px] object-cover p-2 rounded-full bg-black">
              <img
                src={Icone2}
                alt="icon"
                className="w-full h-full"
                width={1000}
                height={1000}
              />
            </div>
            <h1 className="text-lg ">Product design</h1>
            <p className="text-xs text-[#313131]">
              We craft functional and visually striking solutions that align
              with your brand, enhancing user experience and market appeal.
            </p>
            <button className="text-sm hover:text-red text-start">
              Learn more
            </button>
          </div>
          <div className="w-full h-[250px] rounded-lg shadow p-5 flex flex-col justify-between">
            <div className="w-[40px] h-[40px] object-cover p-2 rounded-full bg-black">
              <img
                src={Icone1}
                alt="icon"
                className="w-full h-full"
                width={1000}
                height={1000}
              />
            </div>
            <h1 className="text-lg ">Development</h1>
            <p className="text-xs text-[#313131]">
              Using cutting-edge technology, we create scalable software
              solutions tailored to your needs, ensuring timely delivery and
              seamless integration.
            </p>
            <button className="text-sm hover:text-red text-start">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
