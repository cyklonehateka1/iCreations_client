import heroimg from "../../assets/images/Hero.jpg";

const Hero = () => {
  return (
    <div
      className="w-full sm:h-[70vh] h-[50vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroimg})` }}
    ></div>
  );
};

export default Hero;
