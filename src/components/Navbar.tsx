import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useMemo } from "react";

import useScrollSpy from "../hooks/useScrollSpy";
import { CONFIG, type Locale, type NavKey } from "../config";

const NAV_IDS: NavKey[] = ["projects", "about", "contact"];

export default function Navbar({
  locale,
  onToggleLocale,
}: {
  locale: Locale;
  onToggleLocale: () => void;
}) {
  const copy = CONFIG[locale];
  const active = useScrollSpy(NAV_IDS, 160);

  const items = useMemo(
    () => NAV_IDS.map((id) => ({ id, label: copy.nav[id] })),
    [copy]
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const langLabel = locale === "de" ? "EN" : "DE";
  const cvLabel = "Download CV";

  // sizing + palette (neutral)
  const H = 46;
  const pillBg = "rgba(46,47,42,0.08)";
  const softBtnBg = "rgba(244,242,236,0.60)";
  const hoverBg = "rgba(46,47,42,0.06)";
  const activeBorder = "rgba(46,47,42,0.40)";

  // one unified button style
  const navBtnSx = (isActive: boolean) => ({
    height: H,
    px: 3.8,
    borderRadius: 999,
    border: isActive ? `1px solid ${activeBorder}` : "1px solid transparent",
    background: "transparent",
    color: isActive ? "text.primary" : "rgba(46,47,42,0.78)",
    "&:hover": {
      background: hoverBg,
      color: "text.primary",
    },
  });

  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        background: "transparent",
        color: "text.primary",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 2.5 }}>
          {/* Full width header row */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* LEFT: home icon */}
            <IconButton
              onClick={() => scrollTo("projects")}
              sx={{
                width: H,
                height: H,
                borderRadius: 999,
                background: softBtnBg,
                "&:hover": { background: "rgba(244,242,236,0.80)" },
              }}
              aria-label="Home"
              title="Home"
            >
              <img
                src="/favicon.svg"
                alt="Home"
                width={18}
                height={18}
                style={{ display: "block" }}
              />
            </IconButton>

            {/* CENTER: nav pill, evenly spaced items */}
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: { xs: "100%", md: 900 }, // fixed width for even spacing
                  maxWidth: "100%",
                  px: 2.5,
                  py: 1.15,
                  borderRadius: 999,
                  background: pillBg,
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly", // equal distance between all
                  gap: 0, // important: spacing handled by space-evenly
                }}
              >
                {items.map((l) => {
                  const isActive = active === l.id;
                  return (
                    <Button key={l.id} onClick={() => scrollTo(l.id)} sx={navBtnSx(isActive)}>
                      <Typography sx={{ fontSize: 12, letterSpacing: "0.22em", fontWeight: 700 }}>
                        {l.label.toUpperCase()}
                      </Typography>
                    </Button>
                  );
                })}
              </Box>
            </Box>

            {/* RIGHT: separate actions pill at far right */}
            <Box
              sx={{
                ml: 2,
                px: 1.25,
                py: 1.15,
                borderRadius: 999,
                background: pillBg,
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                gap: 1.25,
              }}
            >
              <Button
                onClick={onToggleLocale}
                sx={{
                  height: H,
                  px: 3,
                  borderRadius: 999,
                  border: `1px solid rgba(46,47,42,0.18)`,
                  background: "transparent",
                  color: "text.primary",
                  "&:hover": { background: hoverBg },
                }}
              >
                <Typography sx={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.22em" }}>
                  {langLabel}
                </Typography>
              </Button>

              <Button
                variant="outlined"
                component="a"
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  height: H,
                  px: 3,
                  borderRadius: 999,
                  borderColor: "rgba(46,47,42,0.28)",
                  color: "text.primary",
                  background: "transparent",
                  "&:hover": {
                    borderColor: "rgba(46,47,42,0.46)",
                    background: hoverBg,
                  },
                }}
              >
                <Typography sx={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.18em" }}>
                  {cvLabel.toUpperCase()}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
