import { createTheme } from "@mui/material/styles";

export function createAppTheme() {
  return createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#8B5CF6" },
      background: {
        default: "#0b0b10",
        paper: "rgba(255,255,255,0.06)",
      },
    },
    shape: { borderRadius: 16 },
    typography: {
      fontFamily: `Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
      h1: { fontWeight: 900, letterSpacing: "-0.02em" },
      h3: { fontWeight: 900, letterSpacing: "-0.02em" },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            border: "1px solid rgba(255,255,255,0.08)",
            backgroundImage: "none",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { textTransform: "none", fontWeight: 800 },
        },
      },
    },
  });
}
