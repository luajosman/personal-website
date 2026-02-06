import { Box, Container, Typography } from "@mui/material";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <Box id={id} sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <Typography variant="h3" sx={{ mb: 1 }}>
            {title}
          </Typography>
        </Reveal>

        {subtitle ? (
          <Reveal delay={0.06}>
            <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 760 }}>
              {subtitle}
            </Typography>
          </Reveal>
        ) : null}

        {children}
      </Container>
    </Box>
  );
}
