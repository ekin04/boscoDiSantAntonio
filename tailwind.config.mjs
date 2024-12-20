/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				primary: '#10B981',
			  },
		},
	},
	plugins: [
		require('flowbite/plugin'), require('@tailwindcss/typography'),
	],
}