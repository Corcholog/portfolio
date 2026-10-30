# Portfolio — Giorgio Loguercio

My personal portfolio, in Spanish and English: a one-page site with the featured projects, the story behind them,
what I am working on now and a way to contact me.

**Live:** <https://giorgio-loguercio.vercel.app>

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Fully static: `/es` and `/en` are
prerendered at build time and served from Vercel.

[![CI](https://github.com/Corcholog/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Corcholog/portfolio/actions/workflows/ci.yml)

## What is worth reading here

- **Two languages, one source of truth.** Every string a visitor reads lives in `content/es.ts` or `content/en.ts`, and
  both files have to satisfy the same `Content` type. A missing key, an extra key, a list of a different length or a
  `null` in one language and a string in the other fails `npm run typecheck`.
- **A build gate for the copy.** `npm run check:content` walks both dictionaries, compares every path, list length and
  null-vs-string, and fails the build if they drift apart. It also lists the `[TBD: …]` placeholders that are still
  missing. It runs automatically before `npm run build`.
- **The language is chosen server-side.** `proxy.ts` (Next 16's name for middleware) redirects `/` to `/es` or `/en`
  using the remembered cookie first and `Accept-Language` second, with a 307 so the choice is never cached wrongly.
- **Only four client components.** Everything else is a server component; the page ships no client-side data fetching
  and no `next/link` over-fetching.
- **One static route per language.** `generateStaticParams` plus `dynamicParams = false` means `/es` and `/en` are the
  only pages that exist, each with its own `<html lang>`, canonical URL and `hreflang` alternates.
- **Accessibility is part of the build.** Semantic landmarks, a skip link, visible focus rings, real alt text for every
  image, `prefers-reduced-motion` honoured, and the reveal animations are CSS-only (`animation-timeline: view()`), so
  the content is visible when the browser does not support them.

## Structure

- `app/[locale]/` — layout and page, one static route per language
- `content/` — typed copy (`es.ts`, `en.ts`, shape in `types.ts`) and language-neutral facts (`shared.ts`)
- `lib/` — language helpers, formatting and metadata
- `proxy.ts` — redirects `/` to `/es` or `/en`
- `components/` — UI
- `scripts/check-content.ts` — the build gate described above

## Scripts

| Command                 | What it does                                           |
| ----------------------- | ------------------------------------------------------ |
| `npm run dev`           | Dev server on http://localhost:3000                    |
| `npm run build`         | Production build (static `/es` and `/en`)              |
| `npm run start`         | Serve the production build                             |
| `npm run lint`          | ESLint                                                 |
| `npm run typecheck`     | `tsc --noEmit`                                         |
| `npm run format`        | Prettier (write)                                       |
| `npm run check:content` | Checks that both languages match (runs before `build`) |

## Environment

Nothing is required to build. `NEXT_PUBLIC_SITE_URL` sets the absolute origin used for canonical URLs, `hreflang`
and the sitemap; on Vercel it falls back to `VERCEL_PROJECT_PRODUCTION_URL`.

## License

MIT.
