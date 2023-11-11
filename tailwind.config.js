/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  /* theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  }, */
  plugins: [require('daisyui')],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
  }
};
module.exports = config;