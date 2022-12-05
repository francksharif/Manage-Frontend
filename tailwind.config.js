/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        brightRed: "hsl(12, 88%, 59%)",
        darkBlue: "hsl(228, 39%, 23%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        brightRedHover: " hsl(12, 88%, 65%)",
      },
      fontFamily: {
        sans: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
