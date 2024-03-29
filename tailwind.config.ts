import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#292B32",
        light: "#F7F7F8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      clipPath: {
        "corner-top-right": "polygon(0 0, 100% 0, 100% 100%)",
        "corner-bottom-right": "polygon(0 0, 100% 0, 100% 100%)",
        "corner-top-left": "polygon(0 0, 100% 100%, 0 100%)",
        "corner-bottom-left": "polygon(0 0, 100% 100%, 0 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
