import { describe, it, expect } from "vitest";
import { getContent } from "@/content";
import { modelIds, projectIds, timelineIds } from "@/content/shared";
import { locales } from "@/lib/i18n";
import { describeShape, findPlaceholders } from "@/lib/placeholders";

type StringHit = { path: string; value: string };

/** Every string in the tree whose trimmed value is empty. */
function findEmptyStrings(node: unknown, path = ""): StringHit[] {
  if (typeof node === "string") {
    return node.trim() === "" ? [{ path, value: node }] : [];
  }
  if (Array.isArray(node)) {
    return node.flatMap((item, i) => findEmptyStrings(item, `${path}[${i}]`));
  }
  if (node && typeof node === "object") {
    return Object.entries(node).flatMap(([key, value]) =>
      findEmptyStrings(value, path ? `${path}.${key}` : key),
    );
  }
  return [];
}

describe("content dictionaries", () => {
  it("es and en have the same shape", () => {
    const esShape = describeShape(getContent("es"));
    const enShape = describeShape(getContent("en"));

    // Sorted so a different key order is not reported as a difference.
    expect([...enShape].sort()).toEqual([...esShape].sort());
  });

  it("every project, timeline and model id exists in both languages", () => {
    const missing: string[] = [];

    for (const locale of locales) {
      const content = getContent(locale);

      for (const id of projectIds) {
        if (!(id in content.projects)) {
          missing.push(`${locale}: projects.${id}`);
        }
      }
      for (const id of timelineIds) {
        if (!(id in content.timeline)) {
          missing.push(`${locale}: timeline.${id}`);
        }
      }
      for (const id of modelIds) {
        if (!(id in content.now.rekindle.models)) {
          missing.push(`${locale}: now.rekindle.models.${id}`);
        }
      }
    }

    expect(missing).toEqual([]);
  });

  it("no [TBD: ...] placeholder is left in either language", () => {
    for (const locale of locales) {
      expect(
        findPlaceholders(getContent(locale)),
        `placeholders in ${locale}`,
      ).toEqual([]);
    }
  });

  it("no string in either dictionary is empty", () => {
    for (const locale of locales) {
      expect(
        findEmptyStrings(getContent(locale)),
        `empty strings in ${locale}`,
      ).toEqual([]);
    }
  });
});
