import { useEffect } from "react";
import obroni from "../../assets/images/case1.png";
import nirvana from "../../assets/images/case3.png";
import nkrodo from "../../assets/images/case2.png";
import case4 from "../../assets/images/case4.png";
import case5 from "../../assets/images/case5.png";
import Aos from "aos";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const project = [
  {
    image: [obroni],
    title: "Gorgeous Glow",
    label: "Branding",
    id: 23,
  },
  {
    image: [nkrodo],
    title: "Creedz",
    label: "Product design",
    id: 29,
  },
  {
    image: [nirvana],
    title: "Ark Clothing",
    label: "Branding",
    id: 29,
  },
  {
    image: [case4],
    title: "Ark Clothing",
    label: "Branding",
    id: 29,
  },
  {
    image: [case5],
    title: "Ark Clothing",
    label: "Branding ",
    id: 29,
  },
];
const Works = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center container mx-auto w-full"
    >
      <div className="text-center mb-3 flex flex-col items-center">
        <div className="flex items-center mb-1">
          <hr className="border border-t-[#D9D9D9] lg:w-[6rem] w-[2rem] lg:mr-10 mr-3" />
          <h2 className="font-sfbold font-bold lg:text-[3rem] text-[1.2rem]">
            Our Works
          </h2>
          <hr className="border border-t-[#D9D9D9] lg:w-[6rem] w-[2rem] lg:ml-10 ml-3" />
        </div>
        <p className="font-sfregular text-sm">
          Explore our latest projects and see what we can create together
        </p>
      </div>

      <div className="my-2 w-full md:w-5/6 h-full ">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {project?.map((item, index) => (
            <div key={index} className="w-full">
              <div
                id="image_holder"
                className="w-full md:h-[438px] h-[300px] object-cover rounded-lg relative overflow-hidden aspect-square hover:cursor-pointer"
              >
                <img
                  src={item.image[0]}
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
                <h1 className=" text-2xl">{item?.title}</h1>
                <p className="text-sm">{item.label}</p>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>

      {/* <div className="flex flex-col sm:flex-row sm:items-center w-full px-5 gap-6 justify-center ">
        <div
          data-aos="fade-up"
          className="sm:w-[43%] w-full lg:mx-4 mb-3 sm:mb-0"
        >
          <div
            className="w-full xl:h-[30rem] lg:h-[25rem] h-[20rem] bg-no-repeat bg-center bg-cover rounded-2xl mb-4"
            style={{ backgroundImage: `url(${obroni})` }}
          ></div>
          <div className="">
            <h4 className="font-sfmedium font-medium text-[1.5rem] leading-none">
              Obroni Cosmetics
            </h4>
            <p className="font-sfregular text-[0.8rem]">Print, Digital & Web</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="sm:w-[43%] w-full lg:mx-4 mb-3 sm:mb-0"
        >
          <div
            className="w-full xl:h-[30rem] lg:h-[25rem] h-[20rem] bg-no-repeat bg-center bg-cover rounded-2xl mb-4"
            style={{ backgroundImage: `url(${nkrodo})` }}
          ></div>
          <div className="">
            <h4 className="font-sfmedium font-medium text-[1.5rem] leading-none">
              Nkrodoo Herbal
            </h4>
            <p className="font-sfregular text-[0.8rem]">Branding & Labels </p>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="lg:w-[89%] w-full items-center lg:mb-10 mb-3 px-5 sm:px-12 md:px-[5rem] lg:px-0"
      >
        <div
          className="w-full xl:h-[28rem] lg:h-[20rem] h-[15rem] rounded-2xl mb-4"
          style={{ backgroundImage: `url(${nirvana})` }}
        ></div>
        <div className="">
          <h4 className="font-sfmedium font-medium text-[1.5rem] leading-none">
            Nirvana Company Limited
          </h4>
          <p className="font-sfregular text-[0.8rem]">Web Development</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center px-5 lg:px-0 sm:gap-3 lg:gap-0 mb-3 lg:mb-10 w-full justify-center">
        <div
          data-aos="fade-up"
          className="sm:w-[28%] w-full lg:mx-4 mb-3 lg:mb-0"
        >
          <div
            className="w-full xl:h-[20rem] lg:h-[19rem] h-[15rem] bg-cover bg-center bg-no-repeat rounded-2xl mb-4"
            style={{ backgroundImage: `url(${obroni})` }}
          ></div>
          <div className="">
            <h4 className="font-sfmedium font-medium lg:text-[1.5rem] text-[1.2rem] leading-none">
              Nirvana Company Limited
            </h4>
            <p className="font-sfregular text-[0.8rem]">Web Development</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="sm:w-[28%] w-full lg:mx-4 mb-3 lg:mb-0"
        >
          <div
            className="w-full xl:h-[20rem] lg:h-[19rem] h-[15rem] bg-cover bg-center bg-no-repeat rounded-2xl mb-4"
            style={{ backgroundImage: `url(${nkrodo})` }}
          ></div>
          <div className="">
            <h4 className="font-sfmedium font-medium lg:text-[1.5rem] text-[1.2rem] leading-none">
              Nirvana Company Limited
            </h4>
            <p className="font-sfregular text-[0.8rem]">Web Development</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="sm:w-[28%] w-full lg:mx-4 mb-3 lg:mb-0"
        >
          <div
            className="w-full xl:h-[20rem] lg:h-[19rem] h-[15rem] bg-cover bg-center bg-no-repeat rounded-2xl mb-4"
            style={{ backgroundImage: `url(${nkrodo})` }}
          ></div>
          <div className="">
            <h4 className="font-sfmedium font-medium lg:text-[1.5rem] text-[1.2rem] leading-none">
              Nirvana Company Limited
            </h4>
            <p className="font-sfregular text-[0.8rem]">Web Development</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full justify-center sm:gap-6 lg:gap-0 mb-10 px-5 lg:px-0">
        <div
          data-aos="zoom-in"
          className="sm:w-[43%] w-full lg:mx-4 lg:mb-10 mb-3"
        >
          <div
            className="w-full xl:h-[30rem] lg:h-[25rem] h-[20rem] bg-no-repeat bg-center bg-cover rounded-2xl mb-4"
            style={{ backgroundImage: `url(${obroni})` }}
          ></div>
          <div className="">
            <h4 className="font-sfmedium font-medium text-[1.5rem] leading-none">
              Obroni Cosmetics
            </h4>
            <p className="font-sfregular text-[0.8rem]">Print, Digital & Web</p>
          </div>
        </div>
        <div data-aos="zoom-in" className="sm:w-[43%] w-full lg:mx-4">
          <div
            className="w-full xl:h-[30rem] lg:h-[25rem] h-[20rem] bg-no-repeat bg-center bg-cover rounded-2xl mb-4"
            style={{ backgroundImage: `url(${nkrodo})` }}
          ></div>
          <div className="">
            <h4 className="font-sfmedium font-medium text-[1.5rem] leading-none">
              Nkrodoo Herbal
            </h4>
            <p className="font-sfregular text-[0.8rem]">Branding & Labels </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Works;
