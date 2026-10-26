# Giorgio Iván Loguercio — Portfolio

Personal portfolio, in Spanish and English. Built with Next.js (App Router), TypeScript and Tailwind CSS, statically generated and deployed on Vercel.

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

## Structure

- `app/[locale]/` — layout and page, one static route per language
- `content/` — typed copy (`es.ts`, `en.ts`, shape in `types.ts`) and language-neutral facts (`shared.ts`)
- `lib/` — language helpers and metadata
- `proxy.ts` — redirects `/` to `/es` or `/en`
- `components/` — UI
