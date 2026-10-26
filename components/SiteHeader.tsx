import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = {
  locale: Locale;
  content: Content;
};

export function SiteHeader({ locale, content }: Props) {
  const { meta, nav, lang } = content;
  const links = [
    { href: "#projects", label: nav.projects },
    { href: "#about", label: nav.about },
    { href: "#now", label: nav.now },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3">
      <a href="#top" className="font-semibold">
        {meta.name}
      </a>
      <nav aria-label={nav.label}>
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageSwitcher current={locale} label={lang.toggle} />
    </header>
  );
}
