/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#0f0822",
        secondary: "#AD00FF",
        ironShadowColor: "#6e7e8433",
        bronzeShadowColor: "#441C27",
        goldShadowColor: "#86582F",
        platinumShadowColor: "#2B7692",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        glow: ["0 0px 150px 10px"],
      },
    },
  },
  plugins: [],
};
