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
      backgroundImage: (theme) => ({
        boeing737: "url('/assets/B737BG.png')",
        airbus320: "url('/assets/A320BG.png')",
        cessna172: "url('/assets/C172BG.png')",
      }),
    },
  },
  plugins: [require("flowbite/plugin")],
};
