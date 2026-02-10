import { Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

import Section from "../components/Section";
import TagMarquee from "../components/TagMarquee";
import type { SiteCopy } from "../config";

const INFO_CARDS = [
  { title: "Ship", desc: "Rapid prototyping, scoped delivery, and production-ready releases." },
  { title: "Observe", desc: "Telemetry-first workflows with logs, traces, and alerting feedback loops." },
  { title: "Scale", desc: "Modular architecture and performance budgets that grow with product usage." },
];

export default function Toolkit({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="toolkit" title={copy.toolkit.title} subtitle={copy.toolkit.subtitle}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Paper
          sx={{
            p: { xs: 1.5, md: 2 },
            mb: 2,
            background: "linear-gradient(145deg, rgba(13,22,34,0.9), rgba(9,15,24,0.95))",
          }}
        >
          <Stack spacing={1.2}>
            {copy.toolkit.lanes.map((lane, idx) => (
              <TagMarquee
                key={`lane-${idx}`}
                items={lane}
                reverse={idx % 2 === 1}
                duration={24 + idx * 3}
              />
            ))}
          </Stack>
        </Paper>
      </motion.div>

      <Grid container spacing={2}>
        {INFO_CARDS.map((card, idx) => (
          <Grid key={card.title} size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.48, delay: idx * 0.07 }}
            >
              <Paper
                sx={{
                  p: 2.2,
                  height: "100%",
                  textAlign: "left",
                  background: "linear-gradient(160deg, rgba(16,27,42,0.92), rgba(9,16,26,0.95) 80%)",
                }}
              >
                <Typography sx={{ color: "#f4b54a", mb: 0.7, fontFamily: "monospace" }}>
                  {`0${idx + 1}`}
                </Typography>
                <Typography sx={{ fontWeight: 700, mb: 0.7 }}>{card.title}</Typography>
                <Typography color="text.secondary">{card.desc}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
