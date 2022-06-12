module.exports = {
  mode: "jit", //
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "50%": "calc((100%))",
      },
      height: {
        "50%": "calc((50vw - 25px) * 0.753247)",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill-49": "repeat(auto-fill, minmax(49%, 1fr))",
        "auto-fill-32": "repeat(auto-fill, minmax(32%, 1fr))",
      },
      gridRow: {
        span14: "span 14",
      },
      gridAutoRows: {
        10: "10px",
        "minmax-100": "minmax(100px, auto)",
        "auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
      },
    },
    screens: {
      xs: "280px",
      sm: "320px",
      md: "640px",
      lg: "1024px",
      xl: "1160px",
    },
    fontSize: {
      sm: "12px",
      md: "14px",
      mx: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "22px",
      "3xl": "40px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    colors: {
      blue000: "#CAE2FC",
      blue005: "#75ADFF",
      blue010: "#609BFF",
      blue020: "#3C82FA",
      blue030: "#246FF8",
      blue040: "#195BFA",
      blue050: "#0046F0",
      blue060: "#0F3DDE",
      blue070: "#0038C1",
      blue: "#0056FF",
      gold: "#C19F63",
      green: "#5CC566",
      red: "#FF4B3E",
      orange: "#FE7849",
      yellow: "#FFC428",
      white: "#FFFFFF",
      gray005: "#FAFBFB",
      gray010: "#F5F7F8",
      gray015: "#EFF3F5",
      gray020: "#E7EAEE",
      gray025: "#DFE2E7",
      gray030: "#C9CDD2",
      gray035: "#AEB3B8",
      gray040: "#9EA4AA",
      gray050: "#72787F",
      gray055: "#535960",
      gray060: "#454B50",
      gray065: "#35383C",
      gray070: "#26282B",
      gray080: "#1B1D1F",
      gray085: "#141618",
      gray090: "#131415",
      gray095: "#050505",
      black: "#000",
      transparent: "transparent",
    },
    boxShadow: {
      shadow10: "rgb(0 0 0 / 10%) 2px 2px 8px 0px",
    },
    backgroundImage: {
      checkGray: 'url("../../public/images/icon/check_g.svg")',
      checkWhite: 'url("../../public/images/icon/check_w.svg")',
      checkBlue: 'url("../../public/images/icon/check_b.svg")',
      rectangleGradient:
        'url("../../public/images/icon/rectangle_gradient.svg")',
    },
  },
  variants: {
    extend: {}, // 지정된 속성에만 사용 가능함! 사용할 속성: ['클래스명']
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
