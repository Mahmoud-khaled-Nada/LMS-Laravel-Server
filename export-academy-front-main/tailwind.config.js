/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main:'#00a7ba',
        Primary:'#000927',
        Secondary: "#00D8E3",
      },
      fontFamily: {
        Cairo: "Cairo",
      },
    },
    },
  
  plugins: [],
}