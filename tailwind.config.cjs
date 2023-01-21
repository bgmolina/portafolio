/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        position: "#2CB67D",
      },

      backgroundColor: (theme) => ({
        ...theme("colors"),
        sidebar: "#1E293B",
      }),
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif", "Segoe UI", "Ubuntu"],
    },
  },
  plugins: [],
};
