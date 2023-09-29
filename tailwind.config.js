/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      brightness: {},
      colors: {
        gray: {
          50: "#FAFBFC",
          100: "#7C7C7C",
          200: "#686868",
          250: "#686868",
          300: "#424242",
          350: "#9A9A9A",
          400: "#727272",
        },
        sky: {
          100: "#E3F2FD",
        },
      },
    },
  },
  plugins: [],
};
