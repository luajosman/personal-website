import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Impact from "./sections/Impact";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Toolkit from "./sections/Toolkit";
import Systems from "./sections/Systems";
import Contact from "./sections/Contact";

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
      <ScrollProgress />

      <Box sx={{ position: "relative", isolation: "isolate" }}>
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Navbar
            locale={locale}
            onToggleLocale={() => setLocale((l) => (l === "en" ? "de" : "en"))}
          />

          <Hero copy={copy} />
          <Impact copy={copy} />
          <Projects copy={copy} />
          <About copy={copy} />
          <Experience copy={copy} />
          <Toolkit copy={copy} />
          <Systems copy={copy} />
          <Contact copy={copy} />

          <Box sx={{ px: { xs: 2, md: 4, lg: 6 }, py: 4, textAlign: "center" }}>
            <Typography color="text.secondary" sx={{ letterSpacing: "0.08em", fontSize: 12 }}>
              {copy.footer.text}
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
