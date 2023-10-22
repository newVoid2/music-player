/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 15px 30px 5px rgba(0, 0, 0, 0.3',
        '4xl': '0 5px 30px rgba(0, 0, 0, 0.5)',
      },
      height: {
        '128': '32rem',
      },
      width: {
        '100': '25rem',
      }
    },
  },
  plugins: [],
}

