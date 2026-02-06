import { Avatar, Box, Chip, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import type { SiteCopy } from "../config";

export default function About({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="about" title={copy.about.title} subtitle={copy.about.subtitle}>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 7 }}>
          <Reveal>
            <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 760 }}>
              {copy.about.paragraph}
            </Typography>
          </Reveal>

          <Reveal delay={0.06}>
            <Typography variant="h6" sx={{ mb: 1.2, fontWeight: 900 }}>
              {copy.about.techTitle}
            </Typography>
          </Reveal>

          <Grid container spacing={2}>
            {copy.about.techGroups.map((g, idx) => (
              <Grid key={g.title} size={{ xs: 12, sm: 6 }}>
                <Reveal delay={0.06 + idx * 0.03}>
                  <Paper sx={{ p: 2 }}>
                    <Typography fontWeight={900} sx={{ mb: 1 }}>
                      {g.title}
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {g.items.map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          variant="outlined"
                          sx={{
                            borderColor: "rgba(255,255,255,0.12)",
                            background: "rgba(255,255,255,0.03)",
                          }}
                        />
                      ))}
                    </Stack>
                  </Paper>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Reveal delay={0.05}>
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <Avatar
                alt={copy.about.avatarAlt}
                src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=600&q=60"
                sx={{
                  width: { xs: 240, md: 320 },
                  height: { xs: 240, md: 320 },
                  border: "1px solid rgba(255,255,255,0.14)",
                  boxShadow: "0 22px 80px rgba(0,0,0,0.45)",
                }}
              />
            </Box>
          </Reveal>
        </Grid>
      </Grid>
    </Section>
  );
}
