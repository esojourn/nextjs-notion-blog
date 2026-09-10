// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')

/**
 * 站点配色方案
 * ------------------------------------------------------------------
 * primary — 赤陶橙（主色，500 = #cd571b）：链接、按钮、强调、焦点态
 * accent  — 深青（辅色，主色的近似互补）：行内代码、次级强调，用量克制
 * gray    — 暖中性灰（色相与主色同源，低饱和）：背景、正文、边框
 * ------------------------------------------------------------------
 */
const primary = {
  50: '#fef6ee',
  100: '#fce9d6',
  200: '#f8cdaa',
  300: '#f1a874',
  400: '#e87c3d',
  500: '#cd571b',
  600: '#b54612',
  700: '#95370f',
  800: '#772d10',
  900: '#5e2612',
  950: '#341206',
}

const accent = {
  50: '#f0f9f9',
  100: '#daf1f0',
  200: '#b3e0de',
  300: '#84c8c4',
  400: '#47aeac',
  500: '#2a9192',
  600: '#1d777c',
  700: '#195f64',
  800: '#174a4f',
  900: '#173c40',
  950: '#0a2327',
}

const gray = {
  50: '#fbfaf8',
  100: '#f7f5f2',
  200: '#ede7e3',
  300: '#dad3cd',
  400: '#aca19a',
  500: '#7a6e66',
  600: '#655a53',
  700: '#4c433e',
  800: '#332d28',
  900: '#201b18',
  950: '#100d0b',
}

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      colors: {
        primary,
        accent,
        gray,
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.600') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.accent.600'),
            },
            blockquote: {
              borderLeftColor: theme('colors.primary.300'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: `${theme('colors.primary.300')}`,
              },
              code: { color: theme('colors.primary.300') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.accent.300'),
            },
            blockquote: {
              borderLeftColor: theme('colors.primary.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
