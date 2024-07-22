import Hero from "../components/home-components/Hero";
import Industries from "../components/home-components/Industries";
import Services from "../components/home-components/Services";
import Works from "../components/home-components/Works";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <div className="lg:py-20 pt-20 pb-10 text-center lg:px-[20%] xs:px-10 sm:px-[10%] md:px-[15%] px-5 flex flex-col items-center">
        <div className="flex items-center mb-5">
          <hr className="border border-t-[#D9D9D9] lg:w-[6rem] w-[2rem] lg:mr-10 mr-3" />
          <h2 className="font-sfbold font-bold lg:text-[3rem] text-[1.2rem]">
            Why iCreations
          </h2>
          <hr className="border border-t-[#D9D9D9] lg:w-[6rem] w-[2rem] lg:ml-10 ml-3" />
        </div>
        <p className="font-sfregular text-[0.8rem] text-justify">
          At iCreations, we're passionate about building impactful digital
          products and innovative solutions for startups and big companies
          alike. Our dynamic approach sets you apart from the competition, and
          our collaborative process ensures your values and growth plans are at
          the forefront. We work with clients across Africa, including South
          Africa and Kenya, and internationally. Your project receives top-tier
          attention from our team, with every detail carefully managed from
          concept to delivery. Our success is measured by your success, and our
          drive for results fuels continuous innovation.
        </p>
      </div>
      <Services />
      <Works />
      <Industries />
    </div>
  );
};

export default Home;
