"use client";

import { useEffect, useState } from "react";

type NavLink = { id: string; label: string };

type Props = {
  links: NavLink[];
  label: string;
};

/** Page sections to follow while scrolling; "other" belongs to the "now" link. */
const tracked = ["projects", "about", "now", "other", "contact"] as const;
const belongsTo: Record<string, string> = { other: "now" };

/** Reading line: a section counts as current once its top passes this many px. */
const READING_LINE = 160;

/**
 * Main navigation as a pill tray. The pill of the section being read is
 * highlighted (`aria-current="location"`), updated while scrolling.
 */
export function NavLinks({ links, label }: Props) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      let current: string | null = null;
      for (const id of tracked) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= READING_LINE) current = id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = "contact";
      setActive(current ? (belongsTo[current] ?? current) : null);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      aria-label={label}
      className="w-full sm:mx-auto sm:max-w-xl lg:w-auto lg:max-w-none"
    >
      <ul className="border-line bg-chip flex gap-1 rounded-full border p-0.5 sm:p-1">
        {links.map((link) => (
          <li key={link.id} className="min-w-0 flex-1 sm:flex-none">
            <a
              href={`#${link.id}`}
              aria-current={active === link.id ? "location" : undefined}
              className="text-muted hover:bg-card hover:text-ink aria-[current=location]:bg-accent aria-[current=location]:text-on-accent aria-[current=location]:shadow-cozy flex min-h-9 items-center justify-center rounded-full px-1 text-[13px] font-medium whitespace-nowrap motion-safe:transition-colors min-[360px]:px-3 min-[360px]:text-sm sm:min-h-11 sm:px-5 sm:text-base"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
