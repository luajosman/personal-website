import { Box, Chip } from "@mui/material";
import { motion } from "framer-motion";

export default function TagMarquee({
  items,
  reverse = false,
  duration = 24,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
}) {
  const looped = [...items, ...items];

  return (
    <Box
      sx={{
        overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        py: 0.4,
      }}
    >
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          display: "flex",
          width: "max-content",
          gap: 10,
          paddingRight: 10,
        }}
      >
        {looped.map((item, idx) => (
          <Chip
            key={`${item}-${idx}`}
            label={item}
            variant="outlined"
            size="small"
            sx={{
              bgcolor: "rgba(16, 24, 36, 0.74)",
              color: "rgba(225, 237, 255, 0.92)",
              borderColor: "rgba(198, 221, 255, 0.22)",
            }}
          />
        ))}
      </motion.div>
    </Box>
  );
}
