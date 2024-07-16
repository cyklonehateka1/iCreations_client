import serviceimg from "../../assets/images/serviceimg.jpg";

interface Services {
  image: string;
  text: string;
  color: string;
  index:number
}

export const servicesData: Services[] = [
  {
    image: serviceimg,
    text: "UX/UI Designs",
    color: "text-[#FA9600]",
    index:1
  },
  {
    image: serviceimg,
    text: "AI/Automation",
    color: "text-[#068C2C]",
    index:2
  },
  {
    image: serviceimg,
    text: "Web development",
    color: "text-[#2DBAE6]",
    index:3
  },
  {
    image: serviceimg,
    text: "Graphic designs",
    color: "text-[#FF006B]",
    index:4
  },
];
