import { servicesData } from "../../data/live/homeData";
const Services = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#FAFAFA] to-[#ECEEF8] lg:h-[20rem] h-auto flex justify-center items-center">
      <div className="flex flex-col xs:flex-row flex-wrap items-center justify-start xs:justify-center h-[70%] w-full px-5 xs:px-2 lg:px-5">
        {servicesData.map((item) => {
          return (
            <div
              className=" xs:mx-2 lg:h-full h-[14rem] lg:my-auto my-3 border-2 rounded-[8px] border-white lg:p-4 p-2 w-full xs:w-[45%] sm:w-[22%] lg:w-[16%]"
              key={item.index}
            >
              <div className="bg-white h-full lg:p-5 p-2 rounded-[8px]">
                <div
                  className="h-[85%] rounded-[8px] bg-cover bg-center bg-no-repeat mb-2"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <p
                  className={`text-center font-sfregular text-[0.8rem] ${item.color}`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
