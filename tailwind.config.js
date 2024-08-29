/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        nerko: ["Nerko One", "sans-serif"],
      },
      animation: {
        flash: "flash 300ms infinite",
      },
      keyframes: {
        flash: {
          "0%, 24%": {
            color: "#fb6b6c",
          },
          "25%, 49%": {
            color: "#44c9e9",
          },
          "50%, 74%": {
            color: "#ffba33",
          },
          "75%, 99%": {
            color: "#42ceb9",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
