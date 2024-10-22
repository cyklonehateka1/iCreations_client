
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = {
        name,
        email,
        phone,
        time,
      };
      console.log(body);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div data-aos="fade-up" className="w-full h-full container mx-auto my-10">
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
          <form
            onSubmit={handleSendEmail}
            className="w-full flex flex-col gap-2"
          >
            <div className="w-full flex flex-col gap-2">
              <label className="font-sfregular text-sm">Full name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full h-10 px-3 rounded-md border border-[#D9D9D9] outline-none"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-sfregular text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full h-10 px-3 rounded-md border border-[#D9D9D9] outline-none"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-sfregular text-sm">Phone number</label>
              <PhoneInput
                international
                countryCallingCodeEditable={true}
                className="border border-[#E6E8EB] focus:border-none focus:fo focus-ring-none rounded-xl p-2 focus:outline-none focus-outline-none"
                placeholder="Enter phone number"
                defaultCountry="GH"
                value={phone}
                onChange={(value) => setPhone(value?.toString())}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-sfregular text-sm">
                Best time to reach you
              </label>
              <input
                type="datetime-local"
                required
                placeholder="00:00 GMT"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full h-10 px-3 rounded-md border border-[#D9D9D9] outline-none"
              />
            </div>

            <button
              disabled={
                name === "" || email === "" || phone === "" || time === ""
              }
              type="submit"
              className={`${
                name === "" || email === "" || phone === "" || time === ""
                  ? "bg-black/50"
                  : "bg-[#000000]"
              } w-full h-10 text-[#fff] mt-3 rounded-md`}
            >
              Save and send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
