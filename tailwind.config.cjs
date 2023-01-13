/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: primaryColor,
        secondary: "#2E3138",
        textPrimary: "#CCCCCC",
        textSecondary: "#FBFBFB",
        codePaneNavbar: "#202327",
        codePaneMainWindow: "#15181E",
      },
    },
  },
  plugins: [],
};
