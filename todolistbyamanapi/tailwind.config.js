/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
    theme: {
      extend: {
        colors: {
          textColor: "#667085",
          textcolor2:"#292D35",
          headingsColor: "#2B2B2B",
          headingsColorLight: "#2b2b2b80",
          textColorBlue: "#155CDE",
          textColorPrimary: "#176262",
          texColorDarkGreen:"#104141",
          textColorGreen:"#27A3A3"
        },
        filter: {
          'brightness-4': 'brightness(4)',
        },
      },
    },
    plugins: [],
  };