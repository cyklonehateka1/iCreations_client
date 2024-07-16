import obroni from "../../assets/images/obroni.jpg";
import nirvana from "../../assets/images/nirvana.jpg";
import nkrodo from "../../assets/images/nkrodo.jpg";

const Works = () => {
  return (
    <div className="flex flex-col items-center lg:px-14 px-0 w-full">
      <div className="lg:py-20 py-10 text-center lg:px-[20%] xs:px-10 sm:px-[10%] md:px-[15%] px-5 flex flex-col items-center">
        <div className="flex items-center mb-5">
          <hr className="border border-t-[#D9D9D9] lg:w-[6rem] w-[2rem] lg:mr-10 mr-3" />
          <h2 className="font-sfbold font-bold lg:text-[3rem] text-[1.2rem]">
            Our Works
          </h2>
          <hr className="border border-t-[#D9D9D9] lg:w-[6rem] w-[2rem] lg:ml-10 ml-3" />
        </div>
        <p className="font-sfregular text-[0.8rem]">
          Over the years, we have worked on a diverse range of projects,
          including crafting user-friendly and visually stunning websites
          tailored to your brand, developing cohesive brand identities that
          resonate with your audience, creating memorable logos that encapsulate
          your brand's essence, and conducting in-depth UX research to optimize
          user experiences and drive engagement. At iCreations, we take pride in
          delivering exceptional results that elevate your brand and support
          your growth.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center w-full px-5 gap-6 justify-center lg:mb-10 sm:mb-10">
        <div className="sm:w-[43%] w-full lg:mx-4 mb-3 sm:mb-0">
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
        <div className="sm:w-[43%] w-full lg:mx-4 mb-3 sm:mb-0">
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
      <div className="lg:w-[89%] w-full items-center lg:mb-10 mb-3 px-5 sm:px-12 md:px-[5rem] lg:px-0">
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
        <div className="sm:w-[28%] w-full lg:mx-4 mb-3 lg:mb-0">
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
        <div className="sm:w-[28%] w-full lg:mx-4 mb-3 lg:mb-0">
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
        <div className="sm:w-[28%] w-full lg:mx-4 mb-3 lg:mb-0">
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
        <div className="sm:w-[43%] w-full lg:mx-4 lg:mb-10 mb-3">
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
        <div className="sm:w-[43%] w-full lg:mx-4">
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
    </div>
  );
};

export default Works;
