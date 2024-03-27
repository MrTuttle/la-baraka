import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
        },
        appear: {
          "0%": { opacity: "0" },
          // "50%": { opacity: ".2" },
          "100%": { opacity: "1" },
        },
        appearpage: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          // "50%": { opacity: ".2" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        appear: "appear 4s cubic-bezier(0.4, 0, 0.6, 1)",
        appearpage: "appearpage 0.5s cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
