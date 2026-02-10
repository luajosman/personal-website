import { Box } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

type Node = {
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
};

type Beam = {
  top: string;
  left: string;
  width: string;
  rotate: number;
  delay: number;
};

type Orb = {
  top: string;
  left: string;
  width: number;
  height: number;
  blur: number;
  color: string;
  duration: number;
  delay: number;
};

type Ring = {
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
};

type Particle = {
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
};

type Sweep = {
  top: string;
  left: string;
  width: string;
  height: number;
  rotate: number;
  delay: number;
};

const ORBS: Orb[] = [
  {
    top: "4%",
    left: "-10%",
    width: 520,
    height: 420,
    blur: 60,
    color: "rgba(127,210,255,0.24)",
    duration: 30,
    delay: 0.2,
  },
  {
    top: "58%",
    left: "63%",
    width: 480,
    height: 380,
    blur: 64,
    color: "rgba(244,181,74,0.2)",
    duration: 27,
    delay: 1.1,
  },
  {
    top: "28%",
    left: "36%",
    width: 560,
    height: 420,
    blur: 68,
    color: "rgba(100,120,255,0.16)",
    duration: 33,
    delay: 0.4,
  },
];

const RINGS: Ring[] = [
  { top: "18%", left: "72%", size: 220, duration: 9.5, delay: 0.2 },
  { top: "64%", left: "11%", size: 280, duration: 11.4, delay: 0.8 },
  { top: "74%", left: "66%", size: 190, duration: 10.6, delay: 0.5 },
];

const SWEEPS: Sweep[] = [
  { top: "26%", left: "-8%", width: "44%", height: 160, rotate: -8, delay: 0.3 },
  { top: "58%", left: "54%", width: "38%", height: 140, rotate: 11, delay: 0.7 },
];

const NODES: Node[] = [
  { top: "11%", left: "8%", size: 10, duration: 7.5, delay: 0.1, color: "#7fd2ff" },
  { top: "20%", left: "26%", size: 7, duration: 8.2, delay: 0.6, color: "#f4b54a" },
  { top: "15%", left: "76%", size: 11, duration: 7.9, delay: 0.2, color: "#7fd2ff" },
  { top: "34%", left: "60%", size: 6, duration: 8.4, delay: 0.9, color: "#ffd98c" },
  { top: "48%", left: "18%", size: 9, duration: 8.1, delay: 0.35, color: "#7fd2ff" },
  { top: "56%", left: "43%", size: 12, duration: 7.7, delay: 0.7, color: "#f4b54a" },
  { top: "68%", left: "80%", size: 8, duration: 8.3, delay: 0.4, color: "#7fd2ff" },
  { top: "84%", left: "30%", size: 7, duration: 8.8, delay: 0.5, color: "#ffd98c" },
];

const BEAMS: Beam[] = [
  { top: "16%", left: "11%", width: "28%", rotate: 6, delay: 0.2 },
  { top: "38%", left: "46%", width: "22%", rotate: -15, delay: 0.5 },
  { top: "72%", left: "17%", width: "30%", rotate: -10, delay: 0.7 },
  { top: "80%", left: "52%", width: "25%", rotate: 9, delay: 0.4 },
  { top: "24%", left: "58%", width: "20%", rotate: 15, delay: 0.1 },
  { top: "62%", left: "28%", width: "18%", rotate: -18, delay: 0.6 },
  { top: "44%", left: "4%", width: "24%", rotate: 4, delay: 0.9 },
];

const PARTICLES: Particle[] = [
  { top: "8%", left: "47%", size: 3, duration: 5.6, delay: 0.2 },
  { top: "22%", left: "14%", size: 2, duration: 5.2, delay: 0.4 },
  { top: "29%", left: "88%", size: 2, duration: 6.1, delay: 0.7 },
  { top: "37%", left: "33%", size: 2, duration: 5.4, delay: 0.5 },
  { top: "46%", left: "74%", size: 3, duration: 6.2, delay: 0.3 },
  { top: "54%", left: "8%", size: 2, duration: 5.7, delay: 0.6 },
  { top: "63%", left: "52%", size: 2, duration: 6.3, delay: 0.9 },
  { top: "71%", left: "24%", size: 3, duration: 5.5, delay: 0.8 },
  { top: "78%", left: "43%", size: 2, duration: 6.1, delay: 0.1 },
  { top: "86%", left: "68%", size: 2, duration: 5.8, delay: 0.2 },
];

