/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Nunito"', "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
