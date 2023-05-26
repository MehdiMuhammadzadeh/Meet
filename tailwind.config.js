
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazirmatnThin: "vazirmatnThin",
        vazirmatnExLight: "vazirmatnExLight",
        vazirmatnLight: "vazirmatnLight",
        vazirmatn: "vazirmatn",
        vazirmatnMedium: "vazirmatnMedium",
        vazirmatnSemiB: "vazirmatnSemiB",
        vazirmatnBold: "vazirmatnBold",
        vazirmatnExB: "vazirmatnExB",
        shabnam:"shabnam",
        shabnamBold: 'shabnamBold'
      },
      // boxShadow: {
      //   '3xl': '0  0 6px 1px rgba(0, 0, 0, 0.1)',
      // }
      
    },
  },
  plugins: [],
}