import { describe, it, expect } from "vitest";
import { fillTemplate, formatDate, formatProgress } from "@/lib/format";

const progress = { done: 12537, total: 33135, asOf: "2026-10-26" };

const progressTemplate =
  "Translated {done} of {total} strings ({percent}) — updated {date}.";

describe("fillTemplate", () => {
  it("replaces a known key", () => {
    expect(fillTemplate("Hello {name}!", { name: "Giorgio" })).toBe(
      "Hello Giorgio!",
    );
  });

  it("replaces every occurrence of the same key", () => {
    expect(fillTemplate("{name}, {name}: {name}", { name: "Ana" })).toBe(
      "Ana, Ana: Ana",
    );
  });

  it("leaves an unknown {placeholder} untouched", () => {
    expect(fillTemplate("{name} has {count} items", { name: "Ana" })).toBe(
      "Ana has {count} items",
    );
  });

  it("handles numeric values", () => {
    expect(fillTemplate("Count: {count}", { count: 3 })).toBe("Count: 3");
  });
});

describe("formatDate", () => {
  it("formats an ISO date in English", () => {
    expect(formatDate("2026-10-26", "en")).toBe("October 26, 2026");
  });

  it("formats an ISO date in Spanish", () => {
    expect(formatDate("2026-10-26", "es")).toBe("26 de octubre de 2026");
  });
});

describe("formatProgress", () => {
  it("fills done, total, percent and date in English", () => {
    const result = formatProgress(progressTemplate, "en", progress);

    expect(result).not.toContain("{");
    expect(result).toContain("12,537 of 33,135");
    expect(result).toContain("(37.8%)");
    expect(result).toContain("October 26, 2026");
  });

  it("fills done, total, percent and date in Spanish", () => {
    const result = formatProgress(progressTemplate, "es", progress);

    expect(result).not.toContain("{");
    expect(result).toContain("12.537");
    expect(result).toContain("33.135");
    expect(result).toContain("37,8%");
    expect(result).toContain("26 de octubre de 2026");
  });

  it("never puts a space before the percent sign in English", () => {
    const result = formatProgress("{percent}", "en", progress);

    expect(result).toBe("37.8%");
    expect(result).not.toMatch(/\d\s%/);
  });

  it("never puts a space before the percent sign in Spanish", () => {
    // Spanish `Intl.NumberFormat` with `style: "percent"` would render "37,8 %".
    const result = formatProgress("{percent}", "es", progress);

    expect(result).toBe("37,8%");
    expect(result).not.toMatch(/\d\s%/);
  });
});
