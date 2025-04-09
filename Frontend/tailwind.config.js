/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',  
  theme: {
    extend: {
      colors: {
        bgSide: "#070707",
        bgChat: "#282828",
      }
    },
    
  },
  plugins: [
    require('tailwind-scrollbar')

  ],
}
