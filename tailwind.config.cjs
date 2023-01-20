/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        //darkPrimary: "#1E293B",
        //darkSecondary: "#293548",
        position: "#2CB67D",
      },

      backgroundColor: (theme) => ({
        ...theme("colors"),
      }),
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif", "Segoe UI", "Ubuntu"],
    },
  },
  plugins: [],
};
