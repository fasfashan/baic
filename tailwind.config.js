/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./news/**/*.{html,css,js,jsx,ts,tsx}",
    "./contact/**/*.{html,css,js,jsx,ts,tsx}",
    "./book-a-test-drive/**/*.{html,css,js,jsx,ts,tsx}",
    "./BJ40/**/*.{html,css,js,jsx,ts,tsx}",
    "./X55/**/*.{html,css,js,jsx,ts,tsx}",
    "./about-us/**/*.{html,css,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["HarmonyOS", "sans-serif"],
      },
    },
  },
  plugins: [],
};
