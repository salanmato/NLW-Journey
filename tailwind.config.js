/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      backgroundImage: {
        pattern: 'url(/bg.png)'
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
  ]
}

