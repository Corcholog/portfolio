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
export const lastUpdated = "2026-11-01";

export const projectIds = ["lide2", "rekindle", "thesis"] as const;
export type ProjectId = (typeof projectIds)[number];

type ProjectFacts = {
  stack: readonly string[];
  repo: string | null;
  demo: string | null;
  /** Public PDF with more detail (thesis defense slides). */
  pdf: string | null;
  /** Card image, or `null` for a card without one. */
  image: { src: string; width: number; height: number } | null;
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
      "React + Vite",
      "PostgreSQL + pgvector",
      "Drizzle ORM",
      "pg-boss",
      "Ollama (bge-m3)",
      "Gemini API",
      "DeepSeek API",
      "Docker",
      "Vitest",
      "GitHub Actions",
    ],
    // Local-first app: the repository is public and ships a demo vault, so there is
    // no hosted demo to link.
    repo: "https://github.com/Corcholog/rekindle",
    demo: null,
    pdf: null,
    image: {
      src: "/projects/rekindle-suggestions-2x.webp",
      width: 2560,
      height: 1440,
    },
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

export const aboutPhotos = {
  portrait: { src: "/photos/me_portrait.webp", width: 640, height: 640 },
  campus: { src: "/photos/unicen-exactas.webp", width: 960, height: 720 },
} as const;

export type TimelineIcon =
  | "swords"
  | "layers"
  | "gamepad"
  | "smartphone"
  | "graduation-cap"
  | "map"
  | "flask"
  | "trophy"
  | "award"
  | "sparkles";

type TimelineFacts = {
  /** Icon of the milestone (resolved by the timeline component). */
  icon: TimelineIcon;
  /** Photo path in `public/photos/`, or `null` (icon only). A photo needs `photoAlt` in both languages. */
  photo: string | null;
};

export const timelineFacts: Record<TimelineId, TimelineFacts> = {
  diablo: { icon: "swords", photo: "/photos/diablo.webp" },
  magic: { icon: "layers", photo: null },
  mugen: { icon: "gamepad", photo: null },
  firstCode: { icon: "smartphone", photo: null },
  unicen: { icon: "graduation-cap", photo: null },
  citylab: { icon: "map", photo: null },
  thesisItba: { icon: "flask", photo: null },
  graduation: { icon: "graduation-cap", photo: "/photos/thesis-defense.webp" },
  lide2: { icon: "trophy", photo: null },
  esports: { icon: "award", photo: null },
  today: { icon: "sparkles", photo: null },
};

export const mmm = {
  name: "My Merry May",
  repo: "https://github.com/Corcholog/mmm-spanish-patch",
  /** Translation progress. Update by hand. */
  progress: { done: 12537, total: 33135, asOf: "2026-10-26" },
} as const;

export const flux = {
  name: "Flux",
  /** Screenshot of the browser demo with made-up data (never real finances). */
  image: { src: "/projects/flux-dashboard.webp", width: 1920, height: 1200 },
} as const;
