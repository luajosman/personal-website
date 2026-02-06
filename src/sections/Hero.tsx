import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Magnetic from "../components/Magnetic";
import type { SiteCopy } from "../config";

export default function Hero({ copy }: { copy: SiteCopy }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pt: 10 }}>
        <Stack spacing={2.2} alignItems="center" textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Typography variant="h1" sx={{ fontSize: { xs: 44, md: 78 } }}>
              {copy.hero.headlinePrefix}{" "}
              <span style={{ color: "#8B5CF6" }}>{copy.hero.headlineAccent}</span>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          >
            <Typography color="text.secondary" sx={{ fontSize: { xs: 16, md: 18 } }}>
              {copy.hero.subline}
            </Typography>
          </motion.div>

          <Stack direction="row" spacing={1.5} sx={{ pt: 2 }}>
            <Magnetic>
              <Button
                variant="contained"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                sx={{ px: 3 }}
              >
                {copy.hero.ctaPrimary}
              </Button>
            </Magnetic>

            <Magnetic>
              <Button
                variant="outlined"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                sx={{ px: 3, borderColor: "rgba(255,255,255,0.18)" }}
              >
                {copy.hero.ctaSecondary}
              </Button>
            </Magnetic>
          </Stack>
        </Stack>
      </Container>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "radial-gradient(900px 500px at 50% 45%, rgba(139,92,246,0.10), transparent 60%), radial-gradient(800px 450px at 50% 60%, rgba(34,197,94,0.06), transparent 60%)",
        }}
      />
    </Box>
  );
}
