import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, { stiffness: 800, damping: 45, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 800, damping: 45, mass: 0.35 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 6);
      y.set(e.clientY - 6);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: sx,
          y: sy,
          width: 12,
          height: 12,
          borderRadius: 999,
          background: "rgba(244, 181, 74, 0.95)",
          boxShadow: "0 0 16px rgba(244, 181, 74, 0.42)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: sx,
          y: sy,
          width: 120,
          height: 120,
          borderRadius: 999,
          transform: "translate(-54px, -54px)",
          background:
            "radial-gradient(circle, rgba(244,181,74,0.17) 0%, rgba(244,181,74,0.0) 55%)",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}
