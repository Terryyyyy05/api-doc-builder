/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        grayTable: "#c0c0c0",
        grayTable2: "#E0E0E0",
        grayText: "#878787",
        yellowTable: "#FEFF99",
        yellowTable2: "#FEFF00",
        blueTable: "#99CCFF",
        resBlueTable: "#CCFFFF",
        resBlueTable2: "#C7D9F1",
      },
    },
  },
  plugins: [],
};
