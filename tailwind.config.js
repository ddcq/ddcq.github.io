const daisyThemes = require('daisyui/src/theming/themes')
const fonts = {
  aqua: "'Agbalumo', system-ui",
  dark: "'Montserrat Variable', system-ui",
  synthwave: "'Courier Prime', monospace"
}
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
      a: "url('/img/ia/a.webp')",
      b: "url('/img/ia/b.webp')",
      c: "url('/img/ia/c.webp')",
      d: "url('/img/ia/d.webp')",
      af1: "url('/img/af/avion1.jpg')",
      af2: "url('/img/af/avion2.jpg')",
      af3: "url('/img/af/avion3.jpg')",
      cockpit: "url('/img/cockpit.jpg')",
    },
    fontFamily: {
      title: ['Nothing You Could Do']
    },
  },
  plugins: [
    require('@xpd/tailwind-3dtransforms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('tailwindcss-3d'),
    require("tailwind-fluid-typography"),
  ],
  daisyui: {
    styled: true,
    themes: [themes],
   },
}
