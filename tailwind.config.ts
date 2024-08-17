import { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        "not-mobile": "640px",
      },
      colors: {
        primary: "#F5EDED",
        secondary: "#E2DAD6",
        background: "#7FA1C3",
        mid: "#6482AD",
        tprimary: "#F5EDED",
        "card-background-1": "#363B3C",
        "card-background-2": "#303536",
        "main-background": "white",
        "subscript-background": "#6496FF",
        "divider-color": "rgba(255, 255, 255, 0.2)",
      },
      fontSize: {
        "important-text": "2rem",
        "super-script": ".6rem",
        subscript: ".5rem",
        "super-subscript": ".35rem",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
