/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        darkCyan: 'hsl(161, 100%, 44%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
        primary: {
        "50":"hsl(161, 100%, 97%",
        "100":"hsl(161, 95%, 93%)",
        "200":"hsl(161, 97%, 87%)",
        "300":"hsl(161, 96%, 78%)",
        "400":"hsl(161, 94%, 68%)",
        "500":"hsl(161, 91%, 60%)",
        "600":"hsl(161, 83%, 53%)",
        "700":"hsl(161, 76%, 48%)",
        "800":"hsl(161, 71%, 40%)",
        "900":"hsl(161, 64%, 33%)"}
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'scanner-cover': "url('./assets/images/peaks.svg')",
        'scanner-cover-light': "url('./assets/images/light-peaks.svg')"
      }
    },
  },
  plugins: [],
}
