module.exports = {
  darkMode: "class",
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        showModalBg: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        showModalBox: {
          from: { opacity: "0", marginTop: "-30px" },
          to: { opacity: "1", marginTop: "0" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 5s ease infinite",
        "showmodal-bg": "showModalBg 0.3s ",
        "showmodal-box": "showModalBox 0.3s ",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      colors: {
        //Grayscale
        "gray-light": "#f9f9fb",
        "gray-default": "rgb(237, 240, 243)",
        "gray-dark": "rgb(203 213 225)",

        "primary-tint": "#868e96",
        "primary-light": "#475569",
        "primary-default": "#334155",
        "primary-dark": "#1e293b",

        //tag&badge 와 같은 point color
        //*red
        "point-red-light": "rgb(253 164 175)",
        "point-red": "rgb(244 63 94)",
        "point-red-dark": "rgb(225 29 72)",
        //*yellow
        "point-yel-light": "rgb(253 230 138)",
        "point-yel": "rgb(252 211 77)",
        "point-yel-dark": "rgb(251 191 36)",
        //*green
        "point-gr-light": "#6ed8cd",
        "point-gr": "#47c6b9",
        "point-gr-dark": "#1eb7a7",
        //*blue
        "point-blue-light": "#7abef5",
        "point-blue": "#2b96ed",
        "point-blue-dark": "#1683db",
        //*indigo
        "point-indigo-light": "rgb(199 210 254)",
        "point-indigo": "rgb(165 180 252)",
        "point-indigo-dark": "rgb(99 102 241)",

        //shadow
        "primary-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "secondary-shadow": "rgb(0 0 0 / 20%) 0px 0px 0px 0.5px",
      },
      fontFamily: {
        Roboto: ["Roboto", "serif"],
        RobotoThin: ["Roboto Regular"],
        RobotoBold: ["Roboto Bold"],
        rubik: ["Rubik"],
        rubikBold: ["Rubik Bold"],
        NotoSansKR: ["Noto Sans KR", "sans-serif"],
      },
      screens: {
        desktop: "1120px",
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
      gridTemplateColumns: {
        "listpage-desktop": "269px minmax(1fr, 835px)",
      },
      backgroundImage: {
        colorpickerDefaultGradient:
          "linear-gradient(transparent, black), linear-gradient(to right, white, transparent)",
      },
    },
  },
  plugins: [],
};
