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
        boeing737: "url('/assets/b737-boeing-checklist-background.png')",
        airbus320: "url('/assets/a320-airbus-checklist-background.png')",
        cessna172: "url('/assets/cessna-172-checklist-background.png')",
      }),
    },
  },
  plugins: [require("flowbite/plugin")],
};
