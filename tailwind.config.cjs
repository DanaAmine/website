/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b',
      black:'#000',
      white:'#fff',
      blue : {
        
        100 : '#61f2df',
        200: '#0cc0df',
        300 : '#003a90'
      },
      
      
    },
    extend: {},
  },
  plugins: [],
}
