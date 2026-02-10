import { Backdrop, Box, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectModal({
  open,
  onClose,
  title,
  desc,
  highlightsTitle,
  highlightsText,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  desc: string;
  highlightsTitle: string;
  highlightsText: string;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <Backdrop open sx={{ zIndex: 1300, background: "rgba(6, 10, 18, 0.78)" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ width: "min(780px, 92vw)" }}
            onClick={onClose}
          >
            <motion.div
              initial={{ y: 24, scale: 0.98, filter: "blur(8px)" }}
              animate={{ y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ y: 24, scale: 0.98, filter: "blur(8px)" }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Paper
                sx={{
                  p: { xs: 2.2, md: 3 },
                  position: "relative",
                  background: "linear-gradient(150deg, rgba(16,27,42,0.94), rgba(10,16,25,0.94))",
                }}
              >
                <IconButton
                  onClick={onClose}
                  sx={{ position: "absolute", top: 8, right: 8 }}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>

                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {title}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1.2 }}>
                  {desc}
                </Typography>

                <Box
                  sx={{
                    mt: 2.2,
                    p: 2,
                    borderRadius: 3,
                    border: "1px solid rgba(127,210,255,0.26)",
                    background: "rgba(13, 20, 31, 0.76)",
                  }}
                >
                  <Typography sx={{ fontWeight: 700, color: "#7fd2ff" }}>{highlightsTitle}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.65 }}>
                    {highlightsText}
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </motion.div>
        </Backdrop>
      ) : null}
    </AnimatePresence>
  );
}
