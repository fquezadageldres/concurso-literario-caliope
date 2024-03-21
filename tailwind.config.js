/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screen: {
      'xs': '360px',
      'sm': '640px',
      'md': '900px',
      'lg': '1024px',
      'xl': '1360px',
    },
    colors: {
      lText: "#4e4e4e",
      lDarkGreen: "#1b232e",
      lGreen: "#004c45",
      lYellow: "#ffcc29",
      lLightGreen: "#64a848",

    },
    boxShadow: {
      'medium': '0 2px 5px 0 rgb(0,0,0,0.16), 0 2px 5px 0 rgb(0,0,0,0.12)'
    }
  },
  plugins: [],
}

