import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.blue[500],
          fg: colors.white,
        },
        secondary: {
          DEFAULT: colors.indigo[500],
          fg: colors.white,
        },
        danger: {
          DEFAULT: colors.red[500],
          fg: colors.white,
        },
        input: colors.gray[200],
        foreground: colors.gray[900],
        background: colors.gray[100],
        ring: colors.blue[400],
      },
    },
  },
  plugins: [],
};
