/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'fest-blue': '#3674B5',
        'fest-blue-light': '#578FCA',
        'fest-cream': '#F5F0CD',
        'fest-yellow': '#FADA7A',
      },
      animation: {
        'bounce-slow': 'bounce-slow 2.5s infinite',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
