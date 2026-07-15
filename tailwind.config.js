/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Auto dark mode following the OS setting (prefers-color-scheme).
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Warm, slightly green-tinted dark neutrals so dark mode still reads
        // as MindLabel and not a generic slate app. Never pure #000.
        night: {
          950: '#141611', // page background
          900: '#1C1F18', // section / recessed panel
          850: '#24271F', // elevated card
          800: '#2F3328', // border / ring / icon chip
          700: '#3C4133',
        },
        // Muted body text on dark surfaces.
        mist: {
          300: '#C4C7BB',
          400: '#9EA195',
        },
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
          calm: '#B9CBA6',
          cloudy: '#B7C2CB',
          rainy: '#8CB3C9',
          stormy: '#8A93B0',
          windy: '#C9B7DA',
        },
        // "Plus" discovery accent — mirrors the app's --plus indigo tokens
        // (marks premium insight surfaces: influence, precursor, reports).
        plus: {
          50: '#EEF3F8',
          100: '#EAF0F5',
          200: '#CBD8E4',
          300: '#A7BDD3',
          400: '#7E9BBB',
          500: '#5E7A9B',
          600: '#4E6C90',
          700: '#3E5670',
          800: '#32485F',
          900: '#28384A',
        },
      },
      backgroundImage: {
        'sky-fade':
          'linear-gradient(180deg, #FDFBF6 0%, #F3F6EF 55%, #E7EDE0 100%)',
        'plus-fade': 'linear-gradient(135deg, #EAF0F5 0%, #F5F7F2 100%)',
        // Dark-mode counterparts.
        'night-fade':
          'linear-gradient(180deg, #23271D 0%, #1A1D15 55%, #141611 100%)',
        'night-plus-fade':
          'linear-gradient(135deg, #202634 0%, #171A13 100%)',
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
