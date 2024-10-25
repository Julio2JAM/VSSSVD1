/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      boxShadow: {
        'inset-border': 'inset 0 -1px #ccc',
      }
    },
  },
  plugins: [],
}