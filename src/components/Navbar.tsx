import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useMemo } from "react";

import useScrollSpy from "../hooks/useScrollSpy";
import { CONFIG, type Locale, type NavKey } from "../config";

const NAV_IDS: NavKey[] = ["projects", "impact", "about", "experience", "contact"];

export default function Navbar({
  locale,
  onToggleLocale,
}: {
  locale: Locale;
  onToggleLocale: () => void;
}) {
  const copy = CONFIG[locale];
  const active = useScrollSpy(NAV_IDS, 180);

  const items = useMemo(() => NAV_IDS.map((id) => ({ id, label: copy.nav[id] })), [copy]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
      <Container sx={{ px: { xs: 2, md: 4, lg: 6 } }}>
        <Toolbar disableGutters sx={{ py: 1.8 }}>
          <motion.div
            initial={{ y: -14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                width: "100%",
                px: { xs: 1.2, md: 1.9 },
                py: 1,
                borderRadius: 999,
                border: "1px solid rgba(194, 219, 255, 0.18)",
                background: "rgba(9, 14, 22, 0.62)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr auto", md: "auto 1fr auto" },
                  alignItems: "center",
                  gap: { xs: 1, md: 1.8 },
                }}
              >
                <Button
                  onClick={() => scrollTo("projects")}
                  sx={{
                    justifySelf: "start",
                    px: { xs: 1.6, md: 2.2 },
                    minWidth: "unset",
                    minHeight: 38,
                    border: "1px solid rgba(195, 221, 255, 0.24)",
                    bgcolor: "rgba(17, 26, 40, 0.65)",
                  }}
                >
                  <Typography sx={{ fontSize: { xs: 10.5, md: 11 }, letterSpacing: "0.14em" }}>
                    {copy.meta.brand.toUpperCase()}
                  </Typography>
                </Button>

                <Stack
                  direction="row"
                  spacing={1.1}
                  justifyContent="center"
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  {items.map((item) => {
                    const isActive = active === item.id;
                    return (
                      <Button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        sx={{
                          px: 2.3,
                          minWidth: "unset",
                          minHeight: 40,
                          fontSize: 11,
                          letterSpacing: "0.08em",
                          color: isActive ? "#f4b54a" : "text.secondary",
                          border: isActive
                            ? "1px solid rgba(244, 181, 74, 0.36)"
                            : "1px solid transparent",
                          bgcolor: isActive ? "rgba(244, 181, 74, 0.10)" : "transparent",
                          "&:hover": {
                            color: "text.primary",
                            bgcolor: "rgba(171, 204, 255, 0.10)",
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    );
                  })}
                </Stack>

                <Button
                  onClick={onToggleLocale}
                  sx={{
                    justifySelf: "end",
                    px: 1.8,
                    minWidth: "unset",
                    minHeight: 38,
                    border: "1px solid rgba(194, 219, 255, 0.24)",
                    bgcolor: "rgba(17, 26, 40, 0.65)",
                    "&:hover": { background: "rgba(171, 204, 255, 0.1)" },
                  }}
                >
                  <Typography sx={{ fontSize: 10.5, letterSpacing: "0.14em" }}>
                    {locale === "de" ? "EN" : "DE"}
                  </Typography>
                </Button>
              </Box>

              <Stack
                direction="row"
                spacing={0.85}
                sx={{
                  mt: 0.85,
                  pb: 0.2,
                  display: { xs: "flex", md: "none" },
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                {items.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <Button
                      key={`mobile-${item.id}`}
                      onClick={() => scrollTo(item.id)}
                      sx={{
                        px: 1.65,
                        minWidth: "unset",
                        minHeight: 34,
                        whiteSpace: "nowrap",
                        fontSize: 10,
                        letterSpacing: "0.08em",
                        color: isActive ? "#f4b54a" : "text.secondary",
                        border: isActive
                          ? "1px solid rgba(244, 181, 74, 0.36)"
                          : "1px solid rgba(198, 220, 255, 0.12)",
                        bgcolor: isActive ? "rgba(244, 181, 74, 0.10)" : "rgba(16, 25, 38, 0.62)",
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </Stack>
            </Box>
          </motion.div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
