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

export function ContactSection({ locale, content }: Props) {
  const { contact, hero, ui } = content;

  return (
    <div className="reveal mt-6">
      <p className="font-display max-w-2xl text-2xl leading-snug sm:text-3xl">
        {contact.line}
      </p>
      <p className="mt-5">
        <a
          href={`mailto:${identity.email}`}
          className="text-accent inline-flex min-h-11 items-center gap-2 font-mono text-base break-all underline underline-offset-4 sm:text-lg"
        >
          <Mail aria-hidden className="size-5 shrink-0" />
          {identity.email}
        </a>
      </p>
      <ul className="mt-5 flex flex-wrap gap-3">
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
            href={identity.linkedin}
            newTabLabel={ui.newTab}
            className={outlineButton}
          >
            {hero.linkedin}
          </ExternalLink>
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
      </ul>
    </div>
  );
}
