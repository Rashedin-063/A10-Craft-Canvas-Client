/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-coral': '#FF6F61',
        'soft-mint': '#98FF98',
        'sunny-yellow': '#F7E7A2',
        'sky-blue': '#87CEEB',
        'deep-plum': '#6D28D9',
        'light-gray': '#F5F5F5',
        cream: '#FFF5E1',
        'charcoal-gray': '#333333',
      },
    },
  },
  plugins: [require('daisyui')],
};
