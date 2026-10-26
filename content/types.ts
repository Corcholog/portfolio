import type { OtherId, ProjectId, TimelineId } from "./shared";

/**
 * Shape of the site copy. Both `content/es.ts` and `content/en.ts` must satisfy
 * it, so a key missing in one language fails `npm run typecheck`.
 * `npm run check:content` also compares list lengths and lists `[TBD: ...]`.
 */

export type ProjectContent = {
  title: string;
  /** Extra title line (the thesis' official title), or `null`. */
  subtitle: string | null;
  dates: string;
  problem: string;
  bullets: string[];
  result: string;
  imageAlt: string;
};

export type TimelineContent = {
  when: string;
  title: string;
  line: string;
  /** Alt text when the milestone has a photo slot, `null` when it has none. */
  photoAlt: string | null;
};

export type PipelineStage = {
  name: string;
  detail: string;
};

export type Content = {
  meta: {
    name: string;
    roleLine: string;
    tagline: string;
  };
  nav: {
    label: string;
    projects: string;
    about: string;
    now: string;
    contact: string;
  };
  section: {
    projects: string;
    about: string;
    now: string;
    other: string;
    contact: string;
  };
  theme: {
    toggle: string;
  };
  lang: {
    toggle: string;
  };
  ui: {
    demo: string;
    repo: string;
    cv: string;
    slides: string;
    updated: string;
    builtWith: string;
  };
  hero: {
    location: string;
    github: string;
    linkedin: string;
    email: string;
  };
  projects: Record<ProjectId, ProjectContent>;
  about: {
    paragraphs: string[];
  };
  timeline: Record<TimelineId, TimelineContent>;
  now: {
    mmm: {
      title: string;
      intro: string;
      bullets: string[];
      /** Placeholders: `{done}`, `{total}`, `{percent}`, `{date}`. */
      progress: string;
      reviewerMetric: string;
      pipeline: {
        title: string;
        scout: PipelineStage;
        translator: PipelineStage;
        checks: PipelineStage;
        reviewer: PipelineStage;
        human: PipelineStage;
        memory: string;
        referenceNote: string;
      };
    };
    rekindle: {
      title: string;
      text: string;
    };
  };
  other: Record<
    OtherId,
    {
      title: string;
      dates: string;
      description: string;
    }
  >;
  education: {
    title: string;
    unicen: string;
    itba: string;
    unlp: string;
    languages: string;
  };
  contact: {
    line: string;
  };
};
