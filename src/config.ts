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
    meta: {
      brand: "Luaj Osman",
      title: "Luaj Osman | Developer Portfolio",
      description: "Full-stack developer building fast and reliable digital products.",
    },
    nav: { about: "About", experience: "Experience", projects: "Projects", contact: "Contact" },
    hero: {
      headlinePrefix: "Designing clean",
      headlineAccent: "developer experiences",
      subline:
        "Full-stack engineer focused on performant interfaces, resilient backends, and product-minded execution.",
      ctaPrimary: "See projects",
      ctaSecondary: "Book a call",
    },
    about: {
      title: "What I Build",
      subtitle: "Software that ships fast, scales cleanly, and stays maintainable.",
      paragraph:
        "I partner with startups and teams to ship products from concept to production. My approach is practical: strong architecture, thoughtful UI, and observability from day one.",
      techTitle: "Core stack",
      techGroups: [
        { title: "Frontend", items: ["React", "TypeScript", "Next.js", "Framer Motion"] },
        { title: "Backend", items: ["Node.js", "NestJS", "PostgreSQL", "Redis"] },
        { title: "Cloud", items: ["AWS", "Docker", "CI/CD", "Terraform"] },
        { title: "Quality", items: ["Playwright", "Jest", "Sentry", "OpenTelemetry"] },
      ],
      avatarAlt: "Developer portrait",
    },
    experience: {
      title: "Experience",
      subtitle: "A track record of solving engineering bottlenecks and shipping outcomes.",
      items: [
        {
          role: "Senior Full-Stack Engineer",
          company: "Product Studio",
          period: "2023 - Present",
          bullets: [
            "Led architecture for a multi-tenant SaaS platform used by 50k+ monthly users.",
            "Reduced API latency by 43% with caching, query tuning, and async workers.",
            "Mentored 4 engineers and established an end-to-end testing strategy.",
          ],
        },
        {
          role: "Frontend Engineer",
          company: "Fintech Team",
          period: "2021 - 2023",
          bullets: [
            "Built a real-time dashboard handling thousands of streaming updates per minute.",
            "Improved Core Web Vitals from poor to good across key acquisition pages.",
            "Introduced a component system that cut feature delivery time by 30%.",
          ],
        },
        {
          role: "Software Engineer",
          company: "Freelance",
          period: "2019 - 2021",
          bullets: [
            "Delivered MVPs for B2B founders across health, logistics, and ecommerce.",
            "Designed deployment pipelines with rollback and monitoring baked in.",
            "Balanced speed and maintainability for small teams under tight deadlines.",
          ],
        },
      ],
    },
    projects: {
      title: "Selected Projects",
      subtitle: "Built with a focus on product impact, performance, and developer ergonomics.",
      viewButton: "View case",
      codeButton: "Source",
      items: [
        {
          title: "FlowOps",
          desc: "Workflow automation dashboard with live metrics, role-based access, and audit trails.",
          tags: ["React", "Node.js", "PostgreSQL", "WebSockets"],
          links: { code: "https://github.com" },
        },
        {
          title: "Launchpad CMS",
          desc: "Headless content platform for growth teams with visual preview and granular permissions.",
          tags: ["Next.js", "Prisma", "tRPC", "Docker"],
          links: { code: "https://github.com" },
        },
        {
          title: "Pulse Monitor",
          desc: "Observability layer that correlates logs, traces, and incidents for faster debugging.",
          tags: ["TypeScript", "Kafka", "Redis", "OpenTelemetry"],
          links: { code: "https://github.com" },
        },
      ],
      modal: {
        sectionTitle: "Build notes",
        sectionText:
          "Architecture and implementation details can be tailored for your stack, constraints, and timeline.",
      },
    },
    contact: {
      title: "Let’s Build",
      subtitle: "Need a developer who can own product and engineering execution end-to-end?",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Project details",
      sendButton: "Send inquiry",
      note: "Typical response time: within 24 hours.",
    },
    footer: { text: "Engineered with React, TypeScript, MUI, and Framer Motion." },
    ui: { languageLabel: "Language" },
  },
  de: {
    meta: {
      brand: "Luaj Osman",
      title: "Luaj Osman | Developer Portfolio",
      description: "Full-Stack Developer für performante und robuste Produkte.",
    },
    nav: { about: "Über mich", experience: "Erfahrung", projects: "Projekte", contact: "Kontakt" },
    hero: {
      headlinePrefix: "Ich entwickle starke",
      headlineAccent: "Developer Experiences",
      subline:
        "Full-Stack Engineer mit Fokus auf performante Frontends, stabile Backends und produktorientierte Umsetzung.",
      ctaPrimary: "Projekte ansehen",
      ctaSecondary: "Termin buchen",
    },
    about: {
      title: "Was ich baue",
      subtitle: "Software, die schnell ausgeliefert wird und langfristig wartbar bleibt.",
      paragraph:
        "Ich unterstütze Teams dabei, Produkte von der Idee bis in die Produktion zu bringen. Mein Stil ist pragmatisch: gute Architektur, saubere UI und Monitoring von Anfang an.",
      techTitle: "Kern-Stack",
      techGroups: [
        { title: "Frontend", items: ["React", "TypeScript", "Next.js", "Framer Motion"] },
        { title: "Backend", items: ["Node.js", "NestJS", "PostgreSQL", "Redis"] },
        { title: "Cloud", items: ["AWS", "Docker", "CI/CD", "Terraform"] },
        { title: "Qualität", items: ["Playwright", "Jest", "Sentry", "OpenTelemetry"] },
      ],
      avatarAlt: "Developer Portrait",
    },
    experience: {
      title: "Erfahrung",
      subtitle: "Nachweisbare Ergebnisse bei Architektur, Performance und Delivery.",
      items: [
        {
          role: "Senior Full-Stack Engineer",
          company: "Product Studio",
          period: "2023 - Heute",
          bullets: [
            "Architektur für eine Multi-Tenant-SaaS-Plattform mit 50k+ monatlichen Nutzern verantwortet.",
            "API-Latenz durch Caching, Query-Tuning und Worker um 43% reduziert.",
            "Vier Engineers betreut und eine End-to-End-Teststrategie aufgebaut.",
          ],
        },
        {
          role: "Frontend Engineer",
          company: "Fintech Team",
          period: "2021 - 2023",
          bullets: [
            "Echtzeit-Dashboard mit tausenden Updates pro Minute umgesetzt.",
            "Core Web Vitals auf relevanten Seiten von schlecht auf gut verbessert.",
            "Komponentensystem eingeführt und Delivery-Zeit um 30% gesenkt.",
          ],
        },
        {
          role: "Software Engineer",
          company: "Freelance",
          period: "2019 - 2021",
          bullets: [
            "MVPs für B2B-Startups in Health, Logistik und Ecommerce geliefert.",
            "Deployment-Pipelines mit Rollback und Monitoring etabliert.",
            "Zwischen Geschwindigkeit und Wartbarkeit bei kleinen Teams balanciert.",
          ],
        },
      ],
    },
    projects: {
      title: "Ausgewählte Projekte",
      subtitle: "Mit Fokus auf Produktwirkung, Performance und Developer Ergonomics.",
      viewButton: "Case ansehen",
      codeButton: "Source",
      items: [
        {
          title: "FlowOps",
          desc: "Workflow-Automation-Dashboard mit Live-Metriken, Rollenrechten und Audit-Trails.",
          tags: ["React", "Node.js", "PostgreSQL", "WebSockets"],
          links: { code: "https://github.com" },
        },
        {
          title: "Launchpad CMS",
          desc: "Headless-Content-Plattform mit Visual Preview und granularen Berechtigungen.",
          tags: ["Next.js", "Prisma", "tRPC", "Docker"],
          links: { code: "https://github.com" },
        },
        {
          title: "Pulse Monitor",
          desc: "Observability-Schicht zur Korrelation von Logs, Traces und Incidents.",
          tags: ["TypeScript", "Kafka", "Redis", "OpenTelemetry"],
          links: { code: "https://github.com" },
        },
      ],
      modal: {
        sectionTitle: "Build Notes",
        sectionText:
          "Architektur- und Implementierungsdetails können auf Stack, Constraints und Timeline angepasst werden.",
      },
    },
    contact: {
      title: "Lass uns bauen",
      subtitle: "Du brauchst einen Developer, der Produkt und Engineering End-to-End übernimmt?",
      nameLabel: "Name",
      emailLabel: "E-Mail",
      messageLabel: "Projektbeschreibung",
      sendButton: "Anfrage senden",
      note: "Typische Antwortzeit: innerhalb von 24 Stunden.",
    },
    footer: { text: "Entwickelt mit React, TypeScript, MUI und Framer Motion." },
    ui: { languageLabel: "Sprache" },
  },
};
