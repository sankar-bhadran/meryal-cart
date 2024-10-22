/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        500: "500px",
      },
      fontFamily: {
        customFont: ["sans-serif"],
        headingFont: ["Fira Sans"],
      },
    },

    plugins: [],
  },
};
