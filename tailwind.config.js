// Configuration documentation
// https://tailwindcss.com/docs

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './index.html',
      './src/**/*.html',
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    options: {
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
};
