const daisyThemes = require('daisyui/src/theming/themes')
const fonts = {
  aqua: "'Agbalumo', system-ui",
  dark: "'Montserrat Variable', system-ui",
  synthwave: "'Courier Prime', monospace"
}
console.log(daisyThemes)
const themes = {}
for (themeName in daisyThemes) {
  let theme =  daisyThemes[themeName]
  if(fonts[themeName]) {
    theme = { ...theme, fontFamily: fonts[themeName]}
    console.log(themeName, theme)
  }
  themes[themeName] = theme
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [ 'class', '[color-scheme="dark"]' ],
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      'hero-dark': "url('/img/clavier.jpg')",
      'hero-light': "url('/img/desktop-light.jpg')",
    },
    fontFamily: {
      title: ['Nothing You Could Do']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@xpd/tailwind-3dtransforms'),
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [themes],
   },
}
