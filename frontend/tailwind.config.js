/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'bgpurple': {
        5: '#e7e2f9',
        10: '#d8cefb',
        50: '#cca0fe',
        100: '#9f89b9',
        150: '#201825',
        300: '#605271',
        700: '#26222e',
        800: '#1f1c25',
        900: '#131117'
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '0.5px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [],
}
