/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'main': '36rem',
        'header': '66rem',
        'footer': '36rem'
      },
      colors: {
        blue: '#415A7D'
      }
    },
  },
  plugins: [],
}
