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
        barTittle: "#2C66C3",
      }),
      dropShadow: {
        barTittle: "0 0 14px rgba(44, 102, 195, 0.5)",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif", "Segoe UI", "Ubuntu"],
    },
  },
  plugins: [],
};
