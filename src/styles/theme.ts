"use client";

import { createTheme } from "@mui/material/styles";

// Mirrors the CSS custom properties in src/app/globals.css.
// Keep these in sync manually if you change the palette there —
// Tailwind v4's @theme can't be imported into JS, so this is the
// one place duplication is unavoidable.
const tokens = {
  brand: {
    50: "#eef1ff",
    400: "#7c8bff",
    500: "#5b6bf5",
    600: "#4453d6",
  },
  accent: {
    400: "#3fd0e0",
    500: "#22b8c9",
  },
  bg: "#17181d",
  surface: "#1f2027",
  border: "rgba(255,255,255,0.08)",
  textPrimary: "#f7f7f8",
  textSecondary: "#a8adb8",
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: tokens.brand[500],
      light: tokens.brand[400],
      dark: tokens.brand[600],
    },
    secondary: {
      main: tokens.accent[500],
      light: tokens.accent[400],
    },
    background: {
      default: tokens.bg,
      paper: tokens.surface,
    },
    text: {
      primary: tokens.textPrimary,
      secondary: tokens.textSecondary,
    },
    divider: tokens.border,
  },
  typography: {
    fontFamily: "var(--font-sans)",
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none", // kills MUI's default dark-mode gradient overlay
        },
      },
    },
  },
});
