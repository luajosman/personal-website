import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const points = [
  { x: 42, y: 20, label: "Architecture" },
  { x: 70, y: 40, label: "Velocity" },
  { x: 58, y: 72, label: "Reliability" },
  { x: 28, y: 64, label: "DX" },
];

export default function RadarPanel() {
  return (
    <Box
      sx={{
        position: "relative",
        height: 300,
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid rgba(193, 218, 255, 0.2)",
        background:
          "radial-gradient(circle at center, rgba(127,210,255,0.16) 0%, rgba(127,210,255,0.03) 40%, rgba(8,14,22,0.95) 100%)",
      }}
    >
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={`ring-${ring}`}
          animate={{ scale: [0.95, 1.03, 0.95], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 5 + ring, repeat: Infinity, ease: "easeInOut", delay: ring * 0.3 }}
          style={{
            position: "absolute",
            inset: `${ring * 14}%`,
            borderRadius: "50%",
            border: "1px solid rgba(127, 210, 255, 0.22)",
          }}
        />
      ))}

      {points.map((point, idx) => (
        <motion.div
          key={point.label}
          animate={{ scale: [1, 1.22, 1], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
          style={{
            position: "absolute",
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: 8,
            height: 8,
            borderRadius: 999,
            background: idx % 2 ? "#f4b54a" : "#7fd2ff",
            boxShadow: "0 0 14px rgba(127,210,255,0.65)",
          }}
        />
      ))}

      <Typography
        sx={{
          position: "absolute",
          left: 12,
          top: 10,
          fontFamily: "monospace",
          letterSpacing: "0.1em",
          color: "#9fd8ff",
          fontSize: 12,
        }}
      >
        SYSTEM HEALTH MAP
      </Typography>
    </Box>
  );
}
