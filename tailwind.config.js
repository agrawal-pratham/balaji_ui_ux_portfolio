/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 60s linear infinite",
        marquee2: "marquee2 60s linear infinite",
        "increase-width": "increase-width 2s 3s ease",
      },
      keyframes: {
        "increase-width": {
          "0%": { width: "0" },
          "100%": { width: "340px" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "bg-color": "#191919",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lato: "var(--font-lato)",
        montserrat: "var(--font-montserrat)",
      },
      cursor: {
        default: "url(/images/cursor.svg),auto",
        pointer: "url(/images/pointer.svg),auto",
      },
      colors: {
        active: "#2C6FFF",
        inactive: "#9F9FAD",
        "bg-color": "#191919",
        "border-color": "#343434",
      },
    },
  },
  plugins: [],
};
