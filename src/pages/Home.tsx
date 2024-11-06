// import Hero from "../components/home-components/Hero";
import HomeHero from "../components/home-components/HomeHero";
import Industries from "../components/home-components/Industries";
import Works from "../components/home-components/Works";
import OurServices from "../components/OurServices";
import Topics from "../components/Topic";
import herimg from "../assets/images/labs.png";
import { FaPlay } from "react-icons/fa";

const images = [
  {
    image: [
      "/src/assets/images/project/pro1.png",
      "/src/assets/images/project/pro2.png",
      "/src/assets/images/project/pro3.png",
    ],
    title: "Thoughtful Design,Powerful Impact",
    label: "HealME mental health app for Animo Africa",
    id: 23,
  },
  {
    image: [
      "/src/assets/images/project/pro1.png",
      "/src/assets/images/project/pro2.png",
      "/src/assets/images/project/pro3.png",
    ],
    title: "Thoughtful Design",
    label: "HealME mental health app for Animo Africa",
    id: 29,
  },
];
const Home = () => {
  return (
    <div className="bg-white p-2">
      {/* <Hero /> */}
      <HomeHero images={images} />
      <div className="lg:py-20 pt-20 pb-10 text-center lg:px-[20%] xs:px-10 sm:px-[10%] md:px-[15%] px-5 flex flex-col items-center">
        <div className="flex items-center mb-2">
          <hr className="border border-t-[#D9D9D9] lg:w-[6rem] w-[2rem] lg:mr-10 mr-3" />
          <h2 className="font-sfbold font-bold lg:text-[3rem] text-[1.2rem]">
            Why Empathy Labs
          </h2>
          <hr className="border border-t-[#D9D9D9] lg:w-[6rem] w-[2rem] lg:ml-10 ml-3" />
        </div>
        <p className="font-sfregular text-sm text-justify">
          Why Empathy Labs We build impactful digital products and innovative
          solutions
        </p>
      </div>
      <div
        className=" h-[50vh] md:h-[70vh] my-5 flex items-center justify-center object-cover home_labs"
        style={{ backgroundImage: `url(${herimg})` }}
      >
        <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-[#000]">
          <FaPlay />
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center">
        <OurServices />
      </div>
      {/* <Services /> */}
      <Works />
      <Industries />
      <Topics />
    </div>
  );
};

export default Home;
