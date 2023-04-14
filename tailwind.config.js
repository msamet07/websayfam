/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      text: "rgb(var(--color-text) / <alpha-value>)",
      title: "rgb(var(--color-title) / <alpha-value>)",
      success: "rgb(var(--color-success) / <alpha-value>)",
      background: "rgb(var(--color-background) / <alpha-value>)",
      lang: "rgb(var(--color-lang) / <alpha-value>)",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
    plugins: [],
  },
};
