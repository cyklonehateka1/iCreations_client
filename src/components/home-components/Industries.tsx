import { useState } from "react";
import healthBg from "../../assets/images/health.jpg";
import arrowLeft from "../../assets/icons/leftarrow.svg";
import arrowRight from "../../assets/icons/rightarrow.svg";
import health_icon_white from "../../assets/icons/health_white.png";
import health_icon_black from "../../assets/icons/health_black.svg";

const Industries = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: health_icon_white,
      text: "Healthcare sector",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      img: health_icon_black,
      text: "Healthcare sector",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      img: health_icon_black,
      text: "Healthcare sector",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      img: health_icon_black,
      text: "Healthcare sector",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      img: health_icon_black,
      text: "Healthcare sector",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      img: health_icon_black,
      text: "Healthcare sector",
      bgColor: "bg-white",
      textColor: "text-black",
    },
  ];

  const totalSlides = slides.length;
  const slidesToShow = 3;
  const slidesToScroll = 1;
  // const slideWidth = 12.5; // 10rem + 2 * 2rem

  const nextSlide = () => {
    const nextIndex = currentSlide + slidesToScroll;
    if (nextIndex <= totalSlides - slidesToShow) {
      setCurrentSlide(nextIndex);
    } else {
      setCurrentSlide(totalSlides - slidesToShow);
    }
  };

  const prevSlide = () => {
    const prevIndex = currentSlide - slidesToScroll;
    if (prevIndex >= 0) {
      setCurrentSlide(prevIndex);
    } else {
      setCurrentSlide(0);
    }
  };

  return (
    <div className="bg-[#EEF0F9] flex flex-col items-center justify-center lg:px-32 px-2 lg:pt-20 pt-3 pb-7 w-full">
      <div className="lg:px-[33%] px-5 text-center mb-7">
        <h4 className="font-sfmedium font-medium lg:text-[1.8rem] text-[1.7rem] mb-2">
          Solutions for all industries
        </h4>
        <p className="font-sfregular lg:text-[0.938rem] text-[1rem]">
          We serve a whole range of industries with professional website and
          digital solutions.
        </p>
      </div>
      <div className="flex w-full justify-between flex-col-reverse md:flex-row">
        <div className="md:w-[40%] w-full mb-10 lg:mb-0 h-[20rem] lg:h-[31rem] border-2 border-white p-3 rounded-lg">
          <div className="w-full bg-white h-full rounded-lg p-3">
            <div
              className="w-full h-full rounded-xl bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${healthBg})` }}
            ></div>
          </div>
        </div>
        <div className="md:w-[59%] w-full flex items-start relative">
          <span onClick={prevSlide}>
            <img
            src={arrowLeft}
            alt="Previous"
            className="absolute md:top-20 top-[3.5rem] left-0 transform -translate-y-1/2 cursor-pointer"
            
            />
          </span>
          <div className="lg:px-10 px-2 w-full overflow-hidden">
            <div className="w-full overflow-hidden">
              <div
                className="flex lg:gap-5 gap-4 justify-start lg:mb-5 mb-0 items-center md:items-start w-full md:h-[10rem] h-[7rem] transition-transform duration-500 ease-in-out px-3 md:px-0 flex-shrink-0"
                style={{
                  transform: `translateX(-${
                    currentSlide * (33.5 * slidesToScroll)
                  }%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="border-2 cursor-pointer border-white rounded-lg p-2 h-[6rem] w-[30%] lg:h-[10rem] lg:w-[30%] flex-shrink-0"
                  >
                    <div
                      className={`bg-white px-2 w-full flex justify-center flex-col items-center h-full rounded-lg ${slide.bgColor}`}
                    >
                      <img src={slide.img} alt="" className="md:mb-5 mb-1 md:w-auto w-8" />
                      <p
                        className={`font-inter md:text-[0.8rem] text-[0.7rem] text-center ${slide.textColor}`}
                      >
                        {slide.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full border-white border p-2 rounded-lg">
              <div className="w-full h-full bg-white p-4 rounded-lg">
                <h2 className="font-inter font-medium text-[1.4rem] text-center mb-4 lg:mb-0">
                  HEALTHCARE SECTOR
                </h2>
                <div className="border-2 border-black rounded-2xl flex flex-col items-center ">
                  <p className="relative w-[99%] bg-white bottom-1 rounded-2xl py-6 lg:px-6 px-2 font-inter text-[0.8rem]">
                    We assist financial institutions in the banking and fintech
                    sectors by creating applications that project
                    professionalism and build trust with clients and
                    stakeholders regarding financial products and services. We
                    collaborate with you to design user experiences that instil
                    trust in your financial services, expertise, and technology.
                    Highlight your financial services, expert team, and
                    cutting-edge facilities.
                  </p>
                  <div className="w-full flex justify-end items-center px-6 mb-6">
                    <button className="py-2 px-5 rounded-lg font-sfregular text-white bg-black text-[0.8rem]">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span onClick={nextSlide}><img
            src={arrowRight}
            alt="Next"
            className="absolute md:top-20 top-[3.5rem] right-0 transform -translate-y-1/2 cursor-pointer"
            
          /></span>
        </div>
      </div>
    </div>
  );
};

export default Industries;
