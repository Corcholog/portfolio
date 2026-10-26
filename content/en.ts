import type { Content } from "./types";

export const en = {
  meta: {
    name: "Giorgio Iván Loguercio",
    roleLine: "Systems Engineer · Full stack + applied Machine Learning",
    tagline:
      "I build production web apps and integrate LLMs, measuring their quality.",
    pageTitle: "Giorgio Iván Loguercio — Systems Engineer, Full stack",
    description:
      "Systems Engineer (UNICEN) with a full stack and applied machine learning profile. I build production web apps and integrate LLMs, measuring their quality.",
  },
  nav: {
    label: "Main",
    projects: "Projects",
    about: "About",
    now: "Now",
    contact: "Contact",
  },
  section: {
    projects: "Featured projects",
    about: "How I got here",
    now: "What I'm working on",
    other: "Other work",
    contact: "Let's talk",
  },
  theme: { toggle: "Toggle theme" },
  lang: { toggle: "Change language" },
  ui: {
    demo: "Live demo",
    repo: "Repository",
    cv: "Download CV",
    slides: "Defense slides (PDF)",
    updated: "Updated",
    builtWith: "Built with Next.js",
    newTab: "opens in a new tab",
    skip: "Skip to content",
  },
  hero: {
    location: "Necochea, Argentina · Open to remote work",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  projects: {
    lide2: {
      title: "LIDE 2",
      subtitle: null,
      dates: "August 2026 – September 2026",
      problem:
        "The inter-university League of Legends tournament (RedUNCI) had no site to follow results, statistics and the state of the tournament.",
      bullets: [
        "A project I started on my own as a player in the tournament; it became the official platform.",
        "Standings, fixtures, playoffs and detailed team and player profiles.",
        "Match replay parser and statistics like those on professional sites (e.g. gol.gg), useful for players to analyse their play.",
        "In production on Vercel, with Supabase and Row-Level Security.",
      ],
      resultLabel: "Scope",
      result: "113 players, 20 teams and 13 universities.",
      imageAlt:
        "LIDE 2 home page: “Un país. Una red. Un campeón.”, Liga Interuniversitaria de Deportes Electrónicos, with the champion team and the tournament figures: 113 players, 20 teams and 13 universities. The page is in Spanish.",
    },
    rekindle: {
      title: "Rekindle",
      subtitle: null,
      dates: "October 2026 – present",
      problem:
        "What I read and watch (articles, videos) rarely makes it back into what I write.",
      bullets: [
        "Local-first assistant: it ingests web articles and YouTube videos, summarizes them, compares them against the projects and notes in an Obsidian vault and proposes actions. Only accepted suggestions are written back to the vault.",
        "Two-stage retrieval: pgvector pre-filter plus LLM evaluation with Structured Outputs; provider chain with fallback (DeepSeek, Gemini, local Ollama) and stale-suggestion detection via vector drift.",
        "Custom eval harness with a hand-labeled dataset: Precision@K, Recall@K, F1 and quality gates that catch regressions when prompts or models change.",
        "Per-token cost and latency telemetry; integration tests with Testcontainers.",
      ],
      resultLabel: "Result",
      result:
        "On 376 hand-labeled article × project pairs, the default model found 46 of the 56 connections and was right 100% of the time it said “actionable”, with a 2.3 s median latency (one labeler, small dataset).",
      imageAlt:
        "Rekindle chart comparing four models on 376 hand-labeled article × project pairs. DeepSeek Flash, the default, found 46 of 56 connections, was right 100% of the time it said “actionable” and had a 2.3 s median latency.",
    },
    thesis: {
      title: "Thesis — Automatic fall detection",
      subtitle:
        "Automatic fall detection: experimental evaluation of visual approaches based on pose estimators and neural network models",
      dates: "March 2025 – June 2026",
      problem:
        "Detecting falls in real time from video, without body-worn sensors.",
      bullets: [
        "Research done together with a classmate, supervised by a CONICET researcher.",
        "Comparative study of human pose estimators and Deep Learning architectures (CNN-LSTM, TCN-Transformer, Transformer).",
        "Automated experimentation and computational benchmarking pipelines.",
      ],
      resultLabel: "Finding",
      result:
        "Pose estimation dominates the time to detect a fall: YOLOv8-pose was the fastest estimator on every dataset and OpenPose the slowest.",
      imageAlt:
        "First slide of the capstone project defense: thesis title, Universidad Nacional del Centro de la Provincia de Buenos Aires, students and supervisor. The slide is in Spanish.",
    },
  },
  about: {
    paragraphs: [
      "I was using computers long before I wrote code. At 6 I was playing Diablo II, and I learned a good part of my English right there, in front of the screen. At 8 I learned Magic: The Gathering; years later, at university, I understood the call stack almost instantly because I already knew the game's stack and its priority system. Between 9 and 12 I discovered MUGEN and, following tutorials, built my own fighting game with the characters I wanted.",
      "In high school I planned to study psychology, until in my final year I discovered programming. I didn't have a computer, so I wrote my first program in Java on my phone: a small dialogue that told you whether you were an adult based on your birth year.",
      "In 2021 I started Systems Engineering at UNICEN and chose to focus fully on my degree. For my thesis I wanted to do more than a website: with a classmate, and supervised by a CONICET researcher, we researched automatic fall detection with pose estimation and neural networks. It was a challenge and I learned a lot. I graduated in June 2026.",
      "Games never went away. Playing the inter-university League of Legends tournament, I noticed there was no site to follow results and statistics, so I built one: LIDE 2 became the official platform. Today I'm translating a Japanese PS2 visual novel into Spanish with a pipeline of AI agents.",
    ],
  },
  timeline: {
    diablo: {
      when: "Age 6–7",
      title: "Diablo II",
      line: "My first PC, and English learned by playing.",
      photoAlt: null,
    },
    magic: {
      when: "Age 8",
      title: "Magic: The Gathering",
      line: "The game's stack, years before the call stack.",
      photoAlt: null,
    },
    mugen: {
      when: "Age 9–12",
      title: "MUGEN",
      line: "My own fighting game, built from tutorials.",
      photoAlt: null,
    },
    firstCode: {
      when: "Final year of high school",
      title: "First code",
      line: "Java on my phone, with no computer.",
      photoAlt: null,
    },
    unicen: {
      when: "2021",
      title: "UNICEN",
      line: "I start Systems Engineering in Tandil.",
      photoAlt: null,
    },
    citylab: {
      when: "2023",
      title: "CityLab Tandil",
      line: "Features for the Cultural Spaces Map.",
      photoAlt: null,
    },
    thesisItba: {
      when: "2025",
      title: "Thesis and ITBA",
      line: "I start my thesis and complete the ITBA Full-Stack certification.",
      photoAlt: null,
    },
    graduation: {
      when: "June 2026",
      title: "Systems Engineer",
      line: "I defend my thesis and graduate.",
      photoAlt: null,
    },
    lide2: {
      when: "August 2026",
      title: "LIDE 2",
      line: "I build the tournament site; it becomes official.",
      photoAlt: null,
    },
    esports: {
      when: "2026",
      title: "Diploma in Esports",
      line: "UNLP, April to October 2026.",
      photoAlt: null,
    },
    today: {
      when: "Today",
      title: "Rekindle and My Merry May",
      line: "Applied AI: retrieval with evals and agent-based translation.",
      photoAlt: null,
    },
  },
  now: {
    mmm: {
      title: "My Merry May — Spanish fan translation",
      intro:
        "Fan translation of My Merry May (PS2) from Japanese into neutral Latin American Spanish. It will be distributed only as a BPS patch (not released yet): the repository contains no game data.",
      bullets: [
        "Reverse engineering of the game's script format and executable, with a custom font for accented letters.",
        "A screen simulator validates every line exactly as the game will show it, before anyone plays it.",
        "Round-trip tests: rebuilding with no translation produces all 8 script files byte-identical.",
      ],
      progress: "{done} of {total} entries ({percent}) as of {date}",
      reviewerMetric:
        "Over 52 reviewed batches (11,285 lines), the reviewer changed 6.5% of lines (4.0% on the latest script), mostly for naturalness and fidelity.",
      pipeline: {
        title: "How a batch gets translated",
        scout: {
          name: "Scout",
          detail: "Read-ahead, once per script file.",
        },
        translator: {
          name: "Translator",
          detail: "One batch at a time, from the Japanese.",
        },
        checks: {
          name: "Automatic checks",
          detail: "Screen simulator, character set, line and page limits.",
        },
        reviewer: {
          name: "Reviewer",
          detail: "Line by line against the Japanese.",
        },
        human: {
          name: "Human review",
          detail: "Done by me.",
        },
        memory:
          "Shared memory across batches: style guide, story bible and scouting notes.",
        referenceNote:
          "The unofficial English patch is used only as a reference for meaning.",
      },
    },
    rekindle: {
      title: "Rekindle",
      intro:
        "A local-first assistant that connects what I read with what I write: it compares articles and videos against the projects and notes in my Obsidian vault and proposes actions.",
      text: "I keep adding AI engineering techniques, such as document-structure-based chunking.",
      seeProject: "See the project",
      evalTitle: "Which model finds the connections?",
      evalCaption:
        "{pairs} article × project pairs, labeled by hand; I marked {connections} of them as connections. What counts as a connection is partly subjective: some of the extra ones are forced, others are links I had missed. One labeler and a small dataset, so small gaps are noise.",
      columns: {
        model: "Model",
        precision: "Right when it says “actionable”",
        found: "Connections found",
        latency: "Median latency",
      },
      found: "{found} of {total} (+{extra} extra)",
      models: {
        deepseekFast: { name: "DeepSeek Flash", note: "default, thinking off" },
        deepseekThinking: { name: "DeepSeek Flash", note: "thinking on" },
        geminiFlashLite: { name: "Gemini 3.1 Flash Lite", note: "cloud" },
        qwenLocal: { name: "Qwen 2.5 7B", note: "runs on your machine" },
      },
    },
  },
  other: {
    citylab: {
      title: "CityLab Tandil — MapBox Developer",
      dates: "April 2023 – December 2023",
      description:
        "Features for the Cultural Spaces Map, with the University Center for Citizen Innovation team.",
    },
    followup: {
      title: "FollowUP — university course project",
      dates: "March 2025 – April 2025",
      description:
        "Full stack app for real-time person detection and tracking across multiple video sources, with pattern analysis and group detection.",
    },
  },
  education: {
    title: "Education",
    unicen: "Systems Engineering — UNICEN, Tandil · March 2021 – June 2026",
    itba: "Advanced Full-Stack Developer Certification — ITBA · September 2025 – December 2025",
    unlp: "Diploma in Esports — UNLP · April 2026 – October 2026",
    languages: "Spanish (native); English C2 (EF SET, 75/100)",
  },
  contact: {
    line: "Hiring or have a project in mind? Get in touch.",
  },
  notFound: {
    title: "Page not found",
    text: "That address doesn't exist or has moved.",
    home: "Back to home",
  },
} satisfies Content;
