/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
      screens: {
        sm: "640px",
        md: "790px",
        lg: "1024px",
        xl: "1160px",
        "2xl": "1536px",
        custom: "1600px",
        xxl: "1600px",
      },
      colors: {
        light: "var(--lightColor)",
        dark: "var(--darkColor)",
        yellow: "var(--yellowColor)",
        "gray-color": "var(--grayColor)",
        "dark-text": "var(--darkTextColor)",
        "danger-color": "var(--dangerColor)",
        "modal-bg-color": "var(--modalBgColor)",
        "hover-card-bg": "var(--hoverCardBg)",
        "dark-gray-color": "var(--darkGrayColor)",
      },
      fontFamily: {
        "body-font": "var(--bodyFont)",
      },
    },
  },
  plugins: [],
};
