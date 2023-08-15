const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [" Montserrat ", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: "",
      },
      colors: {
        accent: "#dac1a6",
        blackish: "#ecd7c5",
        texte: "#312926",
        imageback: "#aa866b",
      },
    },
  },
  plugins: [],
};
