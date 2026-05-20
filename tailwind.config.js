/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./src/components/**/*.{js,ts,jsx,tsx}", 
    "./src/views/**/*.{js,ts,jsx,tsx}"       
  ],
  theme: {
    extend: {
      colors: {
        carresaNavy: '#0B2240',   
        carresaOrange: '#E05600', 
        carresaGray: '#F4F6F9',   
      },
    },
  },
  plugins: [],
}