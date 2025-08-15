/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Forest greens
        'forest': {
          100: '#e6f0e6',
          200: '#c2dabd',
          300: '#9ebe94',
          400: '#76a76b',
          500: '#4d8a43',
          600: '#3d6e36',
          700: '#2e5229',
          800: '#1e371c',
          900: '#0f1b0e',
        },
        // Sky blues
        'sky': {
          100: '#e6f7ff',
          200: '#b8e2ff',
          300: '#8bceff',
          400: '#5dbaff',
          500: '#3aa6ff',
          600: '#2e85cc',
          700: '#236499',
          800: '#174266',
          900: '#0c2133',
        },
        // Warm browns
        'earth': {
          100: '#f5f0e6',
          200: '#e6d9c2',
          300: '#d6c29e',
          400: '#c7ab7a',
          500: '#b79456',
          600: '#927645',
          700: '#6e5934',
          800: '#493c23',
          900: '#251e11',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'fractal-pattern': "url('/src/assets/images/fractal-pattern.jpg')",
      },
    },
  },
  plugins: [],
}