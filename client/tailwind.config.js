/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FDFBF7",
        dark: "#1A1A1A",
        primary: "#2A2A2A",
        accent: "#8B5CF6", // Lavender/Purple for support
        accentHover: "#7C3AED",
        softGray: "#F2F0E9",
      },
      fontFamily: {
        serif: ['"DM Serif Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.08)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        floatDelayed: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "floatDelayed 7s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
