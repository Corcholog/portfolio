import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  locale: Locale;
  content: Content;
};

export function SiteHeader({ locale, content }: Props) {
  const { meta, nav, lang, theme } = content;
  const links = [
    { href: "#projects", label: nav.projects },
    { href: "#about", label: nav.about },
    { href: "#now", label: nav.now },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="border-line sticky top-0 z-40 border-b bg-[var(--header-bg)] backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-3 px-4 py-1 sm:gap-x-6 sm:px-6">
        <a
          href="#top"
          className="font-display inline-flex min-h-9 items-center text-[15px] font-medium min-[361px]:text-base sm:text-lg"
        >
          {meta.name}
        </a>
        <nav
          aria-label={nav.label}
          className="order-last w-full sm:order-none sm:w-auto sm:flex-1"
        >
          <ul className="flex gap-x-0.5 sm:gap-x-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted hover:text-ink inline-flex min-h-9 items-center px-1.5 text-sm whitespace-nowrap underline-offset-4 hover:underline sm:px-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-1">
          <LanguageSwitcher current={locale} label={lang.toggle} />
          <ThemeToggle label={theme.toggle} />
        </div>
      </div>
    </header>
  );
}
