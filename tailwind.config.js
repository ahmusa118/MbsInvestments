/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/background.jpg')",
        'gradient-bluish-green-black': 'linear-gradient(to bottom, #00C6FF 0%, #00B2FF 50%, #000000 100%)'
      },
      fontFamily: {
        'louis': ['louis', 'sans-serif'],
        'protest':['protest','sans-serif'],
        'netflixl':['Netflixlight','sans-serif'],
        'netflixm':['Netflixmedium','sans-serif'],
        'netflixb':['Netflixbold','sans-serif'],
      }
    },
  },
  plugins: [],
}