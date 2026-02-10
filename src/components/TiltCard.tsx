import type { ReactNode } from "react";
import { Box } from "@mui/material";

export default function TiltCard({ children }: { children: ReactNode }) {
  return (
    <Box>{children}</Box>
  );
}
