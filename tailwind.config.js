// eslint-disable-next-line @typescript-eslint/no-require-imports
const plugin = require("tailwindcss/plugin");

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
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        main: "#FDFFFF",
        second: "#F4F4F4",
        accent: "#0A9396",
        "textColor-main": "#000000",
        "textColor-second": "#666666",
        "custom-red": "#FF4A22",
        "custom-green": "#3DA35D",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        up: "0 -10px 6px -1px rgba(0, 0, 0, 0.05), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
        white: "0 0px 20px rgba(100, 100, 100, 0.1)",
      },
      zIndex: {
        60: "60",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        ".textStyle-title": {
          color: theme("colors.textColor-main"),
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.light"),
        },
        ".textStyle-subtitle": {
          color: theme("colors.textColor-main"),
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.light"),
        },
        ".textStyle-headline": {
          color: theme("colors.textColor-main"),
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.light"),
        },
        ".textStyle-subheadline": {
          color: theme("colors.textColor-second"),
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.light"),
        },
        ".textStyle-body": {
          color: theme("colors.textColor-second"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.light"),
        },
        ".textStyle-body-black": {
          color: theme("colors.textColor-main"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.light"),
        },
        ".textStyle-body-white": {
          color: theme("colors.main"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.light"),
        },
        ".textStyle-body-accent": {
          color: theme("colors.accent"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.light"),
        },
        ".textStyle-footnote-black": {
          color: theme("colors.textColor-main"),
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.light"),
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
  ],
};

export default config;
