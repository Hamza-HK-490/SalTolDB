/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/public/bg1.jpg')",
        'bg2': "url('/public/bg2.jpg')",
        'bg3': "url('/public/bg3.jpg')"
      }

    },
  },
  plugins: [],
}