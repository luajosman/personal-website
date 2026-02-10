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
        <Grid container spacing={2.6}>
          {projects.map((p, i) => (
            <Grid key={p.title} size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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
                      background:
                        "linear-gradient(170deg, rgba(16,25,37,0.84), rgba(12,18,29,0.92) 65%)",
                      borderColor: "rgba(187, 214, 255, 0.16)",
                      transition: "transform 0.22s ease, border-color 0.22s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        borderColor: "rgba(244, 181, 74, 0.45)",
                      },
                    }}
                  >
                    <CardContent>
                      <Typography sx={{ fontFamily: "monospace", color: "#89c9ff", mb: 1.4 }}>
                        {`0${i + 1}`}
                      </Typography>

                      <Typography variant="h6" fontWeight={700}>
                        {p.title}
                      </Typography>

                      <Typography color="text.secondary" sx={{ mt: 1.2, minHeight: 75 }}>
                        {p.desc}
                      </Typography>

                      <Stack direction="row" flexWrap="wrap" gap={0.9} sx={{ mt: 2.3 }}>
                        {p.tags.map((t) => (
                          <Chip key={t} label={t} size="small" variant="outlined" />
                        ))}
                      </Stack>
                    </CardContent>

                    <CardActions sx={{ px: 2, pb: 2.2 }}>
                      <Button
                        variant="outlined"
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
