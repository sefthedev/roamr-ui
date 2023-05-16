/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        xs: '550px',
      },
      fontFamily: {
        'alice': ['Alice' , 'Poppins' , 'Verdana' ,'sans-serif'],
        'poppins': ['Poppins' , 'Alice' , 'Verdana' ,'sans-serif'],
        'anonymous': ['Anonymous Pro' , 'Poppins' , 'mono' ,'sans-serif']
      },
      colors: {
        'primary': '#E25822;',
        'primary-background': '#EC926F;',
        'primary-dark': '#7E3010;',
        'secondary': '#F2A51D;',
        'secondary-background': '#F6C165;',
        'tertiary': '#99C24D;',
        'tertiary-background': '#B9D585;',
        'textDark': '#111111',
        'textWhite': '#FCFCFA',
      },
    },
  },
  plugins: [],
}

