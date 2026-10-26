"use client";

import { useRouter } from "next/navigation";
import {
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  locales,
  type Locale,
} from "@/lib/i18n";

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
 * language; with it, the current anchor (`#projects`, ...) is kept and the
 * choice is remembered in a functional cookie read by `proxy.ts`.
 */
export function LanguageSwitcher({ current, label }: Props) {
  const router = useRouter();

  function switchTo(
    target: Locale,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) {
    event.preventDefault();
    rememberLocale(target);
    router.push(`/${target}${window.location.hash}`);
  }

  return (
    <nav aria-label={label}>
      <ul className="flex gap-3">
        {locales.map((locale) => (
          <li key={locale}>
            <a
              href={`/${locale}`}
              lang={locale}
              hrefLang={locale}
              aria-current={locale === current ? "true" : undefined}
              onClick={(event) => switchTo(locale, event)}
              className="font-mono text-sm uppercase underline-offset-4 aria-[current=true]:font-bold aria-[current=true]:underline"
            >
              {locale}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
