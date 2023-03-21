/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem', // default padding
        sm: '2rem', // padding for small screens
      },
    },
    extend: {},
  },
  plugins: [],
}