import mainHeroBG from "../../assets/images/slide-ted31.png";
import clientBG from "../../assets/images/Hero.jpg";

interface SliderData {
  bg: string;
  service: string;
  heading: string;
  img: string;
  desc: string;
  logo: string;
}

export const sliderData: SliderData[] = [
  {
    bg: clientBG,
    desc: "A beautiful coperate website development for an international prestige brand",
    heading: "Tailored to fit your brand",
    img: mainHeroBG,
    logo: mainHeroBG,
    service: "Web Design",
  },
  {
    bg: mainHeroBG,
    desc: "A beautiful coperate website development for an international prestige brand",
    heading: "Tailored to fit your brand",
    img: clientBG,
    logo: mainHeroBG,
    service: "Web Design",
  },
  {
    bg: clientBG,
    desc: "A beautiful coperate website development for an international prestige brand",
    heading: "Tailored to fit your brand",
    img: mainHeroBG,
    logo: mainHeroBG,
    service: "Web Design",
  },
  {
    bg: mainHeroBG,
    desc: "A beautiful coperate website development for an international prestige brand",
    heading: "Tailored to fit your brand",
    img: clientBG,
    logo: mainHeroBG,
    service: "Web Design",
  },
  {
    bg: clientBG,
    desc: "A beautiful coperate website development for an international prestige brand",
    heading: "Tailored to fit your brand",
    img: mainHeroBG,
    logo: mainHeroBG,
    service: "Web Design",
  },
  {
    bg: mainHeroBG,
    desc: "A beautiful coperate website development for an international prestige brand",
    heading: "Tailored to fit your brand",
    img: clientBG,
    logo: mainHeroBG,
    service: "Web Design",
  },
];
