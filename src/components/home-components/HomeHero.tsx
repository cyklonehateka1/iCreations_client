"use client";

import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
import BgImage from "../../assets/images/heroBg.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselItem {
  image: string[];
  title: string;
  label: string;
  id: number;
}

interface CarouselProps {
  images?: CarouselItem[];
  interval?: number;
}

export default function HomeHero({
  images = [],
  interval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  //   const goToPrevious = () => {
  //     setCurrentIndex(
  //       (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //     );
  //   };

  //   const goToNext = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   };

  if (images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div
      className="relative w-full h-[65vh] bg-gradient-to-r from-[#f5d0feb8] to-[#f5d0feb8]"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center w-full h-full p-8 z-40"
        >
          <div className="flex-1 pr-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {images[currentIndex].title}
            </h2>
            <p className="text-sm mb-6">{images[currentIndex].label}</p>
            <div className="flex items-center justify-center gap-3">
              <button className="w-[162px] h-[40px] bg-[#AE01FF] text-sm text-[#fff] rounded-md flex items-center gap-3 p-3">
                View Case Study{" "}
                <span className="w-[15px] h-[15px] rounded-full flex items-center justify-center bg-white">
                  <MdKeyboardArrowRight className="text-xs text-[#000]" />
                </span>
              </button>
              <button className="w-[140px] h-[40px] border border-[#000] text-sm text-[#000] rounded-md flex items-center gap-3 p-3">
                Work with Us{" "}
                <span className="w-[15px] h-[15px] rounded-full flex items-center justify-center border border-[#000]">
                  <MdKeyboardArrowRight className="text-xs text-[#000]" />
                </span>
              </button>
            </div>
          </div>
          {/* <div className="relative w-1/2 h-[65vh] aspect-[4/3]">
            <div className="w-[40px] h-full object-cover rounded-lg">
              <motion.img
                src={images[currentIndex].image[1]}
                alt={`Main image for ${images[currentIndex].title}`}
                className="absolute top-0 right-0 w-full h-full object-cover rounded-lg shadow-lg z-30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <motion.img
              src={images[currentIndex].image[0]}
              alt={`Background image 1 for ${images[currentIndex].title}`}
              className="absolute top-0 -left-1/4 w-full h-full object-cover rounded-lg shadow-lg z-20 "
              initial={{ rotate: 0, x: "100%" }}
              animate={{ rotate: -20, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="w-[200px] h-full object-cover">
              <motion.img
                src={images[currentIndex].image[2]}
                alt={`Background image 2 for ${images[currentIndex].title}`}
                className="absolute top-0 -right-1/4 w-full h-full object-cover rounded-lg shadow-lg z-10 "
                initial={{ rotate: 0, x: "-100%" }}
                animate={{ rotate: 20, x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div> */}
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-0 left-0 w-full h-full bg-[#f5d0feb8] -z-10"></div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full p-0 ${
                index === currentIndex ? "bg-black" : "bg-gray-500"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
