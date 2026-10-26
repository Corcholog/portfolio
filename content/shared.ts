/**
 * Language-neutral facts: links, stacks, file paths, ids and numbers.
 * Text that a visitor reads lives in `es.ts` / `en.ts`.
 *
 * A value written as `[TBD: ...]` is a placeholder for content that is not ready yet.
 * Components must hide it (see `lib/placeholders.ts`); `npm run check:content`
 * lists every one that is left. `null` means "intentionally none".
 */

export const identity = {
  name: "Giorgio Iván Loguercio",
  email: "loguerciogiorgioivan@gmail.com",
  linkedin: "https://www.linkedin.com/in/corcho-log/",
  github: "https://github.com/Corcholog",
} as const;

export const cvPath = {
  es: "/cv/Giorgio-Loguercio-CV-ES.pdf",
  en: "/cv/Giorgio-Loguercio-CV-EN.pdf",
} as const;

/** Date shown in the footer. Update by hand when the site changes. */
export const lastUpdated = "2026-10-26";

export const projectIds = ["lide2", "rekindle", "thesis"] as const;
export type ProjectId = (typeof projectIds)[number];

type ProjectFacts = {
  stack: readonly string[];
  repo: string | null;
  demo: string | null;
  /** Public PDF with more detail (thesis defense slides). */
  pdf: string | null;
  image: { src: string; width: number; height: number };
};

export const projectFacts: Record<ProjectId, ProjectFacts> = {
  lide2: {
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (PostgreSQL, Auth, Storage, RLS)",
      "Vercel",
    ],
    repo: "https://github.com/Corcholog/lide2",
    demo: "https://lide2.vercel.app/",
    pdf: null,
    image: { src: "/projects/lide2-home.webp", width: 1168, height: 905 },
  },
  rekindle: {
    stack: [
      "TypeScript",
      "Node.js",
      "Fastify",
      "PostgreSQL + pgvector",
      "Drizzle ORM",
      "pg-boss",
      "Ollama (bge-m3)",
      "Gemini API",
      "Docker",
      "Vitest",
      "GitHub Actions",
    ],
    // Private repository and local-first app: no repo or demo button.
    repo: null,
    demo: null,
    pdf: null,
    image: { src: "/projects/rekindle-eval.webp", width: 800, height: 666 },
  },
  thesis: {
    stack: ["Python", "TensorFlow", "PyTorch"],
    repo: null,
    demo: null,
    pdf: "/thesis/Loguercio-Sottile-Defensa-PI.pdf",
    image: {
      src: "/projects/thesis-defense-slide-1.webp",
      width: 1600,
      height: 900,
    },
  },
};

export const timelineIds = [
  "diablo",
  "magic",
  "mugen",
  "firstCode",
  "unicen",
  "citylab",
  "thesisItba",
  "graduation",
  "lide2",
  "esports",
  "today",
] as const;
export type TimelineId = (typeof timelineIds)[number];

type TimelineFacts = {
  /** Icon name for the milestone (resolved by the timeline component). */
  icon: string;
  /** Photo path in `public/photos/`, a `[TBD: ...]` slot, or `null` (icon only). */
  photo: string | null;
};

export const timelineFacts: Record<TimelineId, TimelineFacts> = {
  diablo: { icon: "swords", photo: "[TBD: child turning on the PC]" },
  magic: { icon: "layers", photo: "[TBD: optional photo]" },
  mugen: { icon: "gamepad", photo: null },
  firstCode: { icon: "smartphone", photo: null },
  unicen: { icon: "graduation-cap", photo: "[TBD: optional photo]" },
  citylab: { icon: "map", photo: null },
  thesisItba: { icon: "flask", photo: null },
  graduation: { icon: "graduation-cap", photo: "[TBD: thesis defense]" },
  lide2: { icon: "trophy", photo: "[TBD: optional, tournament]" },
  esports: { icon: "award", photo: null },
  today: { icon: "sparkles", photo: null },
};

export const otherIds = ["citylab", "followup"] as const;
export type OtherId = (typeof otherIds)[number];

export const otherFacts: Record<OtherId, { stack: readonly string[] }> = {
  citylab: { stack: ["JavaScript", "MapBox.js"] },
  followup: {
    stack: ["Next.js", "React", "FastAPI", "Python", "YOLOv8n", "WebSockets"],
  },
};

export const mmm = {
  repo: "https://github.com/Corcholog/mmm-spanish-patch",
  /** Translation progress. Update by hand. */
  progress: { done: 12537, total: 33135, asOf: "2026-10-26" },
} as const;
