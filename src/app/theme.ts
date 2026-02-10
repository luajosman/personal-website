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
      button: { textTransform: "none", fontWeight: 700, letterSpacing: "0.02em" },
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
            paddingInline: 20,
            minHeight: 42,
            fontSize: 13,
            borderWidth: 1,
            transition:
              "box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease, color 180ms ease",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          },
          contained: {
            color: "#101723",
            background:
              "linear-gradient(120deg, rgba(244,181,74,1) 0%, rgba(255,209,125,1) 100%)",
            boxShadow: "0 10px 24px rgba(244, 181, 74, 0.2)",
            "&:hover": {
              boxShadow: "0 12px 28px rgba(244, 181, 74, 0.28)",
            },
          },
          outlined: {
            borderColor: "rgba(208, 225, 255, 0.28)",
            backgroundColor: "rgba(16, 24, 36, 0.32)",
            "&:hover": {
              borderColor: "rgba(244, 181, 74, 0.45)",
              backgroundColor: "rgba(244, 181, 74, 0.08)",
            },
          },
          text: {
            "&:hover": {
              backgroundColor: "rgba(171, 204, 255, 0.08)",
            },
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
          maxWidth: false,
          disableGutters: true,
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(11, 18, 28, 0.78)",
            "& fieldset": {
              borderColor: "rgba(194, 219, 255, 0.2)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(194, 219, 255, 0.36)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgba(244, 181, 74, 0.62)",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "rgba(225, 237, 255, 0.7)",
          },
        },
      },
    },
  });
}
