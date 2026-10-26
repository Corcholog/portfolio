import type { Locale } from "./i18n";

/** "2026-10-26" -> "26 de octubre de 2026" / "October 26, 2026". */
export function formatDate(isoDate: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

type Progress = { done: number; total: number; asOf: string };

/**
 * Fills `{done}`, `{total}`, `{percent}` and `{date}` in a progress sentence,
 * with numbers and the date formatted for the language.
 */
export function formatProgress(
  template: string,
  locale: Locale,
  { done, total, asOf }: Progress,
): string {
  const numbers = new Intl.NumberFormat(locale);
  const percent = new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return template
    .replace("{done}", numbers.format(done))
    .replace("{total}", numbers.format(total))
    .replace("{percent}", percent.format(done / total))
    .replace("{date}", formatDate(asOf, locale));
}

/** Fills `{name}` placeholders in a sentence from the given values. */
export function fillTemplate(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
