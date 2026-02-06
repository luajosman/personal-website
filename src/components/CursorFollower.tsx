import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.3 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
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
          width: 20,
          height: 20,
          borderRadius: 999,
          background: "rgba(139, 92, 246, 0.9)",
          boxShadow: "0 0 22px rgba(139, 92, 246, 0.55)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "screen",
        }}
      />
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: sx,
          y: sy,
          width: 240,
          height: 240,
          borderRadius: 999,
          transform: "translate(-110px, -110px)",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.22) 0%, rgba(139,92,246,0.0) 60%)",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}
