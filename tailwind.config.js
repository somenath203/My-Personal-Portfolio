/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'tiltNeon': ['Tilt Neon'],
        'shantellSans': ['Shantell Sans'],
        'nunito': ['Nunito'],
        'mukta': ['Mukta']
      },
      backgroundImage: {
        'landing-page-image': "url('/src/assets/landingpagebackground.jpg')"
      }
    },
  },
  plugins: [],
}