import { Box } from "@mui/material";

// Static fallback layer: keeps the same visual depth without any animated WebGL.
export default function ScrollCanvasFX() {
  return (
    <Box
      aria-hidden
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: { xs: 0.22, md: 0.3 },
        background:
          "radial-gradient(ellipse at 50% 45%, rgba(244,181,74,0.11) 0%, rgba(244,181,74,0) 62%), radial-gradient(ellipse at 42% 52%, rgba(127,210,255,0.15) 0%, rgba(127,210,255,0) 68%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: { xs: "24% 18%", md: "18% 24%" },
          borderRadius: "50%",
          border: "1px solid rgba(158, 198, 255, 0.16)",
          background:
            "radial-gradient(circle at center, rgba(142,207,255,0.08) 0%, rgba(142,207,255,0.02) 45%, rgba(142,207,255,0) 100%)",
        }}
      />
    </Box>
  );
}
