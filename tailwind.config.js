export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      boxShadow:{
        'custom':'1px 3px 5px rgba(0,0,0,0.1)'
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      screens: {
        custom720: "720px",
      },
    },
  },
  plugins: [],
};
