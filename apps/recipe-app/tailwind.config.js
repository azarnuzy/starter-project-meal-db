const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,modules}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'none',

  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat, sans-serif'],
      },
      colors: {
        primary: '#F4D8D2',
        secondary: '#48d0ce',
        danger: '#ee4d64',
      },
    },
  },
};
