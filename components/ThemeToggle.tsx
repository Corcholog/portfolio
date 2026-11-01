"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { THEME_COLORS } from "@/lib/theme";

/** Keeps the mobile browser chrome (`<meta name="theme-color">`) in step with the active theme. */
function syncThemeColor(theme: "light" | "dark") {
  let meta = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }
  meta.content = THEME_COLORS[theme];
}

function applyTheme(theme: "light" | "dark") {
  document.documentElement.dataset.theme = theme;
  syncThemeColor(theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Storage blocked: the theme still changes for this visit.
  }
}

/** Re-applies the saved theme if a client-side navigation rebuilt `<html>` without it. */
function restoreTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (
      (saved === "light" || saved === "dark") &&
      document.documentElement.dataset.theme !== saved
    ) {
      document.documentElement.dataset.theme = saved;
    }
  } catch {
    // Storage blocked: nothing to restore.
  }
  syncThemeColor(
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );
}

/** Light/dark switch. Starts in dark mode; the choice is remembered. */
export function ThemeToggle({ label }: { label: string }) {
  useEffect(restoreTheme, []);

  function toggle() {
    const root = document.documentElement;
    const current = root.dataset.theme === "light" ? "light" : "dark";
    applyTheme(current === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="border-line bg-chip text-muted hover:bg-card hover:text-ink inline-flex size-10 items-center justify-center rounded-full border motion-safe:transition motion-safe:active:scale-[0.98] sm:size-12"
    >
      <Moon aria-hidden className="icon-moon size-5" />
      <Sun aria-hidden className="icon-sun size-5" />
    </button>
  );
}
