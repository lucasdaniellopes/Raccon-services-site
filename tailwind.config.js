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
        emeraldShadowColor: "#054830",
        diamondShadowColor: "#30406E",
        masterShadowColor: "#9142CA",
        grandmasterShadowColor: "#7C2E35",
        challengerShadowColor: "#193E6B",
        bgCheckout: "#140A27",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        glow: ["0 0px 150px 10px"],
        bgGlow: ["0 0px 0px 10px"],
        serverGlow:["0 1px 20px 1px #381265"]
      },
    },
  },
  plugins: [],
};
