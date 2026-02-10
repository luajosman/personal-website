import { useMemo, useState } from "react";
import { Box, Button, Card, CardActions, CardContent, Chip, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

import Section from "../components/Section";
import TiltCard from "../components/TiltCard";
import ProjectModal from "../components/ProjectModal";
import type { SiteCopy } from "../config";

function ProjectCard({
  title,
  desc,
  tags,
  index,
  onOpen,
  onCode,
  viewLabel,
  codeLabel,
  featured = false,
}: {
  title: string;
  desc: string;
  tags: string[];
  index: number;
  onOpen: () => void;
  onCode: () => void;
  viewLabel: string;
  codeLabel: string;
  featured?: boolean;
}) {
  return (
    <TiltCard>
      <Card
        onClick={onOpen}
        sx={{
          height: "100%",
          cursor: "pointer",
          background: featured
            ? "linear-gradient(145deg, rgba(20,33,51,0.92), rgba(9,16,26,0.95) 72%)"
            : "linear-gradient(165deg, rgba(16,25,37,0.84), rgba(12,18,29,0.92) 65%)",
          borderColor: featured ? "rgba(244, 181, 74, 0.34)" : "rgba(187, 214, 255, 0.16)",
          transition: "transform 0.22s ease, border-color 0.22s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            borderColor: "rgba(244, 181, 74, 0.45)",
          },
        }}
      >
        <CardContent sx={{ p: featured ? { xs: 2, md: 3 } : 2.2 }}>
          <Typography sx={{ fontFamily: "monospace", color: "#89c9ff", mb: 1.2 }}>
            {`0${index + 1}`}
          </Typography>

          <Typography variant={featured ? "h5" : "h6"} sx={{ fontWeight: 700 }}>
            {title}
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1.1, minHeight: featured ? 90 : 75 }}>
            {desc}
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={0.9} sx={{ mt: 2.2 }}>
            {tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
          </Stack>
        </CardContent>

        <CardActions sx={{ px: 2, pb: 2.1, justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
          >
            {viewLabel}
          </Button>

          <Button
            variant="text"
            onClick={(e) => {
              e.stopPropagation();
              onCode();
            }}
          >
            {codeLabel}
          </Button>
        </CardActions>
      </Card>
    </TiltCard>
  );
}

export default function Projects({ copy }: { copy: SiteCopy }) {
  const projects = copy.projects.items;

  const [open, setOpen] = useState(false);
  const [pickedIndex, setPickedIndex] = useState(0);

  const picked = projects[pickedIndex];

  const [featured, second, third] = useMemo(() => projects, [projects]);

  const openProject = (index: number) => {
    setPickedIndex(index);
    setOpen(true);
  };

  const openCode = (index: number) => {
    const url = projects[index]?.links?.code;
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Section id="projects" title={copy.projects.title} subtitle={copy.projects.subtitle}>
        <Grid container spacing={2.2}>
          {featured ? (
            <Grid size={{ xs: 12, lg: 8 }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.52 }}
              >
                <ProjectCard
                  title={featured.title}
                  desc={featured.desc}
                  tags={featured.tags}
                  index={0}
                  featured
                  onOpen={() => openProject(0)}
                  onCode={() => openCode(0)}
                  viewLabel={copy.projects.viewButton}
                  codeLabel={copy.projects.codeButton}
                />
              </motion.div>
            </Grid>
          ) : null}

          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={2.2}>
              {second ? (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.48, delay: 0.06 }}
                >
                  <ProjectCard
                    title={second.title}
                    desc={second.desc}
                    tags={second.tags}
                    index={1}
                    onOpen={() => openProject(1)}
                    onCode={() => openCode(1)}
                    viewLabel={copy.projects.viewButton}
                    codeLabel={copy.projects.codeButton}
                  />
                </motion.div>
              ) : null}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.48, delay: 0.1 }}
              >
                <Paper
                  sx={{
                    p: 2,
                    minHeight: 180,
                    background: "linear-gradient(160deg, rgba(13,22,34,0.9), rgba(9,15,24,0.95))",
                  }}
                >
                  <Typography sx={{ fontFamily: "monospace", color: "#f4b54a", mb: 0.6 }}>
                    CURRENT BUILD TRACK
                  </Typography>
                  <Stack spacing={0.7}>
                    <Typography color="text.secondary">• Design language consolidation across pages.</Typography>
                    <Typography color="text.secondary">• Reusable motion primitives and hover states.</Typography>
                    <Typography color="text.secondary">• Mobile-first readability and spacing checks.</Typography>
                  </Stack>
                </Paper>
              </motion.div>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            {third ? (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.48, delay: 0.12 }}
              >
                <ProjectCard
                  title={third.title}
                  desc={third.desc}
                  tags={third.tags}
                  index={2}
                  onOpen={() => openProject(2)}
                  onCode={() => openCode(2)}
                  viewLabel={copy.projects.viewButton}
                  codeLabel={copy.projects.codeButton}
                />
              </motion.div>
            ) : null}
          </Grid>

          <Grid size={{ xs: 12, lg: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.14 }}
            >
              <Paper
                sx={{
                  p: { xs: 2, md: 2.3 },
                  minHeight: 230,
                  background: "linear-gradient(130deg, rgba(12,20,30,0.92), rgba(9,16,26,0.95))",
                }}
              >
                <Typography sx={{ fontFamily: "monospace", color: "#9fd8ff", mb: 1.2 }}>
                  PROJECT SYSTEM NOTES
                </Typography>

                <Grid container spacing={1.2}>
                  {["Discovery", "Architecture", "Implementation", "Hardening"].map((step, idx) => (
                    <Grid key={step} size={{ xs: 12, sm: 6, md: 3 }}>
                      <Box
                        sx={{
                          p: 1.2,
                          borderRadius: 2,
                          border: "1px solid rgba(193, 218, 255, 0.2)",
                          background: "rgba(14, 22, 34, 0.72)",
                        }}
                      >
                        <Typography sx={{ fontFamily: "monospace", color: "#f4b54a", fontSize: 12 }}>
                          {`0${idx + 1}`}
                        </Typography>
                        <Typography sx={{ fontWeight: 700, mt: 0.3 }}>{step}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
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
