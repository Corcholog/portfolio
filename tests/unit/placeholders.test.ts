import { describe, it, expect } from "vitest";
import {
  describeShape,
  findPlaceholders,
  isPlaceholder,
  visible,
} from "@/lib/placeholders";

describe("isPlaceholder", () => {
  it("detects a [TBD: ...] marker", () => {
    expect(isPlaceholder("[TBD: write the intro]")).toBe(true);
  });

  it("accepts leading whitespace", () => {
    expect(isPlaceholder("  [TBD]")).toBe(true);
  });

  it("rejects real text and non-strings", () => {
    expect(isPlaceholder("Real copy")).toBe(false);
    expect(isPlaceholder("TODO: later")).toBe(false);
    expect(isPlaceholder(null)).toBe(false);
    expect(isPlaceholder(42)).toBe(false);
  });
});

describe("visible", () => {
  it("hides null and undefined", () => {
    expect(visible(null)).toBeNull();
    expect(visible(undefined)).toBeNull();
  });

  it("hides an empty string", () => {
    expect(visible("")).toBeNull();
  });

  it("hides a placeholder", () => {
    expect(visible("[TBD: pending]")).toBeNull();
  });

  it("passes real text through", () => {
    expect(visible("Necochea, Argentina")).toBe("Necochea, Argentina");
  });
});

describe("findPlaceholders", () => {
  it("returns an empty list when there is no placeholder", () => {
    expect(findPlaceholders({ title: "Hi", list: ["a", "b"] })).toEqual([]);
  });

  it("walks nested objects and arrays and reports the exact path", () => {
    const tree = {
      meta: { name: "Real" },
      now: {
        mmm: {
          intro: "[TBD: intro]",
          bullets: ["ok", { detail: "[TBD: detail]" }],
        },
      },
    };

    expect(findPlaceholders(tree)).toEqual([
      { path: "now.mmm.intro", text: "[TBD: intro]" },
      { path: "now.mmm.bullets[1].detail", text: "[TBD: detail]" },
    ]);
  });

  it("reports a placeholder at the root", () => {
    expect(findPlaceholders("[TBD: root]")).toEqual([
      { path: "", text: "[TBD: root]" },
    ]);
  });
});

describe("describeShape", () => {
  it("produces identical lists for two objects with the same keys", () => {
    const es = {
      title: "Hola",
      nulls: { subtitle: null, imageAlt: null },
      list: ["a", "b"],
    };
    const en = {
      title: "Hello",
      nulls: { subtitle: null, imageAlt: null },
      list: ["x", "y"],
    };

    expect(describeShape(en)).toEqual(describeShape(es));
  });

  it("produces a different list when a key is missing", () => {
    const full = { title: "Hello", intro: "Text", tags: ["a"] };
    const missing = { title: "Hello", tags: ["a"] };

    expect(describeShape(missing)).not.toEqual(describeShape(full));
  });

  it("distinguishes null from a string", () => {
    expect(describeShape({ subtitle: null })).not.toEqual(
      describeShape({ subtitle: "Real" }),
    );
  });

  it("distinguishes array lengths", () => {
    expect(describeShape({ tags: ["a"] })).not.toEqual(
      describeShape({ tags: ["a", "b"] }),
    );
  });
});
