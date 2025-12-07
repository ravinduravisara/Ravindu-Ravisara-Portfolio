/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "badge-pop": {
          "0%": { opacity: 0, transform: "scale(0.8) translateY(4px)" },
          "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "fade-in-up-slow": "fade-in-up 0.9s ease-out forwards",
        "float-slow": "float 7s ease-in-out infinite",
        "badge-pop": "badge-pop 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
