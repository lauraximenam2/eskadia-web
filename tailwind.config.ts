import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Purple Theme (Stripe-inspired)
        background: "#0A0D14", // Negro azulado profundo
        foreground: "#F1F3F5", // Blanco suave

        card: {
          DEFAULT: "#12151C", // Card background
          hover: "#1A1E28", // Card hover state
          foreground: "#F1F3F5",
        },

        border: "#1F2937", // Bordes sutiles

        primary: {
          DEFAULT: "#6366F1", // Indigo brillante
          foreground: "#FFFFFF",
          hover: "#4F46E5", // Indigo más oscuro
          light: "#818CF8", // Indigo claro para highlights
        },

        secondary: {
          DEFAULT: "#A78BFA", // Lavanda
          foreground: "#FFFFFF",
          hover: "#9333EA", // Púrpura hover
        },

        accent: {
          DEFAULT: "#10B981", // Verde esmeralda
          foreground: "#FFFFFF",
          hover: "#059669",
        },

        muted: {
          DEFAULT: "#1F2937",
          foreground: "#9CA3AF",
        },

        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
      },

      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        // Shine effect (shimmer en botones)
        shine: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },

        // Gradient shift (texto animado)
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },

        // Scroll infinito (logos)
        "scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },

        // Fade in up (aparición de elementos)
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        // Pulse glow (resplandor sutil)
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },

        // Rotate (borde animado)
        "rotate-border": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },

      animation: {
        shine: "shine 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "scroll-left": "scroll-left 30s linear infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "rotate-border": "rotate-border 3s linear infinite",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
