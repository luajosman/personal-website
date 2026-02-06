import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds: string[], offset = 120) {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const onScroll = () => {
      const y = window.scrollY + offset;
      let current = active;

      for (const el of els) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (y >= top && y < bottom) {
          current = el.id;
          break;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join("|"), offset]);

  return active;
}
