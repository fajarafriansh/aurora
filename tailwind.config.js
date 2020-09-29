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
      },
      spacing: {
        '100': '25rem',
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
