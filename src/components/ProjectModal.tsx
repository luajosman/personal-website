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
        <Backdrop open sx={{ zIndex: 1300 }}>
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
              <Paper sx={{ p: 3, position: "relative" }}>
                <IconButton
                  onClick={onClose}
                  sx={{ position: "absolute", top: 10, right: 10 }}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>

                <Typography variant="h5" fontWeight={900}>
                  {title}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {desc}
                </Typography>

                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <Typography fontWeight={900}>{highlightsTitle}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.5 }}>
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
