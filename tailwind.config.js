/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'accent': '#46A358',
          'typo': '#3D3D3D',
          'bg': '#F5F5F5',
          'desc': '#727272',
          'white': '#FFFFFF',
          'light-green': '#46A3581A'
        },
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif']
        }
      },
    },
    plugins: [],
  }