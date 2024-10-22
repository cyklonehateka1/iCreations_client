import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full h-full container mx-auto my-10">
      <div className="flex justify-center items-center mb-10 mt-5">
        <hr className="border border-t-[#D9D9D9] lg:w-[6rem] w-[2rem] lg:mr-10 mr-3" />
        <h2 className="font-sfbold font-bold lg:text-[3rem] text-[1.2rem]">
          Like what your saw? Lets work
        </h2>
        <hr className="border border-t-[#D9D9D9] lg:w-[6rem] w-[2rem] lg:ml-10 ml-3" />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="md:w-[641px] w-full h-full p-10 shadow-sm rounded-md border-2 border-[#fff] flex flex-col  gap-3">
          <h1 className="font-sfbold font-bold text-sm">Talk to sales!</h1>
          <form className="w-full flex flex-col gap-2">
            <div className="w-full flex flex-col gap-2">
              <label className="font-sfregular text-sm">Fullname</label>
              <input
                placeholder="Enter your name"
                className="w-full h-10 px-3 rounded-md border border-[#D9D9D9] outline-none"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-sfregular text-sm">Email</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full h-10 px-3 rounded-md border border-[#D9D9D9] outline-none"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-sfregular text-sm">
                Best time to reach you
              </label>
              <input
                type="text"
                required
                placeholder="00:00 GMT"
                className="w-full h-10 px-3 rounded-md border border-[#D9D9D9] outline-none"
              />
            </div>
            <button className="w-full h-10 bg-[#000000] text-[#fff] mt-3 rounded-md">
              Save and send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
