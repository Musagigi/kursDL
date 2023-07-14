const { default: plugin } = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.html"],
	theme: {
		extend: {},
		screens: {
			xs: '420px',
			sm: '640px',
			md: '768px',
			lg: '1025px',
			xl: '1170px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		}
	},
	plugins: [
		function ({ matchUtilities }) {
			matchUtilities({
				'grid-cols-ideal': value => {
					return {
						gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`
					}
				}
			})
		}
	],
}
