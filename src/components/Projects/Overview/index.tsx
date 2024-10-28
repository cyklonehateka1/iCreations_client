import React from "react";
import OverView1 from "../../../assets/images/project/pro1.png";
import OverView2 from "../../../assets/images/project/pro2.png";
import OverView3 from "../../../assets/images/project/pro3.png";

const Overview = () => {
  return (
    <div>
      <div className="w-full border border-[#E4E4E4] p-3 md:p-10 rounded-lg flex-row md:flex items-center gap-7">
        <div className="w-full relative h-auto flex justify-center items-center">
          <div className="w-[279px] h-[474px] absolute left-3 md:left-10 -z-30 object-cover object-center">
            <img
              src={OverView1}
              alt="app-design"
              className="w-full h-full  object-cover object-center"
            />
          </div>
          <div className="w-[279px] h-[474px]  object-cover object-center">
            <img
              src={OverView2}
              alt="app-design"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-[279px] h-[474px] absolute right-0 -z-30  object-cover object-center">
            <img
              src={OverView3}
              alt="app-design"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full p-5 bg-[#F8F8F8] rounded-lg">
          <h1 className="text-3xl font-bold mb-5">Overview</h1>
          <p className="text-base text-[#3D445C] ">
            HealMe is a comprehensive mental health platform designed to empower
            users in tracking their mental and physical well-being. Developed by
            iCreations Global, it offers personalized guidance, community
            interaction, and features to monitor health metrics, complete
            assessments, and engage in self-care activities like meditation. The
            core design philosophy is to provide a seamless, user-friendly
            experience while prioritizing the mental health journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
