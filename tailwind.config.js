/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-primary": "rgb(255, 125, 26)",
        "custom-pale-primary": "rgb(255, 237, 224)",
        "custom-gray-dark": "rgb(29, 32, 37)",
        "custom-gray-light": "rgb(104, 112, 125)",
        "custom-white": "rgb(247, 248, 253)"

      },
      fontFamily: {
        "custom-kumbh-sans": '"Kumbh Sans", sans-serif'
      }
    },
  },
  plugins: [],
}