/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#009ca6', // Green-Blue Turquoise
        'primary-dark': '#007a82',
        secondary: '#e0f2f1', // Light Turquoise for backgrounds
        accent: '#c0a062', // Gold/Bronze for sophistication
      },
      backgroundColor: {
        'primary-light': '#f0fcfc', // Very light turquoise
      }
    },
  },
  plugins: [],
};