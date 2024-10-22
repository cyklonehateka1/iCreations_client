import { useEffect, useState } from "react";
import heroimg from "../../assets/images/Hero.jpg";
import { sliderData } from "../../data/dummy/sliderData";
import "../../assets/styles/heroSlider.css";

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
    <div className="">
      <div
        className="md:h-[70vh] h-[70vh] bg-[#363636] bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="h-full w-full relative">
          <div
            className={`h-full w-full bg-center bg-cover bg-no-repeat ${
              show ? (animateOut ? "fadeout-right" : "fadein-left") : "hidden"
            }`}
            style={{ backgroundImage: `url(${activeDetails.bg})` }}
          ></div>
          <div className="h-full w-full px-5 lg:px-16 absolute bg-[#000000be] z-20 top-0 flex md:justify-between justify-center flex-col md:flex-row">
            <div className="md:h-full flex flex-col justify-center items-center md:items-start w-full md:w-[50%]">
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
                className={` text-white lg:text-[3rem] text-[2rem] sm:text-[3rem] md:text-[2rem] tracking-wider text-center md:text-left font-bold font-sfmedium leading-[1] md:mb-2 mb-1 ${
                  show ? (animateOut ? "fadeout-right" : "fadein") : "hidden"
                }`}
              >
                {activeDetails.heading}
              </h1>
              <div className="md:mb-7 mb-1">
                <h3
                  className={`text-white text-[0.8rem] text-center md:text-left ${
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
              <div className="md:mb-5 mb-1 md:h-10">
                <div
                  className={`"flex items-center " ${
                    showButtons
                      ? animateOut
                        ? "fadeout-right"
                        : "fadein-left"
                      : "hidden"
                  }`}
                >
                  <button className="md:mr-5 bg-white text-black px-4 py-1 md:px-7 md:py-2">
                    <span>View case study</span>
                  </button>
                  <button className="bg-none text-white px-4">
                    Work with us
                  </button>
                </div>
              </div>
            </div>
            <div className="md:h-[90vh] h-[30%] flex justify-center items-center top-20 md:top-0 w-full md:w-[45%] md:absolute relative md:right-16">
              <img
                src={activeDetails.img}
                alt=""
                className={`w-full  ${
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
