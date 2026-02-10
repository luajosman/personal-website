import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export default function Magnetic({
  children,
  strength = 14,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 260, damping: 34, mass: 0.72 });
  const sy = useSpring(y, { stiffness: 260, damping: 34, mass: 0.72 });

  return (
    <motion.div
      ref={ref}
      style={{
        x: sx,
        y: sy,
        display: "inline-block",
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
      onPointerEnter={(e) => {
        if (reduceMotion || e.pointerType !== "mouse") return;
        rectRef.current = ref.current?.getBoundingClientRect() ?? null;
      }}
      onPointerMove={(e) => {
        if (reduceMotion || e.pointerType !== "mouse") return;

        const r = rectRef.current;
        if (!r) return;

        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);

        const nx = Math.max(-0.5, Math.min(0.5, dx / r.width));
        const ny = Math.max(-0.5, Math.min(0.5, dy / r.height));

        x.set(nx * strength);
        y.set(ny * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
        rectRef.current = null;
      }}
    >
      {children}
    </motion.div>
  );
}
