import { Box, Button, Chip, Container, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import FloatingStatCard from "../components/FloatingStatCard";
import RotatingWord from "../components/RotatingWord";
import type { SiteCopy } from "../config";

const HERO_TRACK = [
  { label: "Current Sprint", value: "Design system + interaction polish" },
  { label: "Open to", value: "Freelance / Full-time senior roles" },
  { label: "Primary Stack", value: "React, Node.js, TypeScript" },
  { label: "Specialty", value: "Product-grade frontend architecture" },
  { label: "Timezone", value: "EU / US overlap" },
  { label: "Delivery", value: "Fast iteration with clean systems" },
];

export default function Hero({ copy }: { copy: SiteCopy }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 15, md: 18 },
        pb: { xs: 7, md: 9 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: { xs: 360, md: 700 },
          height: { xs: 360, md: 700 },
          borderRadius: "50%",
          top: { xs: -80, md: -180 },
          right: { xs: -180, md: -180 },
          background:
            "radial-gradient(circle, rgba(127,210,255,0.34) 0%, rgba(127,210,255,0) 68%)",
          filter: "blur(8px)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 340, md: 680 },
          height: { xs: 340, md: 680 },
          borderRadius: "50%",
          bottom: { xs: -120, md: -220 },
          left: { xs: -170, md: -220 },
          background:
            "radial-gradient(circle, rgba(244,181,74,0.25) 0%, rgba(244,181,74,0) 70%)",
          filter: "blur(12px)",
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1, px: { xs: 2, md: 4, lg: 6 } }}>
        <Stack spacing={3.2} alignItems="center" textAlign="center" sx={{ py: { xs: 1, lg: 1.5 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <Stack spacing={2.2} alignItems="center" sx={{ width: "100%" }}>
              <Chip
                label="AVAILABLE FOR FREELANCE / FULL-TIME"
                variant="outlined"
                sx={{
                  borderColor: "rgba(193, 220, 255, 0.24)",
                  bgcolor: "rgba(20, 30, 45, 0.62)",
                  color: "rgba(225, 237, 255, 0.9)",
                  letterSpacing: "0.11em",
                  fontSize: 11,
                }}
              />

              <Typography variant="h1" sx={{ fontSize: { xs: 46, md: 100 }, lineHeight: 0.92 }}>
                {copy.hero.headlinePrefix}
                <br />
                <Box component="span" sx={{ color: "#f4b54a" }}>
                  {copy.hero.headlineAccent}
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 19, md: 30 },
                  lineHeight: 1.2,
                  minHeight: { xs: 34, md: 42 },
                }}
              >
                <RotatingWord words={copy.hero.rotatingWords} />
              </Typography>

              <Typography color="text.secondary" sx={{ fontSize: { xs: 16, md: 19 }, maxWidth: 760 }}>
                {copy.hero.subline}
              </Typography>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
          >
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} justifyContent="center">
              <Button
                variant="contained"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                {copy.hero.ctaPrimary}
              </Button>

              <Button
                variant="outlined"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {copy.hero.ctaSecondary}
              </Button>
            </Stack>
          </motion.div>

          <Stack spacing={1.05} sx={{ width: "100%", maxWidth: 1220 }}>
            <Typography
              sx={{
                textAlign: "left",
                fontFamily: "monospace",
                color: "rgba(159, 216, 255, 0.9)",
                letterSpacing: "0.11em",
                fontSize: 12,
                mb: 0.4,
              }}
            >
              OPERATIONAL SNAPSHOT
            </Typography>

            {HERO_TRACK.map((item, idx) => (
              <FloatingStatCard
                key={item.label}
                label={item.label}
                value={item.value}
                delay={0.14 + idx * 0.06}
                index={idx + 1}
              />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.46 }}
            >
              <Paper
                sx={{
                  p: 1.5,
                  textAlign: "left",
                  background: "linear-gradient(160deg, rgba(15,24,37,0.86), rgba(10,16,25,0.95))",
                  borderColor: "rgba(244, 181, 74, 0.3)",
                }}
              >
                <Typography sx={{ fontFamily: "monospace", color: "#f4b54a", mb: 0.6, fontSize: 12 }}>
                  BUILD LOG
                </Typography>
                <Typography sx={{ color: "#8fd7ff", fontFamily: "monospace", fontSize: 12.5 }}>
                  {"> shipping polished interfaces"}
                </Typography>
                <Typography sx={{ color: "#a1ebb7", fontFamily: "monospace", fontSize: 12.5 }}>
                  {"> architecting resilient backends"}
                </Typography>
              </Paper>
            </motion.div>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
