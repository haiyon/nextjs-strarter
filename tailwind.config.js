const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/*.{js,jsx,ts,tsx}', './pages/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans]
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
};
