/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryButton: '#739900',
        primaryButtonHover: '#608000',
      },
      backgroundImage: {
        'landing-top': "url('/src/assets/topBarImg.jpg')",
      },
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-120px)' },
        },
      },
      animation: {
        moveUp: 'moveUp 0.5s ease-in-out 1 forwards',
      },
    },
  },
  plugins: [],
};
