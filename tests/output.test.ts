import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it, expect } from "vitest";
import { identity } from "@/content/shared";

const locales = ["en", "es"] as const;
type Locale = (typeof locales)[number];

/** Section ids SPEC.md §3 puts on the page (the hero also has `top`). */
const expectedSections = ["projects", "about", "now", "contact"];

function htmlPath(locale: Locale): string {
  return join(process.cwd(), ".next", "server", "app", `${locale}.html`);
}

function missingBuildMessage(locale: Locale): string {
  return [
    `Built page not found: ${htmlPath(locale)}`,
    `Run "npm run build" before "npm run test:output".`,
  ].join("\n");
}

const cache = new Map<Locale, string>();

/** The prerendered HTML of a locale; throws a readable error if there is no build. */
function page(locale: Locale): string {
  const cached = cache.get(locale);
  if (cached !== undefined) return cached;

  const file = htmlPath(locale);
  if (!existsSync(file)) throw new Error(missingBuildMessage(locale));

  const html = readFileSync(file, "utf8");
  cache.set(locale, html);
  return html;
}

/**
 * Opening `<a>` tags. The React flight payload escapes `<` and `"`, so it never
 * matches these patterns and only real markup is inspected.
 */
function anchorTags(html: string): string[] {
  return [...html.matchAll(/<a\b[^>]*>/g)].map((match) => match[0]);
}

function attrValue(tag: string, name: string): string | null {
  const match = tag.match(new RegExp(`\\s${name}\\s*=\\s*"([^"]*)"`));
  return match ? match[1] : null;
}

function hasAttr(tag: string, name: string): boolean {
  return new RegExp(`\\s${name}(\\s*=|\\s|>)`).test(tag);
}

function sectionIds(html: string): string[] {
  return [...html.matchAll(/<section\b[^>]*\sid="([^"]+)"/g)].map(
    (match) => match[1],
  );
}

describe.each(locales)("built page /%s", (locale) => {
  it("is prerendered to HTML", () => {
    expect(existsSync(htmlPath(locale)), missingBuildMessage(locale)).toBe(
      true,
    );
    expect(page(locale).length).toBeGreaterThan(0);
  });

  it(`declares <html lang="${locale}">`, () => {
    const html = page(locale);

    expect([...html.matchAll(/<html\b/g)]).toHaveLength(1);
    expect(html).toMatch(new RegExp(`<html[^>]*\\blang="${locale}"`));
  });

  it("has exactly one <h1>", () => {
    const html = page(locale);

    expect([...html.matchAll(/<h1\b/g)]).toHaveLength(1);
  });

  it("gives every internal anchor a matching id", () => {
    const html = page(locale);
    const targets = new Set(
      [...html.matchAll(/href="#([^"]*)"/g)]
        .map((match) => match[1])
        .filter((target) => target !== ""),
    );

    const missing = [...targets].filter(
      (target) => !html.includes(`id="${target}"`),
    );

    expect(missing, "anchors without a matching id").toEqual([]);
  });

  it("gives every external link an href and rel=noopener noreferrer", () => {
    const html = page(locale);
    const external = anchorTags(html).filter((tag) =>
      (attrValue(tag, "href") ?? "").startsWith("http"),
    );

    expect(external.length).toBeGreaterThan(0);

    const broken = external.filter((tag) => {
      const href = attrValue(tag, "href") ?? "";
      const rel = (attrValue(tag, "rel") ?? "")
        .trim()
        .split(/\s+/)
        .sort()
        .join(" ");
      return href === "" || rel !== "noopener noreferrer";
    });

    expect(broken, "external links without href/rel").toEqual([]);
  });

  it("gives every <img> an alt attribute", () => {
    const html = page(locale);
    const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);

    expect(images.length).toBeGreaterThan(0);
    expect(images.filter((tag) => !hasAttr(tag, "alt"))).toEqual([]);
  });

  it("has JSON-LD that parses and names the owner", () => {
    const html = page(locale);
    const block = html.match(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
    );

    expect(block, "missing application/ld+json block").not.toBeNull();

    const data = JSON.parse(block![1]) as { name?: unknown };
    expect(data.name).toBe(identity.name);
  });
});

describe("both locales", () => {
  it("expose the same section ids", () => {
    const en = sectionIds(page("en"));
    const es = sectionIds(page("es"));

    expect([...en].sort()).toEqual([...es].sort());

    for (const id of expectedSections) {
      expect(en, `en is missing #${id}`).toContain(id);
      expect(es, `es is missing #${id}`).toContain(id);
    }
  });
});
