const daisyThemes = require('daisyui/src/theming/themes')
const fonts = {
  aqua: "'Agbalumo', system-ui",
  dark: "'Montserrat Variable', system-ui",
  synthwave: "'Courier Prime', monospace",
  cupcake: 'Nothing You Could Do'
}
const themes = {}
for (themeName in daisyThemes) {
  let theme = daisyThemes[themeName]
  if (fonts[themeName]) {
    theme = { ...theme, fontFamily: fonts[themeName] }
    console.log(themeName, theme)
  }
  themes[themeName] = theme
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[color-scheme="dark"]'],
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      title: ['Nothing You Could Do', 'cursive'],
    },
  },
  plugins: [
    require('@xpd/tailwind-3dtransforms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('tailwindcss-3d'),
    require('tailwind-fluid-typography'),
  ],
  daisyui: {
    styled: true,
    themes: [themes],
  },
}
