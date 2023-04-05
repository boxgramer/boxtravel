/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bx-text": "#E5DBC7",
        "bx-button": "#BBAB49",
        "bx-card": "#314526",
        "bx-disable": "#5E603E",
        "bx-active": "#868258",
        "bx-base": "#22301B",
      },
    },
  },
  plugins: [],
};
