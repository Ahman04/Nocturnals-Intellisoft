/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        ambient: "0 30px 80px rgba(0, 0, 0, 0.35)",
      },
      colors: {
        ink: "#07111f",
        mist: "#e8f1ff",
        signal: "#7dd3fc",
        amberglow: "#f4b860",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Manrope"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
