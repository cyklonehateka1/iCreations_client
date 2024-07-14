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
  const slideWidth = 12.5; // 10rem + 2 * 2rem

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
    <div className="bg-[#EEF0F9] flex flex-col items-center justify-center lg:px-32 px-2 lg:pt-20 pt-10 pb-7 w-full">
      <div className="lg:px-[33%] px-5 text-center mb-7">
        <h4 className="font-sfmedium font-medium lg:text-[1.8rem] text-[1.7rem] mb-2">
          Solutions for all industries
        </h4>
        <p className="font-sfregular lg:text-[0.938rem] text-[0.8rem]">
          We serve a whole range of industries with professional website and
          digital solutions.
        </p>
      </div>
      <div className="flex w-full justify-between flex-col lg:flex-row">
        <div className="lg:w-[40%] w-full mb-10 lg:mb-0 h-[20rem] lg:h-[31rem] border-2 border-white p-3 rounded-lg">
          <div className="w-full bg-white h-full rounded-lg p-3">
            <div
              className="w-full h-full rounded-xl bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${healthBg})` }}
            ></div>
          </div>
        </div>
        <div className="lg:w-[59%] w-full flex items-start relative">
          <img
            src={arrowLeft}
            alt="Previous"
            className="absolute top-20 left-0 transform -translate-y-1/2 cursor-pointer"
            onClick={prevSlide}
          />
          <div className="lg:px-10 px-2 w-full overflow-hidden">
            <div className="w-full overflow-hidden">
              <div
                className="flex gap-10 justify-between mb-5 w-full h-[10rem] transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (slideWidth * slidesToScroll)
                  }rem)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="border-2 cursor-pointer border-white rounded-lg p-2 h-[10rem] w-[10rem] flex-shrink-0"
                  >
                    <div
                      className={`bg-white px-2 w-full flex justify-center flex-col items-center h-full rounded-lg ${slide.bgColor}`}
                    >
                      <img src={slide.img} alt="" className="mb-5 " />
                      <p
                        className={`font-inter text-[0.8rem] text-center ${slide.textColor}`}
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
          <img
            src={arrowRight}
            alt="Next"
            className="absolute top-20 right-0 transform -translate-y-1/2 cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Industries;
