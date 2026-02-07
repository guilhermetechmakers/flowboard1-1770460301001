/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(11, 99, 255)",
          hover: "rgb(9, 79, 200)",
          foreground: "rgb(255, 255, 255)",
        },
        accent: "rgb(23, 185, 120)",
        destructive: "rgb(224, 36, 36)",
        warning: "rgb(255, 176, 32)",
        background: "rgb(255, 255, 255)",
        surface: "rgb(246, 248, 250)",
        foreground: "rgb(11, 27, 43)",
        "foreground-secondary": "rgb(90, 106, 120)",
        muted: "rgb(230, 233, 238)",
        border: "rgb(230, 233, 238)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        hero: ["48px", { lineHeight: "1.2" }],
        "2xl": ["32px", { lineHeight: "1.2" }],
        xl: ["20px", { lineHeight: "1.2" }],
        base: ["16px", { lineHeight: "1.5" }],
        sm: ["14px", { lineHeight: "1.5" }],
        xs: ["12px", { lineHeight: "1.5" }],
      },
      borderRadius: {
        input: "6px",
        card: "8px",
        button: "6px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(11, 27, 43, 0.08)",
        "card-hover": "0 4px 12px rgba(11, 27, 43, 0.12)",
        glow: "0 0 0 2px rgba(11, 99, 255, 0.3)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out forwards",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        shimmer: "shimmer 1.5s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      transitionDuration: {
        DEFAULT: "200ms",
        slow: "300ms",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
