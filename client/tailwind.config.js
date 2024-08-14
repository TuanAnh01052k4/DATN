/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: "#007bff",
        indigo: "#6610f2",
        purple:"#6f42c1",
        pink:"#e83e8c",
        red: "#dc3545",
        orange:"#fd7e14",
        yellow:"#ffc107",
       
        teal:"#20c997",
        cyan:"#17a2b8",
        grayDark:"#343a40",
        primary:"#007bff",
        secondary:"#6c757d",
        success:"#28a745",
        info:"#17a2b8",
        warning:"#ffc107",
        danger:"#dc3545",
        light:"#f8f9fa",
        dark:"#221F20",
      },
      height:{
        main_mini_cart: "calc(100vh - 75px - 240px)",
      }
    },
  },
  plugins: [],
}