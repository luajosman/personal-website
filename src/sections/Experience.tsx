import { Box, Paper, Stack, Typography } from "@mui/material";
import Section from "../components/Section";
import { motion } from "framer-motion";
import type { SiteCopy } from "../config";

export default function Experience({ copy }: { copy: SiteCopy }) {
  const data = copy.experience.items;

  return (
    <Section id="experience" title={copy.experience.title} subtitle={copy.experience.subtitle}>
      <Box sx={{ position: "relative", py: 1 }}>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: 11,
            top: 8,
            bottom: 8,
            width: 2,
            transformOrigin: "top",
            background: "linear-gradient(to bottom, rgba(127,210,255,0.8), rgba(244,181,74,0.75))",
          }}
        />

        <Stack spacing={2.2}>
          {data.map((e, idx) => (
            <motion.div
              key={`${e.role}-${e.company}-${idx}`}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <Box sx={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: 2 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    mt: 1,
                    background: "#f4b54a",
                    boxShadow: "0 0 0 6px rgba(244,181,74,0.2)",
                    zIndex: 1,
                  }}
                />

                <Paper
                  sx={{
                    p: { xs: 2, md: 2.6 },
                    background:
                      "linear-gradient(155deg, rgba(17,29,44,0.88), rgba(11,16,27,0.9) 65%)",
                    transition: "border-color 0.2s ease, transform 0.2s ease",
                    "&:hover": {
                      borderColor: "rgba(244, 181, 74, 0.38)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography fontWeight={700}>{e.role}</Typography>
                  <Typography sx={{ color: "#7fd2ff", fontWeight: 700, mt: 0.35 }}>{e.company}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.4, mb: 1.2 }}>
                    {e.period}
                  </Typography>

                  <Stack spacing={0.8}>
                    {e.bullets.map((b) => (
                      <Typography key={b} color="text.secondary">
                        • {b}
                      </Typography>
                    ))}
                  </Stack>
                </Paper>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </Section>
  );
}
