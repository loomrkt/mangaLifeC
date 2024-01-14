/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",'node_modules/preline/dist/*.js',],
  theme: {
    extend: {
      colors: {
        'primary': '#FF9F1C',
      },
    },
  },
  plugins: [require('preline/plugin'),],
}