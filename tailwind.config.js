/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#016a6d',
        secondary: '#acaba9',
        accent: '#f8a25e',
      },
      backgroundColor: {
        'primary-light': '#e6f3f3',
      }
    },
  },
  plugins: [],
};