import { createTheme } from "@mui/material/styles";

export function createAppTheme() {
  return createTheme({
    palette: {
      mode: "light",
      primary: { main: "#2E2F2A" }, // warm dark
      background: {
        default: "#F4F2EC", // cream
        paper: "rgba(46,47,42,0.06)",
      },
      text: {
        primary: "#2E2F2A",
        secondary: "rgba(46,47,42,0.72)",
      },
    },
    shape: { borderRadius: 18 },
    typography: {
      fontFamily: `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
      button: { textTransform: "none", fontWeight: 700, letterSpacing: "0.06em" },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#F4F2EC",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 999 },
        },
      },
    },
  });
}
