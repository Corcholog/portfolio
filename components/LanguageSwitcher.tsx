"use client";

import {
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  locales,
  type Locale,
} from "@/lib/i18n";
import { saveScrollPosition } from "@/lib/scroll";

type Props = {
  current: Locale;
  label: string;
};

function rememberLocale(locale: Locale) {
  try {
    document.cookie = `${LOCALE_COOKIE}=${locale}; max-age=${LOCALE_COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
  } catch {
    // Cookies blocked: the switch still works, it is just not remembered.
  }
}

/**
 * ES / EN selector. Without JavaScript the links go to the top of the other
 * language; with it, the reading position is kept and the
 * choice is remembered in a functional cookie read by `proxy.ts`.
 */
export function LanguageSwitcher({ current, label }: Props) {
  function switchTo(
    target: Locale,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) {
    event.preventDefault();
    rememberLocale(target);
    // The saved reading position replaces the anchor; without storage fall back to it.
    const keptPosition = saveScrollPosition();
    // Full page load on purpose: each language has its own root layout, so the
    // document is rebuilt anyway, and a real load re-runs the theme script.
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.assign(
      `/${target}${keptPosition ? "" : window.location.hash}`,
    );
  }

  return (
    <nav aria-label={label}>
      <ul className="flex items-center">
        {locales.map((locale) => (
          <li key={locale}>
            <a
              href={`/${locale}`}
              lang={locale}
              hrefLang={locale}
              aria-current={locale === current ? "true" : undefined}
              onClick={(event) => switchTo(locale, event)}
              className="text-muted hover:text-ink aria-[current=true]:text-accent inline-flex min-h-9 min-w-9 items-center justify-center font-mono text-sm uppercase underline-offset-4 aria-[current=true]:font-medium aria-[current=true]:underline"
            >
              {locale}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
