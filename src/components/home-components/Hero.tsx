import { useEffect, useState } from "react";
import heroimg from "../../assets/images/Hero.jpg";
import { sliderData } from "../../data/dummy/sliderData"; 
import "../../assets/styles/heroSlider.css"

const Hero = () => {
  const [show, setShow] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showService, setShowService] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const [showButtons, setShowButtons] = useState(true);

  const activeDetails = sliderData[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateOut(true);

      setTimeout(() => {
        setShow(false);
        setAnimateOut(false);
        setShowService(false);
        setShowDescription(false);
        setShowButtons(false);

        setActiveIndex((prevIndex) => (prevIndex + 1) % sliderData.length);

        setTimeout(() => {
          setShow(true);
          setTimeout(() => {
            setShowService(true);
            setTimeout(() => {
              setShowDescription(true);
              setTimeout(() => {
                setShowButtons(true);
              }, 150);
            }, 150); // Delay before showing the description
          }, 100); // Slight delay to ensure CSS class updates
        }, 150); // Slight delay to ensure CSS class updates
      }, 150); // Match this duration with your animation duration
    }, 7000); // Change this to control the slide interval

    return () => clearInterval(interval);
  }, []);

  return (
    // <div
    //   className="w-full sm:h-[50vh] h-[50vh] bg-cover bg-center bg-no-repeat"
    //   style={{ backgroundImage: `url(${heroimg})` }}
    // ></div>
    <div className="">
      <div
        className="h-[70vh] bg-[#363636] bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="h-full w-full relative">
          <div
            className={`h-full w-full bg-center bg-cover bg-no-repeat ${
              show ? (animateOut ? "fadeout-right" : "fadein-left") : "hidden"
            }`}
            style={{ backgroundImage: `url(${activeDetails.bg})` }}
          ></div>
          <div className="h-full w-full  px-16 absolute bg-[#000000be] z-100 top-0 flex justify-between ">
            {/* <div className="h-full flex flex-col justify-center relative top-14">
              {sliderData.map((_, index) => (
                <div className="flex items-center my-1" key={index}>
                  <div
                    className={`h-[3px] mr-1 cursor-pointer hover:bg-[#c4c7d1] ${
                      index === activeIndex
                        ? "bg-[#F47321] w-9"
                        : "bg-[#959BAD] w-5"
                    }`}
                  ></div>
                  <p className={`text-[#8F8F8F] text-[0.5rem] font-montserrat`}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              ))}
            </div> */}
            <div className="h-full flex flex-col justify-end w-[33%]">
              <h4
                className={`text-white uppercase mb-2 font-sfregular text-[0.8rem] ${
                  showService
                    ? animateOut
                      ? "fadeout-right"
                      : "fadein-left"
                    : "hidden"
                }`}
              >
                {activeDetails.service}
              </h4>
              <h1
                className={` text-white text-[4rem] font-bold font-sfmedium leading-[1] mb-7 ${
                  show ? (animateOut ? "fadeout-right" : "fadein") : "hidden"
                }`}
              >
                {activeDetails.heading}
              </h1>
              <div className="mb-7 h-20">
                <h3
                  className={`text-white text-[1rem] ${
                    showDescription
                      ? animateOut
                        ? "fadeout-right"
                        : "fadein-left"
                      : "hidden"
                  }`}
                >
                  {activeDetails.desc}
                </h3>
              </div>
              <div className="mb-5 h-10">
                <div
                  className={`"flex items-center " ${
                    showButtons
                      ? animateOut
                        ? "fadeout-right"
                        : "fadein-left"
                      : "hidden"
                  }`}
                >
                  {/* <button className="mr-5 bg-green text-white px-7 py-2">
                    <span>View case study</span>
                  </button>
                  <button className="bg-none text-green">Work with us</button> */}
                </div>
              </div>
            </div>
            <div className="h-[90vh] flex justify-center items-center w-[55%] relative">
              <img
                src={activeDetails.img}
                alt=""
                className={`${
                  show
                    ? animateOut
                      ? "fadeout-bottom"
                      : "fadein-top"
                    : "hidden"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
