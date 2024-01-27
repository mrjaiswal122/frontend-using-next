import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "very-dark-blue":"hsl(226, 43%, 10%)",
        "Dark-blue":"hsl(235, 46%, 20%)",
        "Desaturated-blue":"hsl(235, 45%, 61%)",
        "Pale-Blue":"hsl(236, 100%, 87%)",
        "Blue":"hsl(246, 80%, 60%)",
        "work":"hsl(15, 100%, 70%)",
        "play":"hsl(195, 74%, 62%)",
        "study":"hsl(348, 100%, 68%)",
        "exercise":"hsl(145, 58%, 55%)",
        "social":"hsl(264, 64%, 52%)",
        "self care":"hsl(43, 84%, 65%)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
