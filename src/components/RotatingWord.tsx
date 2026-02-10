import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function RotatingWord({
  words,
  interval = 3200,
}: {
  words: string[];
  interval?: number;
}) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeWords.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % safeWords.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, safeWords.length]);

  if (!safeWords.length) return null;

  return (
    <span style={{ display: "inline-flex", minWidth: "16ch", justifyContent: "center" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={safeWords[index]}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          style={{ display: "inline-block", color: "#7fd2ff" }}
        >
          {safeWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
