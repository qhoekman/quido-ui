/* eslint-disable no-undef */
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.blue[500],
          fg: colors.white
        },
        secondary: {
          DEFAULT: colors.indigo[500],
          fg: colors.white
        },
        danger: {
          DEFAULT: colors.red[500],
          fg: colors.white
        },
        muted: {
          DEFAULT: colors.neutral[200],
          fg: colors.neutral[900]
        },
        input: colors.neutral[400],
        foreground: colors.neutral[900],
        background: colors.neutral[50],
        ring: colors.blue[400],
        card: {
          DEFAULT: colors.neutral[50],
          fg: colors.neutral[900]
        },
        popover: {
          DEFAULT: colors.neutral[50],
          fg: colors.neutral[900]
        }
      }
    }
  },
  plugins: []
}
