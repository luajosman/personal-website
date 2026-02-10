import { Box, Button, Chip, Container, Paper, Stack, Typography } from "@mui/material";
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
        pt: { xs: 16, md: 20 },
        pb: { xs: 8, md: 10 },
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
          animation: "floatBlob 8s ease-in-out infinite",
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
          animation: "floatBlob 7s ease-in-out infinite",
          animationDelay: "-2s",
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Stack spacing={2.3} alignItems="flex-start">
              <Chip
                label="AVAILABLE FOR FREELANCE / FULL-TIME"
                sx={{
                  borderColor: "rgba(193, 220, 255, 0.24)",
                  bgcolor: "rgba(20, 30, 45, 0.62)",
                  color: "rgba(225, 237, 255, 0.9)",
                  letterSpacing: "0.11em",
                  fontSize: 11,
                }}
                variant="outlined"
              />

              <Typography variant="h1" sx={{ fontSize: { xs: 46, md: 106 }, lineHeight: 0.92 }}>
                {copy.hero.headlinePrefix}
                <br />
                <Box component="span" sx={{ color: "#f4b54a" }}>
                  {copy.hero.headlineAccent}
                </Box>
              </Typography>

              <Typography color="text.secondary" sx={{ maxWidth: 680, fontSize: { xs: 16, md: 20 } }}>
                {copy.hero.subline}
              </Typography>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
          >
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Magnetic>
                <Button
                  variant="contained"
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {copy.hero.ctaPrimary}
                </Button>
              </Magnetic>

              <Magnetic>
                <Button
                  variant="outlined"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {copy.hero.ctaSecondary}
                </Button>
              </Magnetic>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
          >
            <Paper
              sx={{
                p: { xs: 2.2, md: 3 },
                maxWidth: 820,
                background: "linear-gradient(145deg, rgba(18,30,48,0.86), rgba(11,17,27,0.82))",
              }}
            >
              <Typography sx={{ color: "rgba(172, 199, 246, 0.88)", mb: 1, letterSpacing: "0.08em" }}>
                BUILD LOG
              </Typography>

              <Stack spacing={1}>
                <Typography sx={{ color: "#98f2b3", fontFamily: "monospace", fontSize: 14 }}>
                  {"> shipping polished UI systems with smooth motion and zero clutter"}
                </Typography>
                <Typography sx={{ color: "#7fd2ff", fontFamily: "monospace", fontSize: 14 }}>
                  {"> architecting APIs for reliability, traceability, and performance"}
                </Typography>
                <Typography sx={{ color: "#f8cb79", fontFamily: "monospace", fontSize: 14 }}>
                  {"> delivering maintainable code that teams can iterate on confidently"}
                </Typography>
              </Stack>
            </Paper>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
}
