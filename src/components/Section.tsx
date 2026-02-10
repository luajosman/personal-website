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
    <Box id={id} sx={{ py: { xs: 9, md: 13 }, position: "relative" }}>
      <Container>
        <Reveal>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: "0.18em",
              color: "rgba(203, 220, 255, 0.75)",
            }}
          >
            {title}
          </Typography>
        </Reveal>

        {subtitle ? (
          <Reveal delay={0.06}>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                mb: 5,
                maxWidth: 860,
                fontSize: { xs: 34, md: 52 },
                lineHeight: 1.05,
              }}
            >
              {subtitle}
            </Typography>
          </Reveal>
        ) : null}

        {children}
      </Container>
    </Box>
  );
}
