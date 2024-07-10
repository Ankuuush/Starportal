/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "homeImg":"url('/src/assets/images/homeBg.png')"
      }
    },
    container:{
      screens:{
        md: "860px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px",
      }
    }
  },
  plugins: [],
}