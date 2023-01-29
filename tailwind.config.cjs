/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        mailboxPreview: "url('/mailboxPreview.webp')",
        mailboxDesktop: "url('/mailboxDesktop.webp')",
        mailboxMobile: "url('/mailboxMobile.webp')",
        mailboxDesktopGif: "url('/mailboxDesktop.gif')",
        mailboxMobileGif: "url('/mailboxMobile.gif')",
        mailboxJson: "url('/mailboxJson.webp')",
        travelPreview: "url('/travelPreview.webp')",
        travelDesktop: "url('/travelDesktop.webp')",
        travelMobile: "url('/travelMobile.webp')",
        todoListPreview: "url('/todoListPreview.webp')",
        todoListMobile: "url('/todoListMobile.webp')",
        todoListMobileGif: "url('/todoListMobile.gif')",
        realEstatePreview: "url('/realEstatePreview.webp')",
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
        contact: "#161B22",
      }),
      dropShadow: {
        barTittle: "0 0 14px rgba(44, 102, 195, 0.5)",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif", "Segoe UI", "Ubuntu"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
