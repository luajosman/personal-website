import { Box, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

type Milestone = {
  name: string;
  summary: string;
  tag: string;
};

export default function MilestoneRail({ items }: { items: Milestone[] }) {
  return (
    <Stack spacing={1.1}>
      {items.map((item, idx) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: idx * 0.06 }}
          whileHover={{ x: 4 }}
        >
          <Paper
            sx={{
              p: 1.5,
              background: "linear-gradient(160deg, rgba(14,24,38,0.9), rgba(9,15,24,0.95))",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
              <Typography sx={{ fontWeight: 700 }}>{item.name}</Typography>
              <Typography sx={{ fontFamily: "monospace", color: "#f4b54a", fontSize: 12 }}>
                {item.tag}
              </Typography>
            </Box>
            <Typography color="text.secondary" sx={{ mt: 0.4, fontSize: 14 }}>
              {item.summary}
            </Typography>
          </Paper>
        </motion.div>
      ))}
    </Stack>
  );
}
