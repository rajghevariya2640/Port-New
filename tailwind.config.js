/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/*.{js,ts,jsx,tsx}",
    "./src/Pages/Home/*.{js,ts,jsx,tsx}",
    "./src/Pages/Home/Sections/*.{js,ts,jsx,tsx}",
    "./src/Pages/About/*.{js,ts,jsx,tsx}",
    "./src/Pages/About/Sections/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "0.75rem",
    },
    extend: {
      colors: {
        primary: { 50: "#1EEBB4", 100: "#0C464E" },
        secondary: "#FFD55B",
        "cstm-blue": {
          50: "#081D34",
          100: "#0d192a",
        },
        "light-secondary": "rgba(255, 213, 91, 0.2)",
        cstmGrey: {
          0: "rgba(0,0,0,0.5)",
          50: "#8FA8BD",
          100: "#CFDDE8",
        },
      },
      screens: {
        xs: "100%",
        sm: "576px",
        md: "768px",
        lg: "960px",
        xl: "1140px",
        xxl: "1320px",
        "3xl": "1536px",
      },
      backgroundImage: {
        HomeBanner: "url('/src/assets/image/Home/png/Banner.jpeg')",
        " ": "url('/src/assets/image/Home/png/TestiBg.png')",
        video: "url('/src/assets/image/Home/png/VideoBg.png')",
        contact: "url('/src/assets/image/Home/png/ContactBg.png')",
        footerBg: "url('/src/assets/image/Home/png/FooterBG.png')",
        footerImg: "url('/src/assets/image/Home/png/FooterImage.jpeg')",
        subHead: "url('/src/assets/image/Home/svg/subHeadBg.svg')",
        AboutBanner: "url('/src/assets/image/About/png/AboutBg.png')",
        AboutVideo: "url('/src/assets/image/About/png/VideoBg.png')",
      },
      boxShadow: {
        btn: "-1px -1px 4px #114546, 4px 4px 9px #070618, 0px 0px 7px #0E4D4E",
        btnHover:
          "inset -10px -10px 4px #04FFBC, inset 4px 4px 9px #005F2C, inset 10px 5px 7px #081D34",
        footerBtnShadow:
          "inset -10px -10px 4px #04FFBC, inset 4px 4px 9px #005F2C, inset 0px 0px 7px #000000",
      },
      fontFamily: {
        syne: "Syne",
        dm: "DM Sans",
      },
      animation: {
        fadeDown: "fadeDown 0.3s linear",
        rotate: "rotate 20s linear infinite",
        pulse: "pulse 1.5s infinite ease-in-out",
        scrollTxt: "scrollTxt 20s linear infinite",
        slide: "slide 1s linear",
        fade: "fade 2s ease-in-out",
        loaderLine: "loaderLine 1s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeDown: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg) translate(-50%, -50%)",
          },
          "100%": {
            transform: "rotate(360deg) translate(-50%, -50%)",
          },
        },
        pulse: {
          "0%": {
            transform: `scale(1)`,
          },
          "100%": {
            opacity: "0",
            transform: `scale(1.75)`,
          },
        },
        scrollTxt: {
          "0%": {
            transform: `translateX(0)`,
          },
          "100%": {
            transform: `translateX(-100%)`,
          },
        },
        slide: {
          "0%": {
            maxHeight: `40px`,
          },
          "100%": {
            maxHeight: `100%`,
          },
        },
        fade: {
          "0%": {
            opacity: "1",
          },
          "80%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        loaderLine: {
          "0%": {
            transform: `scaleX(0.1)`,
          },
          "100%": {
            transform: `scaleX(2)`,
          },
        },
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
