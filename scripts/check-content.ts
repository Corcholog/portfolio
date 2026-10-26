/**
 * Build-time content check (runs before `next build`, or `npm run check:content`).
 *
 * - FAILS if `es` and `en` differ in keys, list lengths or which values are null.
 * - WARNS about every `[TBD: ...]` placeholder left; components hide those.
 *
 * Run by Node's built-in TypeScript support, so imports are relative with `.ts`.
 */
import { en } from "../content/en.ts";
import { es } from "../content/es.ts";
import * as shared from "../content/shared.ts";
import { describeShape, findPlaceholders } from "../lib/placeholders.ts";

const esShape = describeShape(es);
const enShape = describeShape(en);
const esSet = new Set(esShape);
const enSet = new Set(enShape);

const onlyEs = esShape.filter((line) => !enSet.has(line));
const onlyEn = enShape.filter((line) => !esSet.has(line));

if (onlyEs.length || onlyEn.length) {
  console.error("\ncontent: ES and EN do not have the same structure.");
  for (const line of onlyEs) console.error(`  only in es.ts: ${line}`);
  for (const line of onlyEn) console.error(`  only in en.ts: ${line}`);
  process.exit(1);
}

const hits = [
  ...findPlaceholders(es).map((h) => ({ source: "es", ...h })),
  ...findPlaceholders(en).map((h) => ({ source: "en", ...h })),
  ...findPlaceholders({ ...shared }).map((h) => ({ source: "shared", ...h })),
];

if (hits.length === 0) {
  console.log("content: ES and EN match, no placeholders left.");
} else {
  console.warn(
    `content: ES and EN match. ${hits.length} placeholder(s) left (hidden on the site):`,
  );
  for (const hit of hits) {
    console.warn(`  [${hit.source}] ${hit.path}  ${hit.text}`);
  }
}
