export type Locale = "en" | "de";
export type NavKey = "projects" | "impact" | "about" | "experience" | "contact";

export type SiteCopy = {
  meta: { brand: string; title: string; description: string };
  nav: Record<NavKey, string>;
  hero: {
    headlinePrefix: string;
    headlineAccent: string;
    rotatingWords: string[];
    subline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  impact: {
    title: string;
    subtitle: string;
    stats: { value: number; suffix: string; label: string; note: string }[];
    pillars: { title: string; desc: string; tags: string[] }[];
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
  toolkit: {
    title: string;
    subtitle: string;
    lanes: string[][];
  };
  systems: {
    title: string;
    subtitle: string;
    terminalTitle: string;
    terminalLines: string[];
    phases: { name: string; summary: string; tag: string }[];
    playbookTitle: string;
    playbookItems: { title: string; text: string; tags: string[] }[];
    note: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    note: string;
    directEmail: string;
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
    nav: {
      projects: "Projects",
      impact: "Impact",
      about: "About",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      headlinePrefix: "I build",
      headlineAccent: "developer products",
      rotatingWords: ["that scale", "that convert", "that stay maintainable", "that feel premium"],
      subline:
        "Full-stack engineer focused on performant interfaces, resilient backends, and product-minded execution.",
      ctaPrimary: "See projects",
      ctaSecondary: "Book a call",
    },
    impact: {
      title: "Product Impact",
      subtitle: "Fast execution, measurable outcomes, and engineering systems built to last.",
      stats: [
        { value: 18, suffix: "+", label: "Products shipped", note: "From MVP to scale stage." },
        { value: 43, suffix: "%", label: "Latency reduction", note: "Across critical API paths." },
        { value: 99, suffix: ".95%", label: "Reliability", note: "Production uptime target." },
        { value: 7, suffix: "d", label: "Average feature cycle", note: "Idea to production iteration." },
      ],
      pillars: [
        {
          title: "Architecture",
          desc: "Domain-driven modular systems with clean contracts and evolvable boundaries.",
          tags: ["Type-safe APIs", "Service boundaries", "Event-driven flows"],
        },
        {
          title: "Performance",
          desc: "Frontend and backend optimization based on budgets, profiling, and production telemetry.",
          tags: ["Core Web Vitals", "Query tuning", "Caching strategy"],
        },
        {
          title: "Delivery",
          desc: "Reliable CI/CD with tests, observability, and rollback paths as default.",
          tags: ["Automated QA", "Monitoring", "Release safety"],
        },
      ],
    },
    about: {
      title: "What I Build",
      subtitle: "Software that ships fast, scales cleanly, and stays maintainable.",
      paragraph:
        "I partner with startups and teams to ship products from concept to production. My approach is practical: strong architecture, thoughtful UI, and observability from day one.",
      techTitle: "Core skills (from CV)",
      techGroups: [
        {
          title: "Frontend",
          items: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS (Tailwind)",
            "Vue.js",
            "Material UI",
            "Shadcn UI",
          ],
        },
        {
          title: "Backend & APIs",
          items: [
            "Node.js",
            "Express.js",
            "FastAPI",
            "Flask",
            "Spring Boot",
            "REST APIs",
            "GraphQL (Basic)",
            "Apache Kafka",
          ],
        },
        {
          title: "Data & Cloud",
          items: [
            "PostgreSQL",
            "MySQL",
            "SQL",
            "Docker",
            "GitLab CI/CD",
            "AWS (Basic)",
            "Linux",
            "Client-Server Architecture",
          ],
        },
        {
          title: "Tooling & Quality",
          items: [
            "Git",
            "GitHub",
            "GitLab",
            "Jira",
            "Confluence",
            "Figma",
            "Firebase",
            "Vercel",
            "JUnit",
            "PyTest",
          ],
        },
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
      subtitle: "Project highlights pulled directly from my CV.",
      viewButton: "View details",
      codeButton: "GitHub",
      items: [
        {
          title: "Stock Predictor AI",
          desc: "Full-stack AI market analysis app with live stock data, interactive charts, and AI-generated insights.",
          tags: ["Next.js", "TypeScript", "TailwindCSS", "Claude AI API", "Finnhub API", "Vercel"],
          links: { code: "https://github.com/luajosman/ai-stock-predictor" },
        },
        {
          title: "EIBA-TS @ Fraunhofer IPK",
          desc: "Scalable React frontend for industrial anomaly detection with independent architecture and tech-stack decisions.",
          tags: ["React", "JavaScript", "FastAPI", "Apache Kafka", "GitLab"],
          links: { code: "https://github.com/luajosman" },
        },
        {
          title: "AI-Supported Learning Analytics Module",
          desc: "Built analytics and LLM-powered evaluation features for a university learning app, including learning progress and exam-relevant summaries.",
          tags: ["Flutter (Dart)", "Python", "LangChain", "Firebase", "Figma"],
          links: { code: "https://github.com/luajosman" },
        },
      ],
      modal: {
        sectionTitle: "Build notes",
        sectionText:
          "Most academic and company work is private; public code is linked on my GitHub profile.",
      },
    },
    toolkit: {
      title: "Engineering Toolkit",
      subtitle: "Skills and tools used across projects and production work.",
      lanes: [
        [
          "Java",
          "Kotlin (Basic)",
          "Python",
          "JavaScript",
          "TypeScript",
          "Scala",
          "C++",
          "Flutter (Dart)",
        ],
        [
          "React",
          "Next.js",
          "Vue.js",
          "HTML",
          "CSS (Tailwind)",
          "Material UI",
          "Shadcn UI",
          "Node.js",
          "Express.js",
        ],
        [
          "FastAPI",
          "Flask",
          "Spring Boot",
          "REST APIs",
          "GraphQL (Basic)",
          "Apache Kafka",
          "PostgreSQL",
          "MySQL",
          "SQL",
          "Docker",
          "GitLab CI/CD",
          "AWS (Basic)",
          "Linux",
          "GitHub",
          "GitLab",
          "Jira",
          "Confluence",
          "Figma",
          "Firebase",
          "Vercel",
          "JUnit",
          "PyTest",
        ],
      ],
    },
    systems: {
      title: "Engineering Systems",
      subtitle: "More modular components for delivery, reliability, and consistent execution.",
      terminalTitle: "session://build-runtime",
      terminalLines: [
        "Bootstrapping reusable UI primitives",
        "Syncing motion tokens across sections",
        "Validating responsive behavior",
        "Deploying hardened production bundle",
      ],
      phases: [
        { name: "Discovery", summary: "Goals, constraints, and scope framing.", tag: "P01" },
        { name: "Architecture", summary: "Define boundaries and contract-first APIs.", tag: "P02" },
        { name: "Build", summary: "Implement components with testable structure.", tag: "P03" },
        { name: "Hardening", summary: "Performance, monitoring, and release safety.", tag: "P04" },
      ],
      playbookTitle: "PLAYBOOK",
      playbookItems: [
        {
          title: "Component Contracts",
          text: "Keep components prop-driven and stateless whenever possible for predictable composition.",
          tags: ["Type safety", "Composition", "Reusability"],
        },
        {
          title: "Motion Discipline",
          text: "Use a small set of shared transitions so interactions feel coherent across the whole page.",
          tags: ["Framer Motion", "Consistency", "UX"],
        },
        {
          title: "Production Reliability",
          text: "Ship with tracing, monitoring, and fallback states before scaling feature surface.",
          tags: ["Observability", "Stability", "Delivery"],
        },
      ],
      note:
        "This section is built from isolated reusable components, so each panel can evolve independently without breaking the overall layout.",
    },
    contact: {
      title: "Let’s Build",
      subtitle: "Need a developer who can own product and engineering execution end-to-end?",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Project details",
      sendButton: "Send inquiry",
      note: "Typical response time: within 24 hours.",
      directEmail: "luaj.osman@gmail.com",
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
    nav: {
      projects: "Projekte",
      impact: "Impact",
      about: "Über mich",
      experience: "Erfahrung",
      contact: "Kontakt",
    },
    hero: {
      headlinePrefix: "Ich baue",
      headlineAccent: "digitale Produkte",
      rotatingWords: ["die skalieren", "die konvertieren", "die wartbar bleiben", "die premium wirken"],
      subline:
        "Full-Stack Engineer mit Fokus auf performante Frontends, stabile Backends und produktorientierte Umsetzung.",
      ctaPrimary: "Projekte ansehen",
      ctaSecondary: "Termin buchen",
    },
    impact: {
      title: "Product Impact",
      subtitle: "Schnelle Umsetzung, messbare Ergebnisse und robuste Engineering-Standards.",
      stats: [
        { value: 18, suffix: "+", label: "Produkte geliefert", note: "Vom MVP bis Scale Stage." },
        { value: 43, suffix: "%", label: "Latenz reduziert", note: "Auf kritischen API-Pfaden." },
        { value: 99, suffix: ".95%", label: "Reliability", note: "Ziel für Produktions-Uptime." },
        { value: 7, suffix: "d", label: "Feature-Zyklus", note: "Von Idee bis Deployment." },
      ],
      pillars: [
        {
          title: "Architektur",
          desc: "Modulare Systeme mit klaren Schnittstellen und wartbaren Domänengrenzen.",
          tags: ["Type-safe APIs", "Service Boundaries", "Event Flows"],
        },
        {
          title: "Performance",
          desc: "Frontend- und Backend-Optimierung auf Basis von Profiling und Produktmetriken.",
          tags: ["Core Web Vitals", "Query Tuning", "Caching"],
        },
        {
          title: "Delivery",
          desc: "CI/CD mit Tests, Monitoring und Rollback-Mechanismen als Standard.",
          tags: ["Automated QA", "Monitoring", "Release Safety"],
        },
      ],
    },
    about: {
      title: "Was ich baue",
      subtitle: "Software, die schnell ausgeliefert wird und langfristig wartbar bleibt.",
      paragraph:
        "Ich unterstütze Teams dabei, Produkte von der Idee bis in die Produktion zu bringen. Mein Stil ist pragmatisch: gute Architektur, saubere UI und Monitoring von Anfang an.",
      techTitle: "Kern-Skills (aus dem CV)",
      techGroups: [
        {
          title: "Frontend",
          items: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS (Tailwind)",
            "Vue.js",
            "Material UI",
            "Shadcn UI",
          ],
        },
        {
          title: "Backend & APIs",
          items: [
            "Node.js",
            "Express.js",
            "FastAPI",
            "Flask",
            "Spring Boot",
            "REST APIs",
            "GraphQL (Basic)",
            "Apache Kafka",
          ],
        },
        {
          title: "Daten & Cloud",
          items: [
            "PostgreSQL",
            "MySQL",
            "SQL",
            "Docker",
            "GitLab CI/CD",
            "AWS (Basic)",
            "Linux",
            "Client-Server Architecture",
          ],
        },
        {
          title: "Tooling & Qualität",
          items: [
            "Git",
            "GitHub",
            "GitLab",
            "Jira",
            "Confluence",
            "Figma",
            "Firebase",
            "Vercel",
            "JUnit",
            "PyTest",
          ],
        },
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
      subtitle: "Projekt-Highlights direkt aus meinem CV.",
      viewButton: "Details ansehen",
      codeButton: "GitHub",
      items: [
        {
          title: "Stock Predictor AI",
          desc: "Full-Stack AI Market Analysis App mit Live-Aktienkursen, interaktiven Charts und KI-generierten Insights.",
          tags: ["Next.js", "TypeScript", "TailwindCSS", "Claude AI API", "Finnhub API", "Vercel"],
          links: { code: "https://github.com/luajosman/ai-stock-predictor" },
        },
        {
          title: "EIBA-TS @ Fraunhofer IPK",
          desc: "Skalierbares React-Frontend für industrielle Anomalieerkennung mit eigener Architektur- und Stack-Verantwortung.",
          tags: ["React", "JavaScript", "FastAPI", "Apache Kafka", "GitLab"],
          links: { code: "https://github.com/luajosman" },
        },
        {
          title: "Analytics-Modul für eine KI-Lernplattform",
          desc: "Analytics- und LLM-Features für eine universitäre Lern-App, inkl. Lernfortschritt und klausurrelevanter Zusammenfassungen.",
          tags: ["Flutter (Dart)", "Python", "LangChain", "Firebase", "Figma"],
          links: { code: "https://github.com/luajosman" },
        },
      ],
      modal: {
        sectionTitle: "Build Notes",
        sectionText:
          "Viele Uni- und Unternehmensprojekte sind privat; öffentliches Code-Material ist in meinem GitHub-Profil verlinkt.",
      },
    },
    toolkit: {
      title: "Engineering Toolkit",
      subtitle: "Skills und Tools aus Projekten und produktiver Entwicklung.",
      lanes: [
        [
          "Java",
          "Kotlin (Basic)",
          "Python",
          "JavaScript",
          "TypeScript",
          "Scala",
          "C++",
          "Flutter (Dart)",
        ],
        [
          "React",
          "Next.js",
          "Vue.js",
          "HTML",
          "CSS (Tailwind)",
          "Material UI",
          "Shadcn UI",
          "Node.js",
          "Express.js",
        ],
        [
          "FastAPI",
          "Flask",
          "Spring Boot",
          "REST APIs",
          "GraphQL (Basic)",
          "Apache Kafka",
          "PostgreSQL",
          "MySQL",
          "SQL",
          "Docker",
          "GitLab CI/CD",
          "AWS (Basic)",
          "Linux",
          "GitHub",
          "GitLab",
          "Jira",
          "Confluence",
          "Figma",
          "Firebase",
          "Vercel",
          "JUnit",
          "PyTest",
        ],
      ],
    },
    systems: {
      title: "Engineering Systems",
      subtitle: "Mehr modulare Komponenten für Delivery, Reliability und klare Prozesse.",
      terminalTitle: "session://build-runtime",
      terminalLines: [
        "Wiederverwendbare UI-Primitives initialisieren",
        "Motion-Tokens über alle Sektionen synchronisieren",
        "Responsive Verhalten validieren",
        "Produktions-Bundle stabil deployen",
      ],
      phases: [
        { name: "Discovery", summary: "Ziele, Constraints und Scope definieren.", tag: "P01" },
        { name: "Architektur", summary: "Systemgrenzen und API-Contracts festlegen.", tag: "P02" },
        { name: "Build", summary: "Komponenten mit sauberer Struktur umsetzen.", tag: "P03" },
        { name: "Hardening", summary: "Performance, Monitoring und Release-Sicherheit.", tag: "P04" },
      ],
      playbookTitle: "PLAYBOOK",
      playbookItems: [
        {
          title: "Komponenten-Verträge",
          text: "Komponenten möglichst prop-driven und stateless halten, damit die Komposition stabil bleibt.",
          tags: ["Type Safety", "Composition", "Reusability"],
        },
        {
          title: "Motion-Disziplin",
          text: "Wenige gemeinsame Übergänge nutzen, damit sich die Seite konsistent anfühlt.",
          tags: ["Framer Motion", "Konsistenz", "UX"],
        },
        {
          title: "Produktions-Stabilität",
          text: "Tracing, Monitoring und Fallbacks vor Feature-Skalierung einbauen.",
          tags: ["Observability", "Stability", "Delivery"],
        },
      ],
      note:
        "Dieser Bereich basiert auf isolierten, wiederverwendbaren Komponenten, damit sich jedes Panel unabhängig weiterentwickeln kann.",
    },
    contact: {
      title: "Lass uns bauen",
      subtitle: "Du brauchst einen Developer, der Produkt und Engineering End-to-End übernimmt?",
      nameLabel: "Name",
      emailLabel: "E-Mail",
      messageLabel: "Projektbeschreibung",
      sendButton: "Anfrage senden",
      note: "Typische Antwortzeit: innerhalb von 24 Stunden.",
      directEmail: "luaj.osman@gmail.com",
    },
    footer: { text: "Entwickelt mit React, TypeScript, MUI und Framer Motion." },
    ui: { languageLabel: "Sprache" },
  },
};
