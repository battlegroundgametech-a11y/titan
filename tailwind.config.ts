import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        titan: {
          bg: "#06070B",
          surface: "#0F1118",
          card: "#151823",
          muted: "#A5ADBA",
          accent: "#6E5BFF"
        }
      },
      borderRadius: {
        titan: "22px"
      }
    }
  },
  plugins: []
};

export default config;
