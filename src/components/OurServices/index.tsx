import React from "react";
import Icone1 from "../../assets/icons/icon1.png";
import Icone2 from "../../assets/icons/icon2.png";
import Icone3 from "../../assets/icons/icon3.png";
import Icone4 from "../../assets/icons/icon4.png";

const OurServices = () => {
  return (
    <section className="w-full h-full  flex flex-col items-center justify-center ">
      <div className="w-full h-[15vh] bg-gradient-to-b from-[#FDEAF5] to-[#fdeaf5ba]"></div>
      <div className="w-full flex items-center justify-center">
        <div>
          <div className="flex items-center mb-5">
            <hr className="border border-t-[#D9D9D9] lg:w-[6rem] w-[2rem] lg:mr-10 mr-3" />
            <h2 className="font-sfbold font-bold lg:text-[3rem] text-[1.2rem]">
              Our services
            </h2>
            <hr className="border border-t-[#D9D9D9] lg:w-[6rem] w-[2rem] lg:ml-10 ml-3" />
          </div>
        </div>
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
            From visionary designs to innovative solutions, we bring your brand
            to life with creativity, strategy, and passion.
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
            targeted campaigns and engaging content to reach the right audience.
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
            We craft functional and visually striking solutions that align with
            your brand, enhancing user experience and market appeal.
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
            Using cutting-edge technology, we create scalable software solutions
            tailored to your needs, ensuring timely delivery and seamless
            integration.
          </p>
          <button className="text-sm hover:text-red text-start">
            Learn more
          </button>
        </div>
      </div>
      <div className="w-full h-[15vh] bg-gradient-to-b from-[#FDEAF5] to-[#fdeaf5ba]"></div>
    </section>
  );
};

export default OurServices;
