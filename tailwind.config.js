/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#3E3D3F",
        "primary": "#4E7B8A",
        "green": "#B7E48A",
        "blue": "#00AAD9",
        "dark-blue": "#1774B8",
        "base": "#F1FBFF",
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}

