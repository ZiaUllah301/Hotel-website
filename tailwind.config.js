/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        '0': '0',
        '10': '0.1',
        '20': '0.2',
        // Add more as needed
      },
    },
  },
  plugins: [],
}

