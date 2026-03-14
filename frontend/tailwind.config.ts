import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#1F2937",
        accent: "#6366F1",
        surface: "#F9FAFB"
      }
    }
  },
  plugins: []
}

export default config