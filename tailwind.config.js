/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {colors: {
      customSoftblue: 'hsl(215, 51%, 70%)',
      customCyan: 'hsl(178, 100%, 50%)',
      customVeryDarkBlueMainBG: 'hsl(217, 54%, 11%)',
      customVeryDarkBlueCardBG: 'hsl(216, 50%, 16%)',
      customVeryDarkBlueLine: 'hsl(215, 32%, 27%)',
      customWhite: 'hsl(0, 0%, 100%)'
    },
    fontSize: {
      '22': '22px',
      '16': '16px',
      '18': '18px',
    },
    fontWeight: {
      '300': 300,
      '400': 400,
      '600': 600,
    }
  },
  },
  plugins: [],
}

