/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      lxl: "1440px",
    },
    extend: {
      colors: {
        blue: "#0052FE",
        lightBlue: "#EBF2FF",
        medBlue: "#0141CF",
        gray: "#3E424A",
        darkGray: "#0F1629",
        lightGray: "#EFF2F5",
        lightGreen: "#EBF9F4",
        darkGreen: "#0FBA83",
      },
    },
  },
  plugins: [],
};
