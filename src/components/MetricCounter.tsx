import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MetricCounter({
  value,
  suffix = "",
  duration = 1.35,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [duration, inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
