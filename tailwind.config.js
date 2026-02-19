// tailwind.config.js
const { heroui } = require('@heroui/react'); // Ensure HeroUI is correctly imported

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}', // HeroUI styles
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Enable dark mode support
  plugins: [heroui()], // Integrate HeroUI's Tailwind plugin
};