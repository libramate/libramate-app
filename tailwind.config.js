// @ts-ignore
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bg: "var(--color-bg)",
      font: "var(--color-font)",
      "accent-font": "var(--color-accent-font)",
      accent: "var(--color-accent)",
      danger: "var(--danger)",
      "btn-hover": "var(--btn-hover)",
      "e-1": "var(--color-bg-elevation-1)",
      "e-1-dark": "var(--color-bg-elevation-1-dark)",
      "e-2": "var(--color-bg-elevation-2)",
      border: "var(--color-border)",
      inherit: "inherit",
      transparent: "transparent",
      "logo-from": "rgba(0,37,145,1) 0%",
      "logo-to": "rgba(0,18,69,1)",
    },
    extend: {
      boxShadow: {
        "elevation-1": "0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.1)",
        "elevation-2": "0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.3)",
      },
      gridTemplateColumns: {
        nav: "repeat(5,20vw)",
        library: "repeat(auto-fill, minmax(9rem,1fr))",
      },
      gridAutoRows: {
        library: "17rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
