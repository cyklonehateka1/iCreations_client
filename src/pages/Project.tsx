import React from "react";
import Works from "../components/home-components/Works";
import obroni from "../assets/images/obroni.jpg";
import nirvana1 from "../assets/images/case1.png";
import nirvana2 from "../assets/images/case2.png";
import nkrodo from "../assets/images/nkrodo.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const data = [
  {
    image: nirvana1,
    header: "Gorgeous Glow Branding",
    p: "Gorgeous Glow Branding",
  },
  {
    image: nirvana1,
    header: "Gorgeous Glow Branding",
    p: "Gorgeous Glow Branding",
  },
  {
    image: nirvana1,
    header: "Gorgeous Glow Branding",
    p: "Gorgeous Glow Branding",
  },
  {
    image: nirvana1,
    header: "Gorgeous Glow Branding",
    p: "Gorgeous Glow Branding",
  },
];
const Project = () => {
  return (
    <div className="w-full h-full container mx-auto">
      <div className="w-full md:h-[15vh] h-[5vh] bg-gradient-to-b from-[#FDEAF5] to-[#fdeaf5ba]"></div>
      <div className="w-full md:h-[40vh] h-[20vh] relative">
        <div className=" absolute bottom-[40px] md:left-[40px] left-2">
          <h1 className="text-lg md:text-5xl font-sfregular font-bold">
            Transformation Projects
          </h1>
          <h1 className="text-lg md:text-5xl font-sfregular font-bold">
            The Drive Results
          </h1>
          <p className="text-sm text-[#667299]">
            Explore our diverse case studies to see the impact we’ve made across
            industries with the iCreations Approach
          </p>
        </div>
      </div>
      <div className="w-full md:my-5 my-2 border border-1 md:p-7 p-3 shadow">
        <div className="w-full container grid md:grid-cols-2 grid-cols-1 gap-10">
          {data?.map((item, index) => (
            <div key={index} className="w-full h-auto">
              <div
                id="image_holder"
                className="w-full md:h-[438px] h-[300px] object-cover rounded-lg relative overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="image"
                  width={1000}
                  height={1000}
                  id="image_zoon"
                  className="w-full h-full rounded-lg hover:scale-125"
                />
                <div
                  id="hove_box"
                  className="w-full  items-center justify-center absolute hidden transition-all ease-out top-0 left-0 bottom-0 right-0 bg-[#00000051]"
                >
                  <div className="w-fit px-3 py-2 border border-[#fff] rounded-md flex items-center justify-center">
                    <h1 className="text-sm cursor-pointer text-[#fff]">
                      View case study
                    </h1>
                    <div className="w-[20px] h-[20px] ml-2 rounded-full border border-1 flex items-center justify-center">
                      <MdOutlineKeyboardArrowRight className="text-sm text-[#fff]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-2">
                <h1 className=" text-2xl">{item?.header}</h1>
                <p className="text-sm">{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Works />
    </div>
  );
};

export default Project;
