import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import type { SiteCopy } from "../config";

const PROCESS_STEPS = [
  { name: "Discover", note: "Product goals, users, constraints." },
  { name: "Architect", note: "Boundaries, data contracts, scalability." },
  { name: "Build", note: "Composable UI + robust backend services." },
  { name: "Validate", note: "Performance, QA, instrumentation." },
  { name: "Iterate", note: "Ship, measure, improve." },
];

export default function About({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="about" title={copy.about.title} subtitle={copy.about.subtitle}>
      <Grid container spacing={3.2} alignItems="stretch">
        <Grid size={{ xs: 12, md: 7.5 }}>
          <Reveal>
            <Paper
              sx={{
                p: { xs: 2.2, md: 3 },
                height: "100%",
                background: "linear-gradient(145deg, rgba(13,22,34,0.92), rgba(11,17,27,0.85))",
              }}
            >
              <Typography color="text.secondary" sx={{ maxWidth: 760, fontSize: 18, lineHeight: 1.65 }}>
                {copy.about.paragraph}
              </Typography>

              <Typography variant="h6" sx={{ mt: 3.2, mb: 1.5, fontWeight: 700 }}>
                {copy.about.techTitle}
              </Typography>

              <Grid container spacing={1.5}>
                {copy.about.techGroups.map((g, idx) => (
                  <Grid key={g.title} size={{ xs: 12, sm: 6 }}>
                    <Reveal delay={0.06 + idx * 0.03}>
                      <Box
                        sx={{
                          p: 1.7,
                          height: "100%",
                          borderRadius: 3,
                          border: "1px solid rgba(196, 219, 255, 0.16)",
                          background: "rgba(15,24,37,0.52)",
                        }}
                      >
                        <Typography fontWeight={700} sx={{ mb: 1.1 }}>
                          {g.title}
                        </Typography>

                        <Stack direction="row" flexWrap="wrap" gap={0.8}>
                          {g.items.map((t) => (
                            <Chip key={t} label={t} variant="outlined" size="small" />
                          ))}
                        </Stack>
                      </Box>
                    </Reveal>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Reveal>
        </Grid>

        <Grid size={{ xs: 12, md: 4.5 }}>
          <Reveal delay={0.05}>
            <Paper
              sx={{
                p: { xs: 2.2, md: 3 },
                height: "100%",
                display: "grid",
                alignContent: "space-between",
                background: "linear-gradient(155deg, rgba(15,28,44,0.9), rgba(11,17,27,0.88))",
              }}
            >
              <Box>
                <Typography sx={{ fontFamily: "monospace", color: "#f4b54a", mb: 1.2 }}>
                  ENGINEERING PRINCIPLES
                </Typography>
                <Stack spacing={1.3}>
                  <Typography color="text.secondary">1. Build for clarity before complexity.</Typography>
                  <Typography color="text.secondary">2. Performance is a product feature.</Typography>
                  <Typography color="text.secondary">3. Ship with measurable feedback loops.</Typography>
                </Stack>
              </Box>

              <Box sx={{ mt: 3, p: 2, borderRadius: 2.5, border: "1px solid rgba(244,181,74,0.33)" }}>
                <Typography sx={{ color: "#ffd98c", fontSize: 13, letterSpacing: "0.08em", mb: 0.6 }}>
                  CURRENT FOCUS
                </Typography>
                <Typography sx={{ fontWeight: 700 }}>Platform architecture + polished product UX</Typography>
              </Box>
            </Paper>
          </Reveal>
        </Grid>
      </Grid>

      <Grid container spacing={1.4} sx={{ mt: 1.1 }}>
        {PROCESS_STEPS.map((step, idx) => (
          <Grid key={step.name} size={{ xs: 12, sm: 6, md: 2.4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: 0.1 + idx * 0.06 }}
            >
              <Paper
                sx={{
                  p: 1.5,
                  height: "100%",
                  background: "linear-gradient(160deg, rgba(14,23,36,0.88), rgba(9,15,24,0.95))",
                }}
              >
                <Typography sx={{ fontFamily: "monospace", color: "#f4b54a", fontSize: 12 }}>
                  {`0${idx + 1}`}
                </Typography>
                <Typography sx={{ fontWeight: 700, mt: 0.5 }}>{step.name}</Typography>
                <Typography color="text.secondary" sx={{ mt: 0.45, fontSize: 13 }}>
                  {step.note}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
