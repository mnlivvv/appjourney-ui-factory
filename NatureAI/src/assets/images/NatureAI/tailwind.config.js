/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nature': {
          'green': {
            light: '#a3d9a5',
            DEFAULT: '#6fb873',
            dark: '#4a9b4f',
          },
          'brown': {
            light: '#d3bc8d',
            DEFAULT: '#a08555',
            dark: '#6d5a36',
          },
          'blue': {
            light: '#a3d9e9',
            DEFAULT: '#68b8d8',
            dark: '#3d92b5',
          },
          'tech': {
            light: '#9eaeff',
            DEFAULT: '#6478ff',
            dark: '#3c4fd9',
            accent: '#00f5d4',
          }
        },
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        'organic': '40% 60% 70% 30% / 40% 50% 60% 50%',
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'leaf': '50% 50% 30% 70% / 50% 50% 70% 60%',
      },
      backgroundImage: {
        'organic-pattern': "url('/src/assets/images/leaf-veins.jpg')",
        'tech-pattern': "url('/src/assets/images/tech-network-blue.jpg')",
      },
    },
  },
  plugins: [],
}