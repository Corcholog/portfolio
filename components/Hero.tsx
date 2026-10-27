import { Download, Mail } from "lucide-react";
import Image from "next/image";
import type { Content } from "@/content";
import { cvPath, identity } from "@/content/shared";
import type { Locale } from "@/lib/i18n";
import { ExternalLink } from "./ExternalLink";

type Props = {
  locale: Locale;
  content: Content;
};

const outlineButton =
  "border-line-strong bg-card/70 hover:bg-card hover:border-ink inline-flex min-h-12 items-center gap-1.5 rounded-full border px-6 text-base font-medium motion-safe:transition motion-safe:hover:-translate-y-0.5";

export function Hero({ locale, content }: Props) {
  const { meta, hero, ui } = content;

  return (
    <section
      id="top"
      className="relative isolate pt-14 pb-16 sm:pt-24 sm:pb-24"
    >
      {/* The one photographic moment on the page: decorative, so it is hidden from assistive tech. */}
      <div aria-hidden className="hero-wash">
        <Image
          src="/textures/corks-wash.webp"
          alt=""
          fill
          sizes="100vw"
          quality={70}
        />
      </div>

      {/* Decoration: a warm "sun" and a few drifting save-point diamonds. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden md:block"
      >
        <div className="absolute -top-10 right-0 size-[26rem] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_68%)]" />
        <span className="border-accent/40 bg-accent/10 motion-safe:animate-float absolute top-12 right-28 size-16 rotate-45 rounded-2xl border" />
        <span className="bg-accent/25 motion-safe:animate-float-slow absolute top-44 right-12 size-6 rotate-45 rounded-md" />
        <span className="border-accent/40 motion-safe:animate-float absolute top-72 right-40 size-9 rotate-45 rounded-lg border-2" />
        <span className="bg-rose/40 motion-safe:animate-float-slow absolute top-28 right-64 size-3 rotate-45 rounded-sm" />
      </div>

      <p className="text-accent flex items-start gap-3 font-mono text-base leading-snug font-medium sm:items-center sm:text-xl">
        <span
          aria-hidden
          className="bg-accent mt-[0.45em] size-2.5 shrink-0 rotate-45 rounded-[2px] sm:mt-0"
        />
        {meta.roleLine}
      </p>
      <h1 className="font-display mt-5 max-w-3xl text-4xl leading-[1.08] font-medium tracking-tight sm:text-5xl lg:text-6xl">
        <span className="sr-only">{meta.name}. </span>
        {meta.tagline}
      </h1>
      <p className="border-line bg-chip text-chip-text mt-7 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium sm:text-base">
        <span
          aria-hidden
          className="bg-sage size-2.5 shrink-0 rounded-full shadow-[0_0_0_4px_color-mix(in_srgb,var(--sage)_25%,transparent)]"
        />
        {hero.location}
      </p>
      <ul className="mt-9 flex flex-wrap gap-3">
        <li>
          <a
            href={cvPath[locale]}
            download
            className="bg-accent text-on-accent shadow-cozy hover:shadow-lift inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-base font-medium motion-safe:transition motion-safe:hover:-translate-y-0.5"
          >
            <Download aria-hidden className="size-[18px]" />
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
            <Mail aria-hidden className="size-[18px]" />
            {hero.email}
          </a>
        </li>
      </ul>
    </section>
  );
}
