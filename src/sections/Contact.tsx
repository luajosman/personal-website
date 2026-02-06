import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import type { SiteCopy } from "../config";

export default function Contact({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="contact" title={copy.contact.title} subtitle={copy.contact.subtitle}>
      <Reveal>
        <Paper sx={{ p: { xs: 2, md: 3 } }}>
          <Stack spacing={2}>
            <Box>
              <Typography fontWeight={900}>{copy.contact.title}</Typography>
              <Typography color="text.secondary">{copy.contact.note}</Typography>
            </Box>

            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <TextField fullWidth label={copy.contact.nameLabel} />
              <TextField fullWidth label={copy.contact.emailLabel} />
            </Stack>

            <TextField multiline minRows={4} label={copy.contact.messageLabel} />
            <Box>
              <Button variant="contained">{copy.contact.sendButton}</Button>
            </Box>
          </Stack>
        </Paper>
      </Reveal>
    </Section>
  );
}
