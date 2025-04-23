const purgecss = require('@fullhuman/postcss-purgecss').default;
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    purgecss({
      content: ['./*.html', './assets/js/**/*.js'],
      safelist: ['active', 'show', /^swiper-/] // keep important classes
    }),
    cssnano()
  ]
};
