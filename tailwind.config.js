module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'black': '#212429',
        'green': '#00A37A',
        violet: {
          '5': '#7048E8',
          '4': '#845EF7',
          '3': '#9775FA',
          '2': '#B197FC',
          '1': '#D0BFFF',
        },
        gray: {
          '5': '#495057',
          '4': '#868E96',
          '3': '#ACB5BD',
          '2': '#DDE2E5',
          '1': '#F8F9FA',
        },
        pickled: {
          '4': '#365164',
          '3': '#4A6274',
          '2': '#5E7483',
          '1': '#728593',
        },
      },
      spacing: {
        '0.5': '2px',
        '100': '25rem',
      },
      borderWidth: {
        '3': '3px',
      },
    },
    container: {
      padding: {
        default: '1rem',
        md: '3rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
