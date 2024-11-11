import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      colors: {
        primary: "#115934",
        secondary: "#6c757d",
        primary2: "#D2B48C",
      },
    },
  },
  plugins: [],
} satisfies Config;
