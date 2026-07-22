/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["General Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#f1592a",
          fg: "#ffffff",
        },
        secondary: {
          DEFAULT: "#53a0c6",
          fg: "#ffffff",
        },
        danger: {
          DEFAULT: "#ef4444",
          fg: "#ffffff",
        },
        muted: {
          DEFAULT: "#ebf4f8",
          fg: "#4d6972",
        },
        input: "#e8e8ec",
        foreground: "#1b333e",
        background: "#ffffff",
        ring: "rgba(83, 160, 198, 0.4)",
        card: {
          DEFAULT: "#ffffff",
          fg: "#1b333e",
        },
        popover: {
          DEFAULT: "#ffffff",
          fg: "#1b333e",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
