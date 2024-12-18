/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        montserratalt: ["Montserrat Alternates", "serif"],
        sfregular: ["Sfregular", "serif"],
        sfbold: ["SfBold", "serif"],
        sfmedium: ["SfMedium", "serif"],
        inter: ["Inter", "serif"],
        sflight: [ "sf pro display"],
      },
      zIndex: {
        100: "100",
        120: "120",
      },
      screens: {
        "2xs": "360px",
        // => @media (min-width: 360px) { ... }

        xs: "412px",
        // => @media (min-width: 412px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1366px",
        // => @media (min-width: 1366px) { ... }

        "3xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "4xl": "1920px",
        // => @media (min-width: 1926px) { ... }

        "4k": "3830px",
        // => @media (min-width: 3840px) { ... }
      },
      colors: {
        primaryText: "rgba(46, 40, 38, 1)",
        transparentBlack: "rgba(46, 40, 38, 0.19)",
        ash: "rgba(142, 142, 142, 0.17)",
        green: "rgba(25, 205, 10, 1)",
        red: "rgba(252, 139, 139, 1)",
        yellow: "rgba(250, 180, 0, 1)",
        "border-Color": "rgba(142.38, 142.38, 142.38, 0.17)",
        "dark-ash": "#c9c4be",
        "light-ash": "#efeeec",
        "light-red": "rgba(252, 139, 139, 0.35)",
        "light-yellow": "rgba(250, 180, 0, 0.17)",
      },
      keyframes: {
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
