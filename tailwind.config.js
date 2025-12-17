/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"health-primary": {
					DEFAULT: "#2563EB",
					dark: "#1E40AF",
				},
				"health-secondary": {
					DEFAULT: "#0D9488",
					light: "#14B8A6",
				},
				"health-accent": {
					mint: "#5EEAD4",
					coral: "#FB7185",
				},
				"health-bg": "#F8FAFC",
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [],
};
