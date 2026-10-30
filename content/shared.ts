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
export const lastUpdated = "2026-10-29";

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
    // No card image for now: the app screenshots do not read at card size, and
    // a readable one needs a 2x capture. The asset is ready in
    // public/projects/rekindle-suggestion.webp.
    image: null,
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

export const modelIds = [
  "currentDefault",
  "deepseekThinking",
  "geminiFlashLite",
  "qwenLocal",
] as const;
export type ModelId = (typeof modelIds)[number];

/**
 * Rekindle model comparison on a hand-labeled set of article x project pairs.
 *
 * The numbers are the ones published in the repository's README, so both
 * surfaces say the same thing:
 * - `currentDefault` is the default since 2026-10-23 (it reasons before its
 *   verdict and matches long notes section by section).
 * - `deepseekThinking` and `geminiFlashLite` were measured with the prompt of
 *   2026-10-19.
 * - `qwenLocal` was measured with the prompt from before the structured text
 *   (2026-10-21) and was not repeated.
 *
 * `precision` is how often the model was right when it said "actionable"; `found`
 * counts real connections found out of `connections`; `extra` are additional
 * links it proposed. Source: the project's evaluation report.
 */
export const rekindleEval = {
  pairs: 376,
  connections: 56,
  models: {
    currentDefault: { precision: 0.95, found: 35, extra: 4, latency: 1.8 },
    deepseekThinking: { precision: 0.79, found: 49, extra: 26, latency: 4.1 },
    geminiFlashLite: { precision: 0.64, found: 49, extra: 25, latency: 4.4 },
    qwenLocal: { precision: 1, found: 30, extra: 9, latency: 7.2 },
  },
  /** The model Rekindle uses by default (highlighted in the table). */
  defaultModel: "currentDefault",
} as const satisfies {
  pairs: number;
  connections: number;
  models: Record<
    ModelId,
    { precision: number; found: number; extra: number; latency: number }
  >;
  defaultModel: ModelId;
};
