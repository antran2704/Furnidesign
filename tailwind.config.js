module.exports = {
  theme: {
    extend: {
      colors: {
        dark: "#1E1E1E"
      },
      fontFamily: {
        figeronaThin: ["figeronaThin"],
        figeronaExtraLight: ["figeronaExtraLight"],
        figeronaRegular: ["figeronaRegular"],
        figeronaMedium: ["figeronaMedium"],
        figeronaSemiBold: ["figeronaSemiBold"],
        figeronaBold: ["figeronaBold"],
        figeronaExtraBold: ["figeronaExtraBold"],
        figeronaBlack: ["figeronaBlack"],
        cormorantGaramond: ["'Cormorant Garamond', serif"]
      },
    },
  },
  plugins: [],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
};
