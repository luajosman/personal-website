import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AppleWindow from "./AppleWindow";

export default function MiniTerminal({
  title,
  lines,
}: {
  title: string;
  lines: string[];
}) {
  return (
    <AppleWindow title={title} subtitle="stable-mode" minHeight={250}>
      <Box sx={{ display: "grid", gap: 0.8 }}>
        {lines.map((line, idx) => (
          <motion.div
            key={`${line}-${idx}`}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: 0.08 + idx * 0.06, ease: "easeOut" }}
          >
            <Typography sx={{ fontFamily: "monospace", color: "#b8d4ff", fontSize: 13 }}>
              <Box component="span" sx={{ color: "#7fd2ff" }}>
                {">"}
              </Box>{" "}
              {line}
            </Typography>
          </motion.div>
        ))}
      </Box>
    </AppleWindow>
  );
}
