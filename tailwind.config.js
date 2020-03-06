// eslint-disable-next-line import/no-extraneous-dependencies
const { colors } = require('tailwindcss/defaultTheme');

// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          300: '#5cbdd3',
        },
        orange: {
          ...colors.orange,
          500: '#f66900',
        },
        // gray: '',
        // red: '',
        // yellow: '',
        // green: '',
        // teal: '',
        // indigo: '',
        // purple: '',
        // pink: '',
      },
    },
  },
};
