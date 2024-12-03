/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "0.625rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      boxShadow: {
        global: "0 1px 10px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        DanaRegular: "Dana Regular",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      spacing: {
        30: "7.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "home-mobile": "url('/public/images/headerBgMobile.webp')",
        "home-desktop": "url('/public/images/headerBgDesktop.webp')",
        "category-right": "url('/public/images/categories/category-right.jpg')",
        "category-left": "url('/public/images/categories/category-left.jpg')",
      },
      animation: {
        "arrow-button": "arrow-button 2s infinite",
      },
      keyframes: {
        "arrow-button": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
