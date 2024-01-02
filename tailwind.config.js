/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "dark": '#2C3535',
        "medium": '#323846',
        "light-gray": '#404349',
        "Hold": '#E8AD0F',
        "Completed": '#289124',
        "Processing": '#249173',
      }
    },
  },
  plugins: [],
};

