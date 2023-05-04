/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Dosis', 'sans-serif'],
      'serif': ['Abril Fatface'],
      'yeseva':['Yeseva One', 'cursive'],
      'Monoton': ['Monoton', 'cursive'],
      'Libre': ['Libre Bodoni', 'serif'],
      'Bungee': ['Bungee Shade', 'cursive'],
      'Major': ['Major Mono Display', 'monospace'],
      'Julius': ['Julius Sans One', 'sans-serif']

    
    },
    extend: {},
  },
  plugins: [],
  experimental:{
    applyComplexClasses: true,
  }
}
