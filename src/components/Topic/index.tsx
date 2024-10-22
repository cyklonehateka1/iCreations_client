import { useEffect } from "react";
import TopicImage from "../../assets/images/topic.png";
import Check from "../../assets/icons/check.png";
import Aos from "aos";

const Topics = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <section className="w-full h-full  flex flex-col items-center justify-center mt-10">
      <div
        data-aos="fade-up"
        className="w-full flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="font-sfbold font-bold lg:text-[3rem] text-[1.2rem]">
            Topic for the week
          </h2>
          <p className="test-base">
            Explore our latest our latest project and see what we can create
            together
          </p>
        </div>
      </div>
      <div data-aos="fade-up" className="w-full h-full container">
        <div className="w-full h-full mt-7 border border-[#E5EAF4] md:rounded-l-xl md:flex items-center gap-8">
          <div
            data-aos="zoom-in"
            className="w-full h-[567px] object-cover rounded-md md:rounded-l-xl"
          >
            <img
              src={TopicImage}
              alt="Topic"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>
          <div className="w-full md:h-[367px] h-[467px] md:py-0 py-[40px] px-3 md:px-0 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <div className="w-[124px] h-[48px] rounded-2xl bg-[#CECECE] flex items-center justify-center">
                <h2 className="text-base capitalize font-bold">FEATURED</h2>
              </div>
              <h1 className="md:text-2xl text-base font-bold text-[#183B56]">
                Why branding is so expensive? <br />
                Is It worth it?
              </h1>
            </div>
            <div className="w-5/6 flex flex-col gap-2">
              <p className="text-sm text-[#5A7184]">
                In this digital generation where information can be easily
                obtained within seconds, business cards ...
              </p>
              <p className="text-xs text-end">02 May</p>
            </div>
            <div className="md:w-5/6 w-full flex flex-col gap-2">
              <div className=" flex items-center gap-3">
                <div className="w-[40px] h-[40px] rounded-full bg-slate-500"></div>
                <div>
                  <h3 className="text-base font-semibold">Viola Manisa</h3>
                  <div className="flex items-center gap-2 mt-3">
                    <img
                      src={Check}
                      alt="check"
                      className="w-[23px] h-[23px] object-cover"
                    />
                    <h4>Verified writer</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[15vh] bg-gradient-to-b from-[#FDEAF5] to-[#fdeaf5ba]"></div>
    </section>
  );
};

export default Topics;
