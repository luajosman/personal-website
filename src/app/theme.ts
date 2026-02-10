import { createTheme } from "@mui/material/styles";

export function createAppTheme() {
  return createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#f4b54a" },
      secondary: { main: "#7fd2ff" },
      background: {
        default: "#0b1018",
        paper: "rgba(15, 23, 35, 0.78)",
      },
      text: {
        primary: "#f3f7ff",
        secondary: "rgba(226, 235, 255, 0.74)",
      },
      divider: "rgba(201, 220, 255, 0.15)",
    },
    shape: { borderRadius: 18 },
    typography: {
      fontFamily: `"Space Grotesk", "Satoshi", "General Sans", sans-serif`,
      h1: {
        fontFamily: `"Bricolage Grotesque", "Space Grotesk", sans-serif`,
        fontWeight: 700,
        letterSpacing: "-0.03em",
      },
      h2: {
        fontFamily: `"Bricolage Grotesque", "Space Grotesk", sans-serif`,
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
      h3: {
        fontFamily: `"Bricolage Grotesque", "Space Grotesk", sans-serif`,
        fontWeight: 650,
        letterSpacing: "-0.02em",
      },
      button: { textTransform: "none", fontWeight: 700, letterSpacing: "0.04em" },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#0b1018",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            border: "1px solid rgba(197, 219, 255, 0.14)",
            backgroundImage: "none",
            backdropFilter: "blur(8px)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            paddingInline: 24,
            minHeight: 44,
          },
          contained: {
            color: "#101723",
            background:
              "linear-gradient(120deg, rgba(244,181,74,1) 0%, rgba(255,209,125,1) 100%)",
          },
          outlined: {
            borderColor: "rgba(208, 225, 255, 0.28)",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            borderColor: "rgba(196, 219, 255, 0.2)",
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "lg",
        },
      },
    },
  });
}
