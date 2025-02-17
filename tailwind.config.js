const { heroui } = require("@heroui/react");
/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  
  theme: {
    extend: {
      fontFamily: {
        libre: ["Libre Baskerville", "serif"],
        dancing: ["Dancing Script", "cursive"]

      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}