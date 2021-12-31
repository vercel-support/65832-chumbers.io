const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"'],
        body: ["Poppins"],
        sans: ["Poppins"],
      },
      colors: {
        teal: "#4ef6c7",
        "off-black": "#1b1b1b",
        secondary: "rgba(78, 246, 199, 0.7)",
        tertiary: "rgba(78, 246, 199, 0.4)",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
