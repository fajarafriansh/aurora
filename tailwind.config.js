module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          '3': '#d77c30',
          '2': '#fa9f42',
          '1': '#fbbe70',
        },
        grayscale: {
          '8': '#202327',
          '7': '#272a30',
          '6': '#2e3238',
          '5': '#5c6470',
          '4': '#9fa2a8',
          '3': '#d8dadf',
          '2': '#e9ebed',
          '1': '#ffffff',
        },
        semantic: {
          'red': '#ff4460',
          'blue': '#3ec1f9',
          'green': '#6de079',
          'yellow': '#fcc93f',
        },
        'dark': '#1d2023',
      },
      spacing: {
        '0.5': '2px',
        '14': '3.5rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '34': '8.5rem',
        '36': '9rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '100': '25rem',
      },
      borderWidth: {
        '3': '3px',
      },
      fontSize: {
        '62': '62px',
        '48': '48px',
        '38': '38px',
        '36': '36px',
        '32': '32px',
        '28': '28px',
        '26': '26px',
        '24': '24px',
        '21': '21px',
      },
      fontFamily: {
        'inter': 'Inter',
      },
      letterSpacing: {
        'little-wide': '.01em',
      },
      inset: {
        '1/2': '50%',
      },
      zIndex: {
        '-10': '-10',
      },
    },
    container: {
      padding: {
        default: '1rem',
        md: '3rem',
      },
    },
    filter: {
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
  },
  variants: {
    filter: ['responsive', 'hover'],
    backdropFilter: ['responsive'],
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
