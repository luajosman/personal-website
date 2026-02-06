import { useState } from "react";
import { Button, Card, CardActions, CardContent, Chip, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

import Section from "../components/Section";
import TiltCard from "../components/TiltCard";
import ProjectModal from "../components/ProjectModal";
import type { SiteCopy } from "../config";

export default function Projects({ copy }: { copy: SiteCopy }) {
  const projects = copy.projects.items;

  const [open, setOpen] = useState(false);
  const [pickedIndex, setPickedIndex] = useState(0);

  const picked = projects[pickedIndex];

  return (
    <>
      <Section id="projects" title={copy.projects.title} subtitle={copy.projects.subtitle}>
        <Grid container spacing={2.5}>
          {projects.map((p, i) => (
            <Grid key={p.title} size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <TiltCard>
                  <Card
                    onClick={() => {
                      setPickedIndex(i);
                      setOpen(true);
                    }}
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      background: "rgba(255,255,255,0.05)",
                      transition: "transform 0.2s ease",
                      "&:hover": { transform: "translateY(-2px)" },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight={900}>
                        {p.title}
                      </Typography>

                      <Typography color="text.secondary" sx={{ mt: 1 }}>
                        {p.desc}
                      </Typography>

                      <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
                        {p.tags.map((t) => (
                          <Chip
                            key={t}
                            label={t}
                            size="small"
                            variant="outlined"
                            sx={{ borderColor: "rgba(255,255,255,0.14)" }}
                          />
                        ))}
                      </Stack>
                    </CardContent>

                    <CardActions sx={{ px: 2, pb: 2 }}>
                      <Button
                        variant="outlined"
                        sx={{ borderColor: "rgba(255,255,255,0.18)" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setPickedIndex(i);
                          setOpen(true);
                        }}
                      >
                        {copy.projects.viewButton}
                      </Button>

                      <Button
                        variant="text"
                        onClick={(e) => {
                          e.stopPropagation();
                          const url = p.links?.code;
                          if (url) window.open(url, "_blank", "noopener,noreferrer");
                        }}
                      >
                        {copy.projects.codeButton}
                      </Button>
                    </CardActions>
                  </Card>
                </TiltCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Section>

      <ProjectModal
        open={open}
        onClose={() => setOpen(false)}
        title={picked?.title ?? ""}
        desc={picked?.desc ?? ""}
        highlightsTitle={copy.projects.modal.sectionTitle}
        highlightsText={copy.projects.modal.sectionText}
      />
    </>
  );
}
