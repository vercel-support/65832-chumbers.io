const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [],
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
}
