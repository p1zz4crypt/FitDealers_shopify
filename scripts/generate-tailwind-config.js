const fs = require("fs");
const tokens = require("../design-tokens.json");

const tailwindConfig = {
  content: ["./**/*.liquid", "./**/*.js"],
  theme: {
    container: {
      center: true,
      padding: tokens.container.padding,
      screens: {
        ...tokens.breakpoints
      }
    },
    extend: {
      colors: tokens.colors,
      spacing: tokens.spacing,
      fontSize: tokens.fontSizes,
      fontFamily: {
        heading: [tokens.fonts.heading],
        body: [tokens.fonts.body]
      },
      screens: tokens.breakpoints
    }
  },
  plugins: []
};

fs.writeFileSync(
  "tailwind.config.js",
  "module.exports = " + JSON.stringify(tailwindConfig, null, 2)
);
