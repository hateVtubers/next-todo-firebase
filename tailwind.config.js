module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bright-turquoise': {
          DEFAULT: '#2FF9CC',
          '50': '#E1FEF8',
          '100': '#CEFEF3',
          '200': '#A6FCE9',
          '300': '#7EFBDF',
          '400': '#57FAD6',
          '500': '#2FF9CC',
          '600': '#07E9B7',
          '700': '#05B38C',
          '800': '#047C61',
          '900': '#024637'
        },
        'blue-zodiac': {
          DEFAULT: '#13245F',
          '50': '#4E6EDC',
          '100': '#3D60D8',
          '200': '#274BC5',
          '300': '#213EA3',
          '400': '#1A3181',
          '500': '#13245F',
          '600': '#0A1230',
          '700': '#000102',
          '800': '#000000',
          '900': '#000000'
        },
      },
      width: {
        '17': '68px',
      }
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active'],
    },
  },
  plugins: [],
}
