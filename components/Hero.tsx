import { Download, Mail } from "lucide-react";
import type { Content } from "@/content";
import { cvPath, identity } from "@/content/shared";
import type { Locale } from "@/lib/i18n";
import { ExternalLink } from "./ExternalLink";

type Props = {
  locale: Locale;
  content: Content;
};

const outlineButton =
  "border-line-strong hover:border-ink inline-flex min-h-11 items-center gap-1.5 rounded-full border px-5 text-sm font-medium";

export function Hero({ locale, content }: Props) {
  const { meta, hero, ui } = content;

  return (
    <section id="top" className="pt-12 pb-14 sm:pt-20 sm:pb-20">
      <p className="text-accent font-mono text-sm">{meta.roleLine}</p>
      <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl lg:text-6xl">
        <span className="sr-only">{meta.name}. </span>
        {meta.tagline}
      </h1>
      <p className="text-muted mt-5">{hero.location}</p>
      <ul className="mt-8 flex flex-wrap gap-3">
        <li>
          <a
            href={cvPath[locale]}
            download
            className="bg-accent text-on-accent inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-medium hover:opacity-90"
          >
            <Download aria-hidden className="size-4" />
            {ui.cv}
          </a>
        </li>
        <li>
          <ExternalLink
            href={identity.github}
            newTabLabel={ui.newTab}
            className={outlineButton}
          >
            {hero.github}
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            href={identity.linkedin}
            newTabLabel={ui.newTab}
            className={outlineButton}
          >
            {hero.linkedin}
          </ExternalLink>
        </li>
        <li>
          <a href={`mailto:${identity.email}`} className={outlineButton}>
            <Mail aria-hidden className="size-4" />
            {hero.email}
          </a>
        </li>
      </ul>
    </section>
  );
}
