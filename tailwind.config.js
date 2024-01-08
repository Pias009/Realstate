module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          300: "#e3e3e7",
          500: "#999999",
          600: "#7f7f7f",
          700: "#666666",
          800: "#4c4c4c",
          900: "#141414",
          "900_02": "#191919",
          "900_00": "#26262600",
          "900_01": "#262626",
          "900_00_01": "#19191900",
        },
        yellow: { A400: "#ffe500" },
        deep_purple: {
          A100_00: "#a584f900",
          A100: "#a584f9",
          A200: "#6f3bf6",
          A200_00: "#6f3bf600",
        },
        white: { A700_19: "#ffffff19", A700: "#ffffff" },
        blue_gray: { 900: "#333333" },
      },
      fontFamily: { urbanist: "Urbanist" },
      boxShadow: {
        bs1: "0px 0px  1px 8px #191919",
        bs: "0px 0px  1px 10px #191919",
      },
      backgroundImage: {
        gradient: "linear-gradient(156deg ,#6f3bf6,#6f3bf600)",
        gradient1: "linear-gradient(154deg ,#262626,#26262600)",
        gradient2: "linear-gradient(90deg ,#191919,#19191900)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
