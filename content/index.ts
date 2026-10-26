import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { es } from "./es";
import type { Content } from "./types";

export type { Content };

const dictionaries: Record<Locale, Content> = { es, en };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}
export * from "./shared";
