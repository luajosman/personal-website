import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

type FloatingStatCardProps = {
  label: string;
  value: string;
  delay?: number;
  index?: number;
};

export default function FloatingStatCard({ label, value, delay = 0, index }: FloatingStatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <Box>
        <Paper
          sx={{
            p: { xs: 1.3, md: 1.4 },
            background: "linear-gradient(155deg, rgba(15,24,37,0.86), rgba(10,16,25,0.95))",
            borderColor: "rgba(193, 218, 255, 0.2)",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "auto 1fr auto" },
            alignItems: "center",
            gap: { xs: 0.5, md: 1.2 },
          }}
        >
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
              fontFamily: "monospace",
              color: "rgba(143, 200, 255, 0.75)",
              fontSize: 11,
            }}
          >
            {index ? `0${index}` : "--"}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: 999,
                background: "#7fd2ff",
                boxShadow: "0 0 12px rgba(127,210,255,0.5)",
                flexShrink: 0,
              }}
            />

            <Typography sx={{ fontSize: 11, letterSpacing: "0.1em", color: "#8fc8ff" }}>
              {label.toUpperCase()}
            </Typography>
          </Box>

          <Typography sx={{ fontWeight: 700, textAlign: { xs: "left", md: "right" } }}>{value}</Typography>
        </Paper>
      </Box>
    </motion.div>
  );
}
