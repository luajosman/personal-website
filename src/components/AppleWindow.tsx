import { Box, Paper, Typography } from "@mui/material";
import type { ReactNode } from "react";

export default function AppleWindow({
  title,
  subtitle,
  minHeight = 250,
  children,
}: {
  title: string;
  subtitle?: string;
  minHeight?: number;
  children: ReactNode;
}) {
  return (
    <Paper
      sx={{
        p: 1.6,
        height: "100%",
        minHeight,
        background: "linear-gradient(160deg, rgba(13,22,34,0.92), rgba(9,15,24,0.95))",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          mb: 1.4,
          pb: 1.1,
          borderBottom: "1px solid rgba(169, 196, 236, 0.14)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, minWidth: 0 }}>
          <Box sx={{ width: 11, height: 11, borderRadius: 999, bgcolor: "#f87171" }} />
          <Box sx={{ width: 11, height: 11, borderRadius: 999, bgcolor: "#f4b54a" }} />
          <Box sx={{ width: 11, height: 11, borderRadius: 999, bgcolor: "#6ee7b7" }} />

          <Typography
            sx={{
              ml: 0.9,
              fontFamily: "monospace",
              color: "#9fd8ff",
              fontSize: 12.5,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
        </Box>

        {subtitle ? (
          <Typography sx={{ fontFamily: "monospace", color: "rgba(194, 216, 248, 0.7)", fontSize: 11.5 }}>
            {subtitle}
          </Typography>
        ) : null}
      </Box>

      {children}
    </Paper>
  );
}
