import { useEffect, useState, useRef } from "react";
// import nirvana1 from "../assets/images/case1.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ContactUs from "../components/ContactUs";
import Aos from "aos";
import Overview from "../components/Projects/Overview";
import ProblemStatement from "../components/Projects/Problem_statement";
import DesignObjectives from "../components/Projects/Design_objectives";
import UserPersonas from "../components/Projects/User_personas";
import KeyFeatures from "../components/Projects/Key_features";
import ResultsImpacts from "../components/Projects/Results_impacts";

// const data = [
//   {
//     image: nirvana1,
//     header: "Gorgeous Glow Branding",
//     p: "Gorgeous Glow Branding",
//   },
//   {
//     image: nirvana1,
//     header: "Gorgeous Glow Branding",
//     p: "Gorgeous Glow Branding",
//   },
//   {
//     image: nirvana1,
//     header: "Gorgeous Glow Branding",
//     p: "Gorgeous Glow Branding",
//   },
//   {
//     image: nirvana1,
//     header: "Gorgeous Glow Branding",
//     p: "Gorgeous Glow Branding",
//   },
// ];

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  { id: "Overview", title: "Overview", content: <Overview /> },
  {
    id: "Problem Statement",
    title: "Problem Statement",
    content: <ProblemStatement />,
  },
  {
    id: "Design Objectives",
    title: "Design Objectives",
    content: <DesignObjectives />,
  },
  {
    id: "User Personas",
    title: "User Personas",
    content: <UserPersonas />,
  },
  {
    id: "Key Features",
    title: "Key Features",
    content: <KeyFeatures />,
  },
  {
    id: "Design Process",
    title: "Design Process",
    content: <DesignObjectives />,
  },
  { id: "Challenges", title: "Challenges", content: "Content for section 4" },
  {
    id: "Results & Impacts",
    title: "Results & Impacts",
    content: <ResultsImpacts />,
  },
];
const Project = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.current?.observe(element);
    });

    return () => observer.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className="w-full h-full container mx-auto">
      <section className="w-full h-full  my-10">
        <div className="w-full md:h-[30vh] h-[20vh] bg-[#FCFCFC] relative">
          <div className=" absolute bottom-[40px] md:left-[40px] left-2">
            <h1 className="text-lg md:text-5xl font-sfregular font-bold">
              Transformation Projects
            </h1>
            <h1 className="text-lg md:text-5xl font-sfregular font-bold">
              The Drive Results
            </h1>
          </div>
        </div>
        <nav className="sticky top-[50px] bg-[#fff] z-10 p-4  ">
          <div className="flex items-center justify-between space-x-2 overflow-x-auto pb-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`${
                  activeSection === section.id
                    ? "bg-black text-[#fff]"
                    : "border border-[#E0E3EB] "
                } whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </nav>
        <main className="flex-grow p-2 md:p-4">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="min-h-[20vh] ">
              {section.content}
            </section>
          ))}
        </main>
      </section>
      {/* <div className="w-full md:my-5 my-2 border border-1 md:p-7 p-3 shadow container mx-auto">
        <div className="w-full container grid md:grid-cols-2 grid-cols-1 gap-10">
          {data?.map((item, index) => (
            <div key={index} className="w-full h-auto">
              <div
                id="image_holder"
                className="w-full md:h-[438px] h-[300px] object-cover rounded-lg relative overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="image"
                  width={1000}
                  height={1000}
                  id="image_zoon"
                  className="w-full h-full rounded-lg hover:scale-125"
                />
                <div
                  id="hove_box"
                  className="w-full  items-center justify-center absolute hidden transition-all ease-out top-0 left-0 bottom-0 right-0 bg-[#00000051]"
                >
                  <div className="w-fit px-3 py-2 border border-[#fff] rounded-md flex items-center justify-center">
                    <h1 className="text-sm cursor-pointer text-[#fff]">
                      View case study
                    </h1>
                    <div className="w-[20px] h-[20px] ml-2 rounded-full border border-1 flex items-center justify-center">
                      <MdOutlineKeyboardArrowRight className="text-sm text-[#fff]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-2">
                <h1 className=" text-2xl">{item?.header}</h1>
                <p className="text-sm">{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      {/* <div className="w-full md:h-[15vh] h-[5vh] bg-gradient-to-b from-[#FDEAF5] to-[#fdeaf5ba]"></div> */}
      <section
        id="contact-us"
        className="w-full h-full flex items-center justify-center bg-[#F9F9F9] mx-auto"
      >
        <ContactUs />
      </section>
    </div>
  );
};

export default Project;
