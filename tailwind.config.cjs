/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        cardImage_1: "url('/mailboxPreview.webp')",
        cardImage_2: "url('/travelPreview.webp')",
        cardImage_3: "url('/todoListPreview.webp')",
        cardImage_4: "url('/realEstatePreview.webp')",
        cardImage_5: "url('/')",
        cardImage_6: "url('/')",
        cardImage_7: "url('/')",
        cardImage_8: "url('/')",
        cardImage_9: "url('/')",
        cardImage_10: "url('/')",
      },
      colors: {
        position: "#2CB67D",
      },
      borderColor: {
        tech: "#293548",
      },

      backgroundColor: (theme) => ({
        ...theme("colors"),
        sidebar: "#1E293B",
        barTittle: "#2C66C3",
        tittleCard: "#293548",
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
