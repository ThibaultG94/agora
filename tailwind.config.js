/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8fafc",
          900: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};
