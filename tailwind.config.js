/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#eef7fb",
          100: "#d3ecf4",
          200: "#a7d9e9",
          300: "#71bfd9",
          400: "#3f9fc0",
          500: "#2483a4",
          600: "#1c6784",
          700: "#19536a",
          800: "#134458",
          900: "#0d2531",
          950: "#0a1c26",
        },
        sunset: {
          50: "#fff5ed",
          100: "#ffe6d2",
          200: "#ffc9a3",
          300: "#ffa565",
          400: "#fd7f2c",
          500: "#f96110",
          600: "#ea4707",
          700: "#c23408",
          800: "#9a2b0f",
          900: "#7c2610",
        },
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(13, 37, 49, 0.25)",
      },
    },
  },
  plugins: [],
}