export default function ConstellationBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <Box
      aria-hidden
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {ORBS.map((orb, index) => (
        <motion.div
          key={`orb-${index}`}
          initial={{ opacity: 0 }}
          animate={
            reducedMotion
              ? { opacity: 0.18 }
              : {
                  opacity: [0.16, 0.28, 0.16],
                  x: [0, 46, -28, 0],
                  y: [0, -20, 18, 0],
                  scale: [1, 1.06, 0.95, 1],
                }
          }
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: orb.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: orb.delay,
                }
          }
          style={{
            position: "absolute",
            top: orb.top,
            left: orb.left,
            width: orb.width,
            height: orb.height,
            borderRadius: "50%",
            filter: `blur(${orb.blur}px)`,
            background: orb.color,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={
          reducedMotion
            ? { opacity: 0.08 }
            : {
                opacity: [0.07, 0.13, 0.07],
                rotate: [0, 4, 0],
                scale: [1, 1.03, 1],
              }
        }
        transition={
          reducedMotion
            ? undefined
            : { duration: 24, repeat: Infinity, ease: "easeInOut" }
        }
        style={{
          position: "absolute",
          inset: "-30%",
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(127,210,255,0.06), rgba(244,181,74,0.04), rgba(127,210,255,0.06))",
        }}
      />

      {SWEEPS.map((sweep, index) => (
        <motion.div
          key={`sweep-${index}`}
          initial={{ opacity: 0.03 }}
          animate={reducedMotion ? { opacity: 0.05 } : { opacity: [0.02, 0.11, 0.02], x: [0, 70, 0] }}
          transition={
            reducedMotion
              ? undefined
              : { duration: 14 + index * 2, repeat: Infinity, ease: "easeInOut", delay: sweep.delay }
          }
          style={{
            position: "absolute",
            top: sweep.top,
            left: sweep.left,
            width: sweep.width,
            height: sweep.height,
            transform: `rotate(${sweep.rotate}deg)`,
            background:
              "linear-gradient(90deg, rgba(127,210,255,0.18) 0%, rgba(127,210,255,0.02) 50%, rgba(244,181,74,0.14) 100%)",
            filter: "blur(26px)",
          }}
        />
      ))}

      {RINGS.map((ring, index) => (
        <motion.div
          key={`ring-${index}`}
          initial={{ opacity: 0 }}
          animate={
            reducedMotion
              ? { opacity: 0.11 }
              : {
                  opacity: [0.08, 0.22, 0.08],
                  scale: [0.9, 1.08, 0.9],
                }
          }
          transition={
            reducedMotion
              ? undefined
              : { duration: ring.duration, repeat: Infinity, ease: "easeInOut", delay: ring.delay }
          }
          style={{
            position: "absolute",
            top: ring.top,
            left: ring.left,
            width: ring.size,
            height: ring.size,
            borderRadius: "50%",
            border: "1px solid rgba(127, 210, 255, 0.24)",
            boxShadow: "0 0 0 24px rgba(127,210,255,0.03)",
          }}
        />
      ))}

      {BEAMS.map((beam, index) => (
        <motion.div
          key={`beam-${index}`}
          initial={{ opacity: 0.06 }}
          animate={
            reducedMotion
              ? { opacity: 0.08 }
              : {
                  opacity: [0.05, 0.16, 0.05],
                  scaleX: [1, 1.1, 1],
                }
          }
          transition={
            reducedMotion
              ? undefined
              : { duration: 7 + index, repeat: Infinity, ease: "easeInOut", delay: beam.delay }
          }
          style={{
            position: "absolute",
            top: beam.top,
            left: beam.left,
            width: beam.width,
            height: 1,
            transform: `rotate(${beam.rotate}deg)`,
            background:
              "linear-gradient(90deg, rgba(127,210,255,0) 0%, rgba(127,210,255,0.35) 45%, rgba(244,181,74,0) 100%)",
          }}
        />
      ))}

      {PARTICLES.map((particle, index) => (
        <motion.div
          key={`particle-${index}`}
          initial={{ opacity: 0.12 }}
          animate={
            reducedMotion
              ? { opacity: 0.2 }
              : {
                  opacity: [0.08, 0.45, 0.08],
                  scale: [1, 1.5, 1],
                }
          }
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: particle.delay,
                }
          }
          style={{
            position: "absolute",
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            borderRadius: 999,
            background: "rgba(205, 229, 255, 0.95)",
            boxShadow: "0 0 12px rgba(205,229,255,0.7)",
          }}
        />
      ))}

      {NODES.map((node, index) => (
        <motion.div
          key={`node-${index}`}
          initial={{ opacity: 0.25 }}
          animate={
            reducedMotion
              ? { opacity: 0.3 }
              : {
                  y: [0, -12, 0],
                  scale: [1, 1.12, 1],
                  opacity: [0.22, 0.6, 0.22],
                }
          }
          transition={{
            duration: node.duration,
            repeat: reducedMotion ? 0 : Infinity,
            ease: "easeInOut",
            delay: node.delay,
          }}
          style={{
            position: "absolute",
            top: node.top,
            left: node.left,
            width: node.size,
            height: node.size,
            borderRadius: 999,
            background: node.color,
            boxShadow: `0 0 0 6px ${node.color}22, 0 0 18px ${node.color}66`,
          }}
        />
      ))}
    </Box>
  );
}
