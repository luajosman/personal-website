import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Slightly heavier + a bit less "floaty"
  const sx = useSpring(x, { stiffness: 800, damping: 45, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 800, damping: 45, mass: 0.35 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      // center the small dot (10px radius)
      x.set(e.clientX - 6);
      y.set(e.clientY - 6);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <>
      {/* small dot */}
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
          background: "rgba(13, 62, 40, 0.95)", // dark green
          boxShadow: "0 0 12px rgba(13, 62, 40, 0.35)", // tighter glow
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "multiply",
        }}
      />

      {/* tighter halo */}
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
            "radial-gradient(circle, rgba(13,62,40,0.16) 0%, rgba(13,62,40,0.0) 55%)",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}
