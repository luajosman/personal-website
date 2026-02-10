import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import Reveal from "./Reveal";

export default function Section({
  id,
  title,
  subtitle,
  align = "left",
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children: ReactNode;
}) {
  const isCentered = align === "center";

  return (
    <Box id={id} sx={{ py: { xs: 9, md: 13 }, position: "relative", overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.24 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(800px 220px at 50% 60%, rgba(127,210,255,0.22), rgba(127,210,255,0))",
        }}
      />

      <motion.div
        initial={{ x: "-20%", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "10%",
          bottom: "10%",
          left: "-10%",
          width: "36%",
          pointerEvents: "none",
          background:
            "linear-gradient(90deg, rgba(127,210,255,0), rgba(127,210,255,0.12), rgba(244,181,74,0))",
          filter: "blur(22px)",
        }}
      />

      <Container sx={{ px: { xs: 2, md: 4, lg: 6 }, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0.72, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Box>
            <Reveal>
              <Typography
                variant="overline"
                sx={{
                  letterSpacing: "0.18em",
                  color: "rgba(203, 220, 255, 0.75)",
                  textAlign: align,
                  display: "block",
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
                    maxWidth: isCentered ? 1100 : 980,
                    mx: isCentered ? "auto" : 0,
                    fontSize: { xs: 34, md: 52 },
                    lineHeight: 1.05,
                    textAlign: align,
                  }}
                >
                  {subtitle}
                </Typography>
              </Reveal>
            ) : null}

            {children}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
