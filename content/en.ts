import type { Content } from "./types";

export const en = {
  meta: {
    name: "Giorgio Iván Loguercio",
    roleLine: "Software Engineer · LLM apps, RAG & evals",
    tagline: "I build web apps and integrate LLMs, measuring their quality.",
    pageTitle: "Giorgio Loguercio — Software Engineer · LLM apps & full stack",
    description:
      "Software Engineer (Systems Engineering, UNICEN, 2026) with a full stack and applied AI profile. I build production web apps and integrate LLMs, measuring their quality.",
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
    expandImage: "View full size",
    close: "Close",
  },
  hero: {
    location:
      "Necochea, Argentina · Looking for my first role as an AI Engineer or Full-Stack Developer, remote",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  projects: {
    lide2: {
      title: "LIDE 2",
      subtitle: "Internship at UNLP Esports",
      dates: "July 2026 – October 2026",
      problem:
        "The inter-university League of Legends league (RedUNCI) had no site to follow results, statistics and the state of the tournament.",
      bullets: [
        "Standings, fixtures, playoffs, detailed team and player profiles, and statistics per match, player, champion and university, available to the organisers and the players.",
        "Riot's development API no longer provides custom-match statistics, so I extract them by parsing the .rofl replay files directly, with statistics like those on professional sites (e.g. gol.gg) for players to analyse their play.",
        "An admin area behind Supabase Auth to upload replays one by one or in bulk; statistics live in a registry where a new ranking is a single function; the database tests run on PGlite, with no Docker or Supabase needed.",
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
        "What I consume (articles, videos) rarely makes it back into what I write.",
      bullets: [
        "Local-first assistant: it ingests web articles and YouTube videos, summarizes them, compares them against the projects and notes in an Obsidian vault and proposes actions. Only accepted suggestions are written back to the vault.",
        "Two-stage retrieval: a pgvector pre-filter (the 3 closest projects) plus an LLM evaluation that answers with schema-validated JSON; provider chain with fallback (DeepSeek, Gemini, local Ollama) and stale-suggestion detection via vector drift.",
        "Custom eval harness with a hand-labeled dataset: Precision@K, Recall@K, F1 and quality gates that catch regressions when prompts or models change.",
        "Per-token cost and latency telemetry; integration tests against a real PostgreSQL + pgvector in a Testcontainer, with typecheck, lint and dependency audit in CI.",
      ],
      resultLabel: "Result",
      result:
        "On 376 hand-labeled article × project pairs, DeepSeek Flash (the default) is right 95% of the time it says “actionable” and finds 4 extra connections (one labeler; how useful the suggestions are is not measured).",
      imageAlt:
        "Rekindle’s Suggestions view in dark mode: a sidebar listing the vault’s projects with how recently each was worked on, tabs to filter suggestions (not discarded, actionable, tentative, accepted, discarded) and a suggestion card with a list of numbered actions to take in specific notes. The interface is in Spanish.",
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
        "Comparative study of 4 human pose estimators (AlphaPose, OpenPose, MediaPipe, YOLOv8-pose) and Deep Learning architectures (CNN-LSTM, TCN-Transformer, Transformer) over 4 public datasets (about 1,600 videos).",
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
    portraitAlt:
      "Front portrait of me wearing glasses and a blue-and-white striped shirt.",
    campusAlt:
      "My thesis partner and I in suits next to the 60th-anniversary monolith of the Faculty of Exact Sciences (1965–2025), in front of the brick building on the UNICEN campus in Tandil.",
    paragraphs: [
      "I was interested in computers from a young age. At 6–7 I was playing Diablo II, my first PC game. From then on I picked up English bit by bit, through immersion and need, with games and content in that language. At 8 I learned Magic: The Gathering; years later, at university, I understood the call stack almost instantly because I already knew the game's stack. Between 9 and 12 I discovered MUGEN and, following tutorials, built my own fighting game with the characters I wanted.",
      "In high school I planned to study psychology, until in my final year I discovered programming. I didn't have a computer, so I wrote my first program in Java on my phone: a dialogue that told you whether you were an adult based on your date of birth.",
      "In 2021 I started Systems Engineering at UNICEN and chose to focus fully on my degree. For my thesis I wanted to do more than a website: with a classmate, and supervised by a CONICET researcher, we ran a comparative evaluation of automatic fall detection with pose estimation and neural networks/transformers. It was a challenge and I learned a lot. I graduated in June 2026.",
      "My education didn't stop there. In 2025 I received a scholarship to complete an Advanced Full-Stack Certification at ITBA. In 2026 I completed the Diploma in Esports at UNLP.",
      "Games never went away. Playing the Inter-University Esports League (LIDE), I noticed there was no site to follow results and statistics, so during my internship at UNLP Esports I built one: LIDE 2, the league's official platform. Today I'm translating a Japanese PS2 visual novel into Spanish with a pipeline of AI agents.",
    ],
  },
  timeline: {
    diablo: {
      when: "Age 6–7",
      title: "Diablo II",
      line: "I was always interested in PCs. When I was old enough I started playing, and from then on English came bit by bit, through immersion and need.",
      photoAlt:
        "Old photo of me when I was very young, seen from behind, reaching toward the computer to turn it on.",
    },
    magic: {
      when: "Age 8",
      title: "Magic: The Gathering",
      line: "I was learning the game's stack, years before the call stack.",
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
      title: "CityLab Tandil — MapBox Developer",
      line: "Features for the Cultural Spaces Map, with the University Center for Citizen Innovation team.",
      photoAlt: null,
    },
    thesisItba: {
      when: "2025",
      title: "Thesis and ITBA",
      line: "I start my thesis and complete the ITBA Full-Stack certification on a scholarship.",
      photoAlt: null,
    },
    graduation: {
      when: "June 2026",
      title: "Systems Engineer",
      line: "I defend my thesis and graduate.",
      photoAlt:
        "Me presenting my thesis next to a projected slide with a comparison table of approaches and variants; part of the audience is seen from behind.",
    },
    lide2: {
      when: "July 2026",
      title: "LIDE 2",
      line: "Internship at UNLP Esports: I build the tournament's official site.",
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
        "As of 2 Nov: over 68 reviewed batches (15,905 lines), the reviewer changed 7.6% of lines (10.3% on the latest script, which was drafted partly by a different model), mostly for naturalness and fidelity.",
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
    flux: {
      title: "Flux — personal cash flow, with an MCP server",
      intro:
        "A local-first desktop app that projects my cash flow 90 days ahead, plus an MCP server so my Hermes agent can read and update the same data. I ask Hermes from my desktop or from Telegram, for example how much I have left this month or whether I can afford something.",
      bullets: [
        "A Tauri and React desktop app and the MCP server share one SQLite file and one financial engine, so what Hermes changes shows up in the app.",
        "The MCP server exposes 15 tools over stdio, and a skill file tells Hermes to read the current balance before it gives any advice.",
        "Income often arrives on an uncertain day, so each income has a window (say the 10th to the 15th) while bills have fixed dates. The projection draws two paths: an optimistic one where the money arrives at the start of the window and a conservative one where it arrives at the end, and the warnings use the conservative one.",
      ],
      status:
        "Private for now: there is no repository or website yet. The screenshot uses made-up demo data.",
      imageAlt:
        "The Flux dashboard in dark mode with demo data: real balance, net this month, next bottleneck, a 90-day cash-flow chart and the next 15 days of income and payments.",
      imageCaption: "Flux dashboard with demo data",
    },
  },
  evaluation: {
    summary: "How I measured it: model comparison",
    title: "Which model finds the connections?",
    definitions:
      "Precision: of the pairs it calls “actionable”, how many really are. Recall (sensitivity): of the pairs that really are actionable, how many it finds.",
    choice:
      "Why the default is the row that finds fewer: with the verdict first it found 44 connections with 22 extra, and 14 of its 39 “tentative” verdicts then wrote that nothing connects. Reasoning first cuts the extras to 4, at the cost of 9 real connections.",
    caption:
      "{pairs} article × project pairs labeled by hand, {connections} of them real connections. What counts as a connection is partly subjective, and I revised 7 labels after reading one model's answers. One labeler and a small dataset, so small gaps are noise.",
    columns: {
      model: "Model",
      precisionTerm: "Precision",
      precision: "Right when it says “actionable”",
      recallTerm: "Recall (sensitivity)",
      recall: "“Actionable” pairs it finds",
      found: "Connections found",
      latency: "Median latency",
    },
    found: "{found} of {total} (+{extra} extra)",
    models: {
      currentDefault: {
        name: "DeepSeek Flash",
        note: "default now, reasons before the verdict (2026-10-23)",
      },
      deepseekThinking: {
        name: "DeepSeek Flash",
        note: "thinking on, prompt of 2026-10-19",
      },
      geminiFlashLite: {
        name: "Gemini 3.1 Flash Lite",
        note: "cloud, prompt of 2026-10-19",
      },
      qwenLocal: {
        name: "Qwen 2.5 7B",
        note: "runs on your machine, prompt before 2026-10-21",
      },
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
