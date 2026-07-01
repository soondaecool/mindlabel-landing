/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F5F7F2',
          100: '#E7EDE0',
          200: '#CFDBC2',
          300: '#B0C29F',
          400: '#93AD7E',
          500: '#7A9463',
          600: '#64794F',
          700: '#4F6140',
          800: '#3F4D34',
          900: '#2E3627',
        },
        cream: {
          50: '#FDFBF6',
          100: '#F7F2E9',
        },
        ink: {
          600: '#5B6156',
          800: '#33362F',
        },
        weather: {
          sunny: '#F3C56B',
          cloudy: '#B7C2CB',
          rainy: '#8CB3C9',
          windy: '#C9B7DA',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
