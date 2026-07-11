import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          950: "#0A1F14",
          900: "#0F2E1C",
          800: "#1A4A2E",
          700: "#1E5C38",
          600: "#2D7A4F",
          500: "#3A9660",
          400: "#52B878",
          300: "#7ECFA0",
          200: "#AEE3C4",
          100: "#D6F0E3",
          50:  "#F0FAF5",
        },
        cream: "#F8F6F1",
        sand:  "#EDE8DF",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
      },
    },
  },
  plugins: [],
} satisfies Config;
