/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1100px",
        "2xl": "1100px",
      },
    },
    extend: { aspectRatio: { "16/23": "16 / 23" } },
  },
  plugins: [],
};
