/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f5ff',
          100: '#cceaff',
          200: '#99d6ff',
          300: '#66c1ff',
          400: '#33adff',
          500: '#0099ff', // sky blue
          600: '#007acc',
          700: '#005c99',
          800: '#003d66',
          900: '#001f33',
        },
        neutral: {
          900: '#000000', // black
          50: '#ffffff',  // white
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}