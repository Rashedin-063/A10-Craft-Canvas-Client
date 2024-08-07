/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],

  theme: {
    fontFamily: {
      fanwood: "'Fanwood Text', serif",
      handlee: "'Handlee', cursive",
    },
    extend: {
      colors: {
        'warm-coral': '#FF6F69',
        'deep-plum': '#6D28C9',
        cream: '#FFF5E1',
        'light-cream': '#FFFFF6',
        'charcoal-gray': '#333333',
      },
      
    },
  },
  plugins: [require('daisyui')],
};
