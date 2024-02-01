/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        BrightTurquoise: "#00FFB8",
        SelectiveYellow: "#ffb200",
        primary: {
          DEFAULT: "#4361ee",
          light: "#eaf1ff",
          "dark-light": "rgba(67,97,238,.15)",
        },
      },
    },
  },
  plugins: [],
};
