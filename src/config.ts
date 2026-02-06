export type Locale = "en" | "de";
export type NavKey = "about" | "experience" | "projects" | "contact";

export type SiteCopy = {
  meta: { brand: string; title: string; description: string };
  nav: Record<NavKey, string>;
  hero: {
    headlinePrefix: string;
    headlineAccent: string;
    subline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraph: string;
    techTitle: string;
    techGroups: { title: string; items: string[] }[];
    avatarAlt: string;
  };
  experience: {
    title: string;
    subtitle: string;
    items: { role: string; company: string; period: string; bullets: string[] }[];
  };
  projects: {
    title: string;
    subtitle: string;
    viewButton: string;
    codeButton: string;
    items: { title: string; desc: string; tags: string[]; links?: { live?: string; code?: string } }[];
    modal: { sectionTitle: string; sectionText: string };
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    note: string;
  };
  footer: { text: string };
  ui: { languageLabel: string };
};

export const CONFIG: Record<Locale, SiteCopy> = {
  en: {
    meta: { brand: "Luaj Osman", title: "Luaj Osman | Portfolio", description: "" },
    nav: { about: "About", experience: "Experience", projects: "Projects", contact: "Contact" },
    hero: {
      headlinePrefix: "I’m a",
      headlineAccent: "Software Engineer",
      subline: "I obsess over details and build clean systems optimized for impact.",
      ctaPrimary: "Know more",
      ctaSecondary: "Get in touch",
    },
    about: {
      title: "About Me",
      subtitle: "A short story about what you build and why it matters.",
      paragraph: "Replace this text in config.ts.",
      techTitle: "Tech I work with",
      techGroups: [{ title: "Languages", items: ["TypeScript", "JavaScript"] }],
      avatarAlt: "Portrait",
    },
    experience: { title: "Experience", subtitle: "Timeline", items: [] },
    projects: {
      title: "Projects",
      subtitle: "Click a card to open details.",
      viewButton: "View",
      codeButton: "Code",
      items: [],
      modal: { sectionTitle: "Highlights", sectionText: "Add details here." },
    },
    contact: {
      title: "Contact",
      subtitle: "Send a message.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButton: "Send",
      note: "UI-only for now.",
    },
    footer: { text: "Built with React, TypeScript, MUI, Framer Motion and Three.js." },
    ui: { languageLabel: "Language" },
  },
  de: {
    meta: { brand: "Luaj Osman", title: "Luaj Osman | Portfolio", description: "" },
    nav: { about: "Über mich", experience: "Erfahrung", projects: "Projekte", contact: "Kontakt" },
    hero: {
      headlinePrefix: "Ich bin",
      headlineAccent: "Software Engineer",
      subline: "Ich liebe Details und baue saubere Systeme mit messbarem Impact.",
      ctaPrimary: "Mehr erfahren",
      ctaSecondary: "Kontakt",
    },
    about: {
      title: "Über mich",
      subtitle: "Kurz und konkret, was du baust und warum.",
      paragraph: "Ersetze diesen Text in config.ts.",
      techTitle: "Tech-Stack",
      techGroups: [{ title: "Sprachen", items: ["TypeScript", "JavaScript"] }],
      avatarAlt: "Portrait",
    },
    experience: { title: "Erfahrung", subtitle: "Timeline", items: [] },
    projects: {
      title: "Projekte",
      subtitle: "Klick auf eine Karte für Details.",
      viewButton: "Ansehen",
      codeButton: "Code",
      items: [],
      modal: { sectionTitle: "Highlights", sectionText: "Füge hier Details hinzu." },
    },
    contact: {
      title: "Kontakt",
      subtitle: "Schreib mir eine Nachricht.",
      nameLabel: "Name",
      emailLabel: "E-Mail",
      messageLabel: "Nachricht",
      sendButton: "Senden",
      note: "Aktuell nur UI.",
    },
    footer: { text: "Gebaut mit React, TypeScript, MUI, Framer Motion und Three.js." },
    ui: { languageLabel: "Sprache" },
  },
};
