/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131313",
        surface: "#1c1b1b",

        primary: "#adc6ff",

        "on-background": "#e5e2e1",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#c1c6d7",

        outline: "#8b90a0",
        "outline-variant": "#414755",
      },

      maxWidth: {
        "container-max": "1100px",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      spacing: {
        "section-padding": "120px",
      },

      backdropBlur: {
        xl: "24px",
      },
    },
  },
  plugins: [],
}