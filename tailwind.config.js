// const defaultTheme = require("tailwindcss/defaultTheme");
import defaltTheme from "tailwindcss/defaultTheme";

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,css,scss}"],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%, 100%": { width: "0%" },
          "30%, 70%": { width: "100%" },
        },
        blink: {
          "0%": {
            opacity: 0,
          },
        },
        "rotate-loader": {
          "0%": {
            transform: "rotate(0deg)",
            strokeDashoffset: "360%",
          },
          "100%": {
            transform: "rotate(360deg)",
            strokeDashoffset: "-360%",
          },
        },
        colors: {
          lightBlue: "var(--color-light-blue)",
          borderBlue: "var(--color-border-blue)",
          searchBarBlue: "var(--color-search-bar-blue)",
          deepBlue: "var(--color-deep-blue)",
          darkBlue: "var(--color-dark-blue)",
          buttonInitialBackground: "var(--button-initial-background)",
          buttonHoverBackground: "var(--button-hover-background)",
        },
      },
      screens: {
        touch: { raw: "only screen and (pointer: coarse)" },
      },
      fontFamily: {
        sans: ["Open Sans", ...defaltTheme.fontFamily.sans],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
