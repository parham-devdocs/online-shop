/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(77,116,230,1) 0%, rgba(211,40,252,1) 0%, rgba(188,65,251,1) 0%, rgba(169,85,251,1) 0%, rgba(149,107,251,1) 0%, rgba(96,143,251,1) 0%, rgba(194,59,251,1) 0%, rgba(151,158,253,1) 0%, rgba(0,34,255,1) 0%, rgba(120,137,244,1) 72%, rgba(255,255,255,1) 100%, rgba(96,165,250,1) 100%)",
      },
      animation: {
        move: "move 50s infinite", // Custom animation name
      },
      keyframes: {
        move: {
          "0%": { transform: "translate(0, 0)" },
          "50%": {
            transform: "translate(calc(50vw - 125px), calc(50vh - 125px))",
          },
          "100%": { transform: "translate(0, 0)" },
        },
      },
    },
  },

  plugins: [require("daisyui")],
};
