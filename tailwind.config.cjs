/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Gentium Plus', 'sans-serif']
			}
		}
	},

	plugins: [require('tailwindcss-hero-patterns')]
};

module.exports = config;
