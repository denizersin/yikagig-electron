/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1600px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        muted2: {
          DEFAULT: "hsl(var(--muted2))",
          foreground: "hsl(var(--muted-foreground))",
        },
        muted3: {
          DEFAULT: "hsl(var(--muted3))",
          foreground: "hsl(var(--muted-foreground))",
        },
        success1: {
          DEFAULT: "hsl(var(--success1))",
          foreground: "hsl(var(--success1-foreground))",
        },
        success2: {
          DEFAULT: "hsl(var(--success2))",
          foreground: "hsl(var(--success2-foreground))",
        },
        head1: {
          DEFAULT: "hsl(var(--head1))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        marquee: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        flashing: {
          "0%, 100%": { opacity: "0.2" },
          "20%": { opacity: "1" },
        },
        highlihtY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-40px)" },
        },
        pulseY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },

      animation: {
        marquee: "marquee var(--marquee-duration) linear infinite",
        "fade-in": "fade-in 0.5s linear forwards",
        flashing: "flashing 1.4s infinite linear",
        highlihtY:
          "highlihtY 3s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        jumpOut: "jumpOut 2s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55) ",
        pulseY: "pulseY 5s infinite ",
      },
      fontSize: {
        h1: "32px",
        h2: "24px",
        h3: "20px",
        h4: "16px",
        h5: "14px",
        h6: "12px",
      },
      fontWeight: {
        h1: "bold",
        h2: "bold",
        h3: "bold",
        h4: "bold",
        h5: "bold",
        h6: "bold",
      },
      lineHeight: {
        h1: "1.2",
        h2: "1.3",
        h3: "1.4",
        h4: "1.5",
        h5: "1.6",
        h6: "1.7",
      },

      textDecoration: {
        h1: "none",
        h2: "none",
        h3: "none",
        h4: "none",
        h5: "none",
        h6: "none",
      },
    },
  },
  plugins: [],
};
