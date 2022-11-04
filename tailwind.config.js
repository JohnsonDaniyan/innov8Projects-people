module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
      },
      height: {
        one: "1px",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
    },
  },
};
