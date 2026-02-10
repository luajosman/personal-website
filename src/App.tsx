import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import CursorFollower from "./components/CursorFollower";
import ScrollProgress from "./components/ScrollProgress";

import { CONFIG, type Locale } from "./config";
import { createAppTheme } from "./app/theme";

export default function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const theme = useMemo(() => createAppTheme(), []);
  const copy = CONFIG[locale];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CursorFollower />
      <ScrollProgress />

      <Navbar
        locale={locale}
        onToggleLocale={() => setLocale((l) => (l === "en" ? "de" : "en"))}
      />

      <Hero copy={copy} />
      <Projects copy={copy} />
      <About copy={copy} />
      <Experience copy={copy} />
      <Contact copy={copy} />

      <Box sx={{ px: 3, py: 4, textAlign: "center" }}>
        <Typography color="text.secondary" sx={{ letterSpacing: "0.08em", fontSize: 12 }}>
          {copy.footer.text}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
