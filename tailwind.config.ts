/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-gray": "#7F7F7F",
        "btn-gray": "#dddddd",
        "btn-gray-hover": "#cacaca",
        primary: "#419CD9",
        hoverPrimary: "#3680b1",
        title: "#242626",
        contents: "#3D3F40",
        important: "#105787",
        input: "#AEB1B2",
        bgc: "#EEF7FD",
        milk: "#efefef",
        minus: "#E53900",
        faqBG: "#263E4C",
      },
      margin: {
        "horizontal-spacing": "0px 1rem 0px 1rem",
      },
      height: {
        17: "4.25rem" /* 68px */,
        30: "7.5rem" /* 120px */,
        "main-height": "calc(100% - 7rem)",
        "92%": "92%",
        "100dvh": "100dvh",
      },
      fontWeight: {
        regular: "400",
      },
      textColor: {
        primary: "#419CD9",
        title: "#242626",
        contents: "#3D3F40",
        important: "#105787",
        minus: "#E53900",
        input: "#AEB1B2",
        default: "#616466",
        gray: "#A8AAAC",
      },
      fontSize: {
        mini: "10px",
        28: "28px",
      },
      width: {
        21: "5.3125rem" /* 85px */,
        42: "10.5rem" /* 168px */,
        "45%": "45%",
        51: "12.75rem" /* 204px */,
        468: "468px",
        52.6: "52.6%",
        "71.1%": "71.11111111111111%",
      },
      minWidth: {
        23: "5.75rem" /* 92px */,
        56: "14rem" /* 224px */,
      },
      borderColor: {
        input: "#85898C",
        primary: "#419CD9",
        bgc: "#EEF7FD",
        bannerWhite: "#D8D8D8",
        gray: "#A8AAAC",
        minus: "#E53900",
      },
      borderWidth: {
        bannerWhite: "1px 0 1px 0",
      },
      lineHeight: {
        relaxed: "170%",
      },
      gap: {
        "4%": "4%",
      },
      screens: {
        mini: "700px",
      },
      boxShadow: {
        menu: "5px 0 5px #ddd",
        section: "0 0 2px rgba(0,0,0, 0.1)",
      },
      animation: {
        newTab: "newTab 0.4s linear",
        scrollDownMoveIcon: "scrollDownMoveIcon 0.5s ease-in-out",
        openSelectBox: "openSelectBox 0.1s ease-in-out",
        closeSelectBox: "closeSelectBox 0.1s ease-in-out",
      },
      accentColor: {
        primary: "#419CD9",
      },
      keyframes: {
        newTab: {
          "0%": {
            transform: "translate(-40px, 0)",
            backgroundColor: "white",
          },
          "100%": "-translate-x-1",
        },
        scrollDownMoveIcon: {
          "0%": {
            width: "0",
            opacity: "100",
          },
          "100%": {
            width: "auto",
            opacity: "0",
          },
        },
        openSelectBox: {
          from: {
            height: "0",
          },
        },
        closeSelectBox: {
          from: {
            height: "auto",
          },
          to: {
            height: "0",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
