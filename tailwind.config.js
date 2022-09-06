/** @type {import('tailwindcss').Config} */

module.exports = {
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	theme: {
		fontFamily: {
			sans: ["Source Sans Pro", "sans-serif"],
		},
	},
	daisyui: {
		themes: ["synthwave", "night"],
	},
};
