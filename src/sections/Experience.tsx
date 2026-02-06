import { Box, Paper, Stack, Typography } from "@mui/material";
import Section from "../components/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { SiteCopy } from "../config";

export default function Experience({ copy }: { copy: SiteCopy }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  const data = copy.experience.items;

  return (
    <Section id="experience" title={copy.experience.title} subtitle={copy.experience.subtitle}>
      <Box ref={ref} sx={{ position: "relative", py: 2 }}>
        <motion.div
          style={{
            position: "absolute",
            left: { xs: 16, md: "50%" } as any,
            top: 0,
            bottom: 0,
            width: 2,
            transformOrigin: "top",
            scaleY: lineScale,
            background: "rgba(139,92,246,0.45)",
            transform: "translateX(-1px)",
          }}
        />

        <Stack spacing={3}>
          {data.map((e, idx) => {
            const isRight = idx % 2 === 0;

            return (
              <Box
                key={`${e.role}-${e.company}-${idx}`}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 60px 1fr" },
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  {!isRight ? (
                    <motion.div
                      initial={{ opacity: 0, x: -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5 }}
                    >
                      <Paper sx={{ p: 2.4 }}>
                        <CardContent e={e} />
                      </Paper>
                    </motion.div>
                  ) : null}
                </Box>

                <Box sx={{ display: "grid", placeItems: "center" }}>
                  <Box
                    sx={{
                      width: 14,
                      height: 14,
                      borderRadius: 999,
                      background: "#8B5CF6",
                      boxShadow: "0 0 0 6px rgba(139,92,246,0.18)",
                    }}
                  />
                </Box>

                <Box>
                  {isRight ? (
                    <motion.div
                      initial={{ opacity: 0, x: 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5 }}
                    >
                      <Paper sx={{ p: 2.4 }}>
                        <CardContent e={e} />
                      </Paper>
                    </motion.div>
                  ) : (
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                      <Paper sx={{ p: 2.4 }}>
                        <CardContent e={e} />
                      </Paper>
                    </Box>
                  )}
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Section>
  );
}

function CardContent({
  e,
}: {
  e: { role: string; company: string; period: string; bullets: string[] };
}) {
  return (
    <>
      <Typography fontWeight={900}>{e.role}</Typography>
      <Typography color="primary" sx={{ fontWeight: 900, mt: 0.4 }}>
        {e.company}
      </Typography>
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
    </>
  );
}
