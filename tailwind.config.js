/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6B6B',
        'secondary': '#4ECDC4',
        'accent-1': '#FFE66D',
        'accent-2': '#7A77FF',
        'accent-3': '#FF9F69',
        'bg-light': '#F7F9FC',
        'text-dark': '#2D3748',
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'bounce-short': 'bounce 0.5s ease-in-out 2',
      }
    },
  },
  plugins: [],
}