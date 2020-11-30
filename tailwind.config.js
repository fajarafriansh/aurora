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
          3: '#d77c30',
          2: '#fa9f42',
          1: '#fbbe70',
        },
        grayscale: {
          8: '#202327',
          7: '#272a30',
          6: '#2e3238',
          5: '#5c6470',
          4: '#9fa2a8',
          3: '#d8dadf',
          2: '#e9ebed',
          1: '#ffffff',
        },
        semantic: {
          red: '#ff4460',
          blue: '#3ec1f9',
          green: '#6de079',
          yellow: '#fcc93f',
        },
        dark: '#1d2023',
        light: '#cdcfd4',
      },
      spacing: {
        0.5: '2px',
        14: '3.5rem',
        17: '4.25rem',
        18: '4.5rem',
        22: '5.5rem',
        34: '8.5rem',
        36: '9rem',
        38: '9.5rem',
        42: '10.5rem',
        68: '17rem',
        72: '18rem',
        100: '25rem',
      },
      borderWidth: {
        3: '3px',
      },
      fontSize: {
        '18xl': '12rem',
        '14xl': '10rem',
        '12xl': '8rem',
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
        inter: 'Inter',
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
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(10px)',
      blur20: 'blur(20px)',
    },
    darkSelector: '.dark-mode',
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.grayscale.8'),
          a: {
            color: theme('colors.primary.2'),
            '&:hover': {
              color: theme('colors.primary.3'),
            },
          },
        },
      },
      dark: {
        css: {
          color: theme('colors.grayscale.2'),
          a: {
            color: theme('colors.primary.1'),
            '&:hover': {
              color: theme('colors.primary.2'),
            },
          },
          h1: {
            color: theme('colors.grayscale.2'),
          },
          h2: {
            color: theme('colors.grayscale.2'),
          },
          h3: {
            color: theme('colors.grayscale.2'),
          },
          h4: {
            color: theme('colors.grayscale.2'),
          },
          h5: {
            color: theme('colors.grayscale.2'),
          },
          h6: {
            color: theme('colors.grayscale.2'),
          },
          strong: {
            color: theme('colors.grayscale.2'),
          },
          code: {
            color: theme('colors.grayscale.3'),
          },
          figcaption: {
            color: theme('colors.grayscale.3'),
          },
        },
      },
    }),
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'focus',
      'responsive',
    ],
    borderColor: [
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'focus',
      'focus-within',
      'responsive',
    ],
    textColor: [
      'dark',
      'dark-hover',
      'dark-active',
      'hover',
      'focus',
      'active',
      'responsive',
    ],
    filter: ['responsive', 'hover',],
    backdropFilter: ['responsive'],
    typography: ['responsive', 'dark',],
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwindcss-dark-mode')(),
    require('@tailwindcss/typography'),
  ],
}
