module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        notoserif: ["Noto Serif JP"],
        notosans: ["Noto Sans JP"]
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
      scale: ["hover", "focus"]
    },
  },
  plugins: [],
};
