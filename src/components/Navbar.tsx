import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import useScrollSpy from "../hooks/useScrollSpy";
import { CONFIG, type Locale, type NavKey } from "../config";

const NAV_IDS: NavKey[] = ["about", "experience", "projects", "contact"];

export default function Navbar({
  locale,
  onToggleLocale,
}: {
  locale: Locale;
  onToggleLocale: () => void;
}) {
  const copy = CONFIG[locale];
  const active = useScrollSpy(NAV_IDS, 140);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const items = useMemo(
    () => NAV_IDS.map((id) => ({ id, label: copy.nav[id] })),
    [copy]
  );

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
            <motion.div
              initial={{ rotate: -12, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                background: "linear-gradient(135deg, #8B5CF6, #22C55E)",
              }}
            />
            <Typography fontWeight={900}>{copy.meta.brand}</Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
            {items.map((l) => (
              <Button
                key={l.id}
                color="inherit"
                onClick={() => scrollTo(l.id)}
                sx={{
                  opacity: active === l.id ? 1 : 0.75,
                  color: active === l.id ? "primary.main" : "inherit",
                }}
              >
                {l.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Button
              color="inherit"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              sx={{ border: "1px solid rgba(255,255,255,0.10)", borderRadius: 2 }}
            >
              Menu
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              PaperProps={{ sx: { background: "rgba(20,20,26,0.95)" } }}
            >
              {items.map((l) => (
                <MenuItem
                  key={l.id}
                  onClick={() => {
                    setAnchorEl(null);
                    scrollTo(l.id);
                  }}
                >
                  {l.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <IconButton
            color="inherit"
            onClick={onToggleLocale}
            sx={{ border: "1px solid rgba(255,255,255,0.10)", borderRadius: 2.5 }}
            aria-label={copy.ui.languageLabel}
            title={copy.ui.languageLabel}
          >
            <LanguageIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
