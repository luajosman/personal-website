import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

import MetricCounter from "../components/MetricCounter";
import RadarPanel from "../components/RadarPanel";
import Section from "../components/Section";
import type { SiteCopy } from "../config";

export default function Impact({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="impact" title={copy.impact.title} subtitle={copy.impact.subtitle}>
      <Grid container spacing={2.1} sx={{ mb: 2.5 }}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Grid container spacing={2.1}>
            {copy.impact.stats.map((stat, idx) => (
              <Grid key={stat.label} size={{ xs: 12, sm: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                >
                  <Paper
                    sx={{
                      height: "100%",
                      p: 2,
                      textAlign: "left",
                      background:
                        "linear-gradient(150deg, rgba(14,23,36,0.88), rgba(10,16,25,0.95) 70%)",
                      borderColor: "rgba(188, 212, 255, 0.17)",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{ fontSize: { xs: 40, md: 46 }, lineHeight: 1, color: "#f4b54a", mb: 0.8 }}
                    >
                      <MetricCounter value={stat.value} suffix={stat.suffix} />
                    </Typography>
                    <Typography sx={{ fontWeight: 700 }}>{stat.label}</Typography>
                    <Typography color="text.secondary" sx={{ fontSize: 13, mt: 0.35 }}>
                      {stat.note}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <RadarPanel />
          </motion.div>
        </Grid>
      </Grid>

      <Grid container spacing={2.1}>
        {copy.impact.pillars.map((pillar, idx) => (
          <Grid key={pillar.title} size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-75px" }}
              transition={{ duration: 0.5, delay: 0.08 + idx * 0.09 }}
            >
              <Paper
                sx={{
                  height: "100%",
                  p: 2.3,
                  textAlign: "left",
                  background:
                    "linear-gradient(165deg, rgba(15,28,44,0.9), rgba(10,16,25,0.95) 75%)",
                }}
              >
                <Typography sx={{ fontWeight: 700, mb: 0.8 }}>{pillar.title}</Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {pillar.desc}
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={0.8}>
                  {pillar.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      variant="outlined"
                      sx={{ bgcolor: "rgba(14, 22, 35, 0.68)" }}
                    />
                  ))}
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-75px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Box
          sx={{
            mt: 2.2,
            p: 2,
            borderRadius: 3,
            border: "1px solid rgba(193, 218, 255, 0.18)",
            background: "linear-gradient(120deg, rgba(13,21,32,0.82), rgba(8,14,22,0.94))",
            textAlign: "left",
          }}
        >
          <Typography sx={{ fontFamily: "monospace", letterSpacing: "0.09em", color: "#9fd8ff", mb: 0.45 }}>
            IMPACT SUMMARY
          </Typography>
          <Typography color="text.secondary">
            Product velocity increases when architecture, performance, and delivery discipline are treated as one
            system, not separate tracks.
          </Typography>
        </Box>
      </motion.div>
    </Section>
  );
}
