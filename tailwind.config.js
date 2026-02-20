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
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b6b', // Vibrant red-pink
          light: '#ffb3b3',
          dark: '#c9184a',
        },
        secondary: {
          DEFAULT: '#4dabf7', // Bright blue
          light: '#a5d8ff',
          dark: '#1864ab',
        },
        accent: {
          DEFAULT: '#ffd43b', // Yellow
          light: '#fff3bf',
          dark: '#b59f00',
        },
        success: '#51cf66',
        warning: '#ffa94d',
        danger: '#ff6b6b',
        info: '#5c7cfa',
        background: {
          DEFAULT: '#f8fafc',
          vibrant: '#fff0f6',
        },
        foreground: {
          DEFAULT: '#22223b',
          vibrant: '#3a0ca3',
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode support
  plugins: [heroui()], // Integrate HeroUI's Tailwind plugin
};