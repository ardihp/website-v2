import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      fredoka: ["var(--font-fredoka)"],
      manrope: ["var(--font-manrope)"],
    },
    extend: {
      colors: {
        primary: "#fdf9eb",
        secondary: "#470A00",
        tertiary: "#694500",
      },
      keyframes: {
        "music-audio": { from: { height: "4px" }, to: { height: "10px" } },
      },
      animation: {
        "music-audio": "music-audio 0.5s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
