/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0e1a",
        "bg-soft": "#0f1424",
        surface: "#141b2e",
        "surface-2": "#1a2237",
        ink: "#eaf0ff",
        muted: "#9aa6c4",
        "muted-2": "#6f7da3",
        brand: "#5b7cff",
        "brand-2": "#8a5bff",
        accent: "#2fd6c6",
        gold: "#ffcf6b",
        line: "rgba(255,255,255,0.08)",
        "line-strong": "rgba(255,255,255,0.16)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "brand-grad":
          "linear-gradient(120deg,#5b7cff 0%,#8a5bff 50%,#2fd6c6 100%)",
        "brand-grad-text":
          "linear-gradient(120deg,#7d9bff 0%,#b48bff 45%,#5fe6d6 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 60px -24px rgba(91,124,255,0.45)",
        soft: "0 20px 50px -20px rgba(0,0,0,0.6)",
        brand: "0 10px 30px -10px rgba(91,124,255,0.7)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(20px,-28px)" },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "float-slow": "float 16s ease-in-out infinite",
        "float-slower": "float 20s ease-in-out infinite reverse",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
