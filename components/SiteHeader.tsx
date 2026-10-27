import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  locale: Locale;
  content: Content;
};

export function SiteHeader({ locale, content }: Props) {
  const { meta, nav, lang, theme } = content;
  const links = [
    { id: "projects", label: nav.projects },
    { id: "about", label: nav.about },
    { id: "now", label: nav.now },
    { id: "contact", label: nav.contact },
  ];

  return (
    <header className="border-line sticky top-0 z-40 border-b bg-[var(--header-bg)] backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-2 gap-y-1.5 px-4 py-2 sm:gap-x-4 sm:gap-y-2 sm:px-6 sm:py-3.5">
        <a
          href="#top"
          className="flex min-h-9 items-center gap-2.5 rounded-xl sm:min-h-10"
        >
          <span
            aria-hidden
            className="bg-accent text-on-accent shadow-cozy hidden size-9 shrink-0 place-items-center rounded-xl sm:grid"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
              <path d="M12 3 21 12 12 21 3 12Z" />
            </svg>
          </span>
          <span className="font-display text-sm font-medium min-[361px]:text-base sm:text-xl">
            {meta.name}
          </span>
        </a>
        <div className="order-last w-full lg:order-none lg:flex lg:w-auto lg:flex-1 lg:justify-center">
          <NavLinks links={links} label={nav.label} />
        </div>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <LanguageSwitcher current={locale} label={lang.toggle} />
          <ThemeToggle label={theme.toggle} />
        </div>
      </div>
    </header>
  );
}
