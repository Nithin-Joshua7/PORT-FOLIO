/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        line: "rgba(233,230,222,0.1)",
        ink: {
          DEFAULT: "#0a0a0c",
          2: "#101014",
        },
        bone: {
          DEFAULT: "#e9e6de",
          dim: "#9a968c",
        },
        amber: {
          DEFAULT: "#ffa23e",
          soft: "#ffbf7d",
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [],
};
