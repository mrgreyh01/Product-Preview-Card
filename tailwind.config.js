/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./images/**/*"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        fraunces: ["Fraunces"],

      },
      colors: {
        darkCyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        veryDarkBlue:" hsl(212, 21%, 14%)",
        darkGrayishBlue:"hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)"
      },
    },
  },
  plugins: [],
}