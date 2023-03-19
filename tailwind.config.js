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
      animation: {
        "spin-slow": "spin 5s ease infinite",
      },
      keyframes: {
        showModalBg: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        showModalBox: {
          from: { opacity: "0", marginTop: "-10px" },
          to: { opacity: "1", marginTop: "0" },
        },
      },
      animation: {
        showmodalBg: "showModalBg 0.3s ",
        showmodalBox: "showModalBox 0.3s ",
      },

      colors: {
        //Grayscale
        "gray-light": "#f9f9fb",
        "gray-default": "rgb(237, 240, 243)",
        "gray-dark": "rgb(203 213 225)",

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
        "point-gr-light": "rgb(94 234 212)",
        "point-gr": "rgb(45 212 191)",
        "point-gr-dark": "rgb(20 184 166)",
        //*blue
        "point-blue-light": "rgb(56 189 248)",
        "point-blue": "rgb(14 165 233)",
        "point-blue-dark": "rgb(2 132 199)",
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
