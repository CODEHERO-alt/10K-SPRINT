import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg0: "#0B0F19",
        bg1: "#111827",
        textPrimary: "#F9FAFB",
        textSecondary: "#A1A1AA",
        textMuted: "#6B7280"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(99,102,241,0.25), 0 10px 40px rgba(37,99,235,0.18)",
        glowSoft: "0 0 0 1px rgba(99,102,241,0.18), 0 12px 60px rgba(168,85,247,0.10)"
      },
      backgroundImage: {
        page:
          "radial-gradient(1200px 600px at 15% 10%, rgba(59,130,246,0.22), transparent 60%), radial-gradient(900px 500px at 80% 15%, rgba(99,102,241,0.20), transparent 60%), linear-gradient(180deg, #0B0F19 0%, #111827 100%)",
        accentGlow:
          "radial-gradient(600px 220px at 50% 50%, rgba(59,130,246,0.22), transparent 60%)",
        cta:
          "linear-gradient(90deg, rgba(59,130,246,1) 0%, rgba(99,102,241,1) 45%, rgba(168,85,247,1) 100%)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;
