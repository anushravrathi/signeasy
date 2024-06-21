/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        red: "#ff0101",
        silver: "#bebebe",
        gold: {
          "100": "#ffd336",
          "200": "#ffc700",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        pattaya: "Pattaya",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      lg: "1.125rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "29xl": "3rem",
      "10xl": "1.813rem",
      "19xl": "2.375rem",
      base: "1rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
