
module.exports = {
	darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
		extend: {
			animation: {
        'spin-slow': 'spin 5s ease infinite',
      },
			keyframes: {
        showModalBg: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
				showModalBox: {
          from: {  opacity: '0' , marginTop:'-10px' },
          to: { opacity: '1' , marginTop:'0' },
        }
      },
			animation: {
        'showmodalBg': 'showModalBg .3s ',
        'showmodalBox': 'showModalBox .3s ',
      },

			colors: {
				"point-background": "#eff6ff;",
        "background-gray":"rgb(237, 240, 243);",
				"primary-text": "#475569;",
				"secondary-text": "#333333",
				"light-text": "#818181",
				"point-color": "#3b82f6",
				"error-color": "#ec4899",
				"primary-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05);",
				
				"modal-bg": "rgba(0, 0, 0, 0.6)",
				"map-bg": "rgba(255, 255, 255, 0.8)",
				"item-hover": "#EEEEEE",
				"uni-bg": "#629EE4",
				"station-bg": "#76C781",
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
		},
	},
	plugins: [
	],
};