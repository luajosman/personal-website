import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useMemo } from "react";

import useScrollSpy from "../hooks/useScrollSpy";
import { CONFIG, type Locale, type NavKey } from "../config";

const NAV_IDS: NavKey[] = ["projects", "about", "experience", "contact"];

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
      <Container>
        <Toolbar disableGutters sx={{ py: 2 }}>
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                width: "100%",
                px: { xs: 1.2, md: 1.5 },
                py: 1,
                borderRadius: 999,
                border: "1px solid rgba(194, 219, 255, 0.17)",
                background: "rgba(9, 14, 22, 0.6)",
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              <Button
                onClick={() => scrollTo("projects")}
                sx={{
                  px: { xs: 1.6, md: 2 },
                  minWidth: "unset",
                  border: "1px solid rgba(195, 221, 255, 0.2)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 11, md: 12 },
                    letterSpacing: "0.16em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {copy.meta.brand.toUpperCase()}
                </Typography>
              </Button>

              <Stack direction="row" spacing={0.4} sx={{ display: { xs: "none", md: "flex" } }}>
                {items.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <Button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      sx={{
                        px: 1.8,
                        minWidth: "unset",
                        color: isActive ? "#f4b54a" : "text.secondary",
                        background: isActive ? "rgba(244, 181, 74, 0.12)" : "transparent",
                        border: isActive
                          ? "1px solid rgba(244, 181, 74, 0.33)"
                          : "1px solid transparent",
                        "&:hover": {
                          color: "text.primary",
                          background: "rgba(176, 208, 255, 0.1)",
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: 11, letterSpacing: "0.14em" }}>
                        {item.label.toUpperCase()}
                      </Typography>
                    </Button>
                  );
                })}
              </Stack>

              <Button
                onClick={onToggleLocale}
                sx={{
                  px: { xs: 1.2, md: 1.8 },
                  minWidth: "unset",
                  border: "1px solid rgba(194, 219, 255, 0.2)",
                  "&:hover": { background: "rgba(171, 204, 255, 0.1)" },
                }}
              >
                <Typography sx={{ fontSize: 11, letterSpacing: "0.16em" }}>
                  {locale === "de" ? "EN" : "DE"}
                </Typography>
              </Button>
            </Box>
          </motion.div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
