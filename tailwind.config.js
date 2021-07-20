module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      // byKarlenV1: '10px 10px 0px black',
      byKarlenV2: '5px 5px 0px black',
      byKarlenV3: '0px 0px 50px orange',
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
    },
  },
  plugins: [],
};
