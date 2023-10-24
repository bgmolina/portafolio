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
        mailboxJson: "url('/mailboxJson.webp')",
        travelPreview: "url('/travelPreview.webp')",
        travelDesktop: "url('/travelDesktop.webp')",
        travelMobile: "url('/travelMobile.webp')",
        todoListPreview: "url('/todoListPreview.webp')",
        todoListMobile: "url('/todoListMobile.webp')",
        realEstatePreview: "url('/realEstatePreview.webp')",
        portafolioPreview: "url('/portafolioPreview.webp')",
        portafolioDesktop: "url('/portafolioDesktop.webp')",
        portafolioMobile: "url('/portafolioMobile.webp')",
        portafolioTablet: "url('/portafolioTablet.webp')",
        wpHomePreview: "url('/wpHomePreview.webp')",
        wpHomeDesktop: "url('/wpHomeDesktop.webp')",
        wpBashDesktop: "url('/wpBashDesktop.webp')",
        wpK8sDesktop: "url('/wpK8sDesktop.webp')",
        wpDbK8sDesktop: "url('/wpDbK8sDesktop.webp')",
      },
      colors: {
        position: "#2CB67D",
        scrollBG: "#293548",
        scrollLine: "rgba(30, 41, 59, 0.5)",
      },
      borderColor: {
        tech: "#293548",
      },
      minWidth: {
        60: "15rem" /* 240px */,
        64: "16rem" /* 256px */,
        72: "18rem" /* 288px */,
        80: "20rem" /* 320px */,
      },
      height: {
        104: "26rem" /* 416px */,
        120: "30rem" /* 480px */,
        122: "32rem" /* 512px */,
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        sidebar: "#1E293B",
        barTittle: "#2C66C3",
        tittleCard: "#293548",
        contact: "#161B22",
        buttonDetailProject: "#14191F",
      }),
      dropShadow: {
        barTittle: "0 0 14px rgba(44, 102, 195, 0.5)",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif", "Segoe UI", "Ubuntu"],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
