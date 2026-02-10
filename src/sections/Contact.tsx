import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import type { SiteCopy } from "../config";

export default function Contact({ copy }: { copy: SiteCopy }) {
  return (
    <Section id="contact" title={copy.contact.title} subtitle={copy.contact.subtitle} align="center">
      <Reveal>
        <Paper
          sx={{
            p: { xs: 2.2, md: 3 },
            background: "linear-gradient(145deg, rgba(16,28,43,0.9), rgba(11,17,27,0.88))",
          }}
        >
          <Stack spacing={2}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {copy.contact.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 0.6 }}>
                {copy.contact.note}
              </Typography>
            </Box>

            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <TextField fullWidth label={copy.contact.nameLabel} />
              <TextField fullWidth label={copy.contact.emailLabel} />
            </Stack>

            <TextField multiline minRows={4} label={copy.contact.messageLabel} />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} justifyContent="center">
              <Button variant="contained">{copy.contact.sendButton}</Button>
              <Button variant="outlined" component="a" href={`mailto:${copy.contact.directEmail}`}>
                {copy.contact.directEmail}
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Reveal>
    </Section>
  );
}
