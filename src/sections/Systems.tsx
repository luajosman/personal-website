import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

import MiniTerminal from "../components/MiniTerminal";
import MilestoneRail from "../components/MilestoneRail";
import PlaybookAccordion from "../components/PlaybookAccordion";
import CommandDeckTerminal from "../components/CommandDeckTerminal";
import RepoTreeTerminal from "../components/RepoTreeTerminal";
import PipelineMatrixTerminal from "../components/PipelineMatrixTerminal";
import Section from "../components/Section";
import type { SiteCopy } from "../config";

export default function Systems({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="systems" title={copy.systems.title} subtitle={copy.systems.subtitle}>
      <Grid container spacing={2.1}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
          >
            <MiniTerminal title={copy.systems.terminalTitle} lines={copy.systems.terminalLines} />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <Paper
              sx={{
                p: 1.5,
                height: "100%",
                minHeight: 250,
                background: "linear-gradient(160deg, rgba(13,22,34,0.92), rgba(9,15,24,0.95))",
              }}
            >
              <Typography sx={{ fontFamily: "monospace", color: "#9fd8ff", mb: 1.1 }}>
                DELIVERY RAIL
              </Typography>
              <MilestoneRail items={copy.systems.phases} />
            </Paper>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <Paper
              sx={{
                p: 1.5,
                height: "100%",
                minHeight: 250,
                background: "linear-gradient(160deg, rgba(13,22,34,0.92), rgba(9,15,24,0.95))",
              }}
            >
              <Typography sx={{ fontFamily: "monospace", color: "#9fd8ff", mb: 1.1 }}>
                {copy.systems.playbookTitle}
              </Typography>

              <PlaybookAccordion items={copy.systems.playbookItems} />
            </Paper>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <CommandDeckTerminal lines={copy.systems.terminalLines} />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.16 }}
          >
            <RepoTreeTerminal
              heroHeadline={`${copy.hero.headlinePrefix} ${copy.hero.headlineAccent}`}
              heroWords={copy.hero.rotatingWords}
              projectTitles={copy.projects.items.map((item) => item.title)}
              phaseNames={copy.systems.phases.map((phase) => phase.name)}
            />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <PipelineMatrixTerminal
              phases={copy.systems.phases}
              playbookItems={copy.systems.playbookItems}
            />
          </motion.div>
        </Grid>
      </Grid>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Box
          sx={{
            mt: 2,
            p: 1.8,
            borderRadius: 3,
            border: "1px solid rgba(193, 218, 255, 0.16)",
            background: "linear-gradient(120deg, rgba(12,20,31,0.84), rgba(8,14,22,0.94))",
          }}
        >
          <Typography color="text.secondary">
            {copy.systems.note}
          </Typography>
        </Box>
      </motion.div>
    </Section>
  );
}
