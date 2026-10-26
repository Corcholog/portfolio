/**
 * `[TBD: ...]` marks content that is not ready yet.
 * Components render a value only if `visible()` returns it, so placeholders never
 * reach the live site. This file has no imports so scripts can run it directly.
 */

const PLACEHOLDER = /^\s*\[TBD\b/;

export function isPlaceholder(value: unknown): value is string {
  return typeof value === "string" && PLACEHOLDER.test(value);
}

/** The value if it is real content, `null` if it is missing or a placeholder. */
export function visible(value: string | null | undefined): string | null {
  if (value == null || value === "" || isPlaceholder(value)) return null;
  return value;
}

export type PlaceholderHit = { path: string; text: string };

/** Walks objects and arrays and returns every `[TBD: ...]` string with its path. */
export function findPlaceholders(node: unknown, path = ""): PlaceholderHit[] {
  if (isPlaceholder(node)) return [{ path, text: node }];
  if (Array.isArray(node)) {
    return node.flatMap((item, i) => findPlaceholders(item, `${path}[${i}]`));
  }
  if (node && typeof node === "object") {
    return Object.entries(node).flatMap(([key, value]) =>
      findPlaceholders(value, path ? `${path}.${key}` : key),
    );
  }
  return [];
}

/**
 * Structure of a value as a list of `path: kind` lines (array lengths included),
 * so two languages can be compared for identical keys, list lengths and nulls.
 */
export function describeShape(node: unknown, path = ""): string[] {
  if (node === null) return [`${path}: null`];
  if (Array.isArray(node)) {
    return [
      `${path}: array(${node.length})`,
      ...node.flatMap((item, i) => describeShape(item, `${path}[${i}]`)),
    ];
  }
  if (typeof node === "object") {
    return Object.entries(node as Record<string, unknown>).flatMap(
      ([key, value]) => describeShape(value, path ? `${path}.${key}` : key),
    );
  }
  return [`${path}: ${typeof node}`];
}
