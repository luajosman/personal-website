import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  const srx = useSpring(rx, { stiffness: 220, damping: 25 });
  const sry = useSpring(ry, { stiffness: 220, damping: 25 });

  return (
    <motion.div
      ref={ref}
      style={{
        transformStyle: "preserve-3d",
        rotateX: srx,
        rotateY: sry,
      }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;

        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;

        const tilt = 10;
        ry.set((px - 0.5) * tilt);
        rx.set(-(py - 0.5) * tilt);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      <div style={{ transform: "translateZ(18px)" }}>{children}</div>
    </motion.div>
  );
}
