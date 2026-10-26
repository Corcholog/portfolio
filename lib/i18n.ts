export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Functional cookie that remembers the language the visitor picked. */
export const LOCALE_COOKIE = "locale";

export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" && (locales as readonly string[]).includes(value)
  );
}

/**
 * Picks the locale from an `Accept-Language` header: Spanish if the visitor's
 * most preferred language starts with `es`, English otherwise.
 */
export function localeFromAcceptLanguage(
  header: string | null | undefined,
): Locale {
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      const quality = q ? Number.parseFloat(q.slice(2)) : 1;
      return {
        tag: tag.toLowerCase(),
        quality: Number.isNaN(quality) ? 0 : quality,
        index,
      };
    })
    .filter((entry) => entry.tag && entry.quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index)[0];

  return preferred?.tag.startsWith("es") ? "es" : defaultLocale;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}
