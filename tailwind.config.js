const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
  colors:{
    transparent: 'transparent',
    current: 'currentColor',
    'white': '#ffffff',
    'purple': '#3f3cbb',
    'midnight': '#121063',
    'metal': '#565584',
    'tahiti': '#3ab7bf',
    'silver': '#ecebff',
    'bubble-gum': '#ff77e9',
    'bermuda': '#78dcca',
      'DarkBlur': '#0F172A',
      'link' : '#61dafb',
      "arun":"#0E87C2",
      
  },
  extend: {},
},
plugins: [],
});
  
