/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      'hero-dark': "url('/img/clavier.jpg')",
      'hero-light': "url('/img/desktop-light.jpg')",
    },
    fontFamily: {
      title: ['Nothing You Could Do'],
      montserrat: ['Montserrat'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@xpd/tailwind-3dtransforms'),
    require('daisyui'),
  ],
  daisyui: { themes: ['light', 'dark'] },
}
