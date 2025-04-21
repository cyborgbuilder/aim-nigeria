const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    purgecss({
      content: ['./*.html', './assets/js/**/*.js'],
      css: ['./assets/css/nisoz.css'],
      safelist: ['active', 'show', /^swiper-/], // Add class names to keep
    }),
    cssnano()
  ]
};
