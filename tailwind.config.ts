import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3563E9",
        stonedark: "#787878",
        stonelight: "#90A3BF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
