const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      green: colors.green,
      main: {
        DEFAULT: "#f3f4f6",
        font: "#131929",
        icon: "#6a7280",
        hover: "#e4e7eb",
        light: "#9ea4b0",
        medium: "#4b5563"
      },
      ora: colors.orange,
      orange: {
        light: "#ff7a85",
        DEFAULT: "#ff525d"
      },
      grayish: {
        blue: "#1f3f5b",
        dark: "#c8c8cb",
        darker: "#4b5862",
        "dark-blue": "#25252d"
      }
    },
    borderRadius: {
      'medium': "15%",
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}