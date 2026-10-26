import type { Metadata } from "next";
import { InlineScript } from "@/components/InlineScript";
import { getContent } from "@/content";
import { identity } from "@/content/shared";
import { fontVariables } from "@/lib/fonts";
import { locales } from "@/lib/i18n";
import { themeScript } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: `404 · ${identity.name}`,
};

/**
 * Page for any address the site does not have. It renders outside the language
 * layouts, so it cannot know the visitor's language: it shows both.
 */
export default function GlobalNotFound() {
  return (
    <html lang="es" suppressHydrationWarning className={fontVariables}>
      <head>
        <InlineScript html={themeScript} />
      </head>
      <body className="bg-bg text-ink font-sans antialiased">
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-10 px-4 py-16 sm:px-6">
          <h1 className="text-accent font-mono text-sm">404</h1>
          {locales.map((locale, index) => {
            const { notFound } = getContent(locale);
            return (
              <section key={locale} lang={locale}>
                <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
                  {notFound.title}
                </h2>
                <p className="text-muted mt-2">{notFound.text}</p>
                <a
                  href={`/${locale}`}
                  className={
                    index === 0
                      ? "bg-accent text-on-accent mt-4 inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium hover:opacity-90"
                      : "border-line-strong hover:border-ink mt-4 inline-flex min-h-11 items-center rounded-full border px-5 text-sm font-medium"
                  }
                >
                  {notFound.home}
                </a>
              </section>
            );
          })}
        </main>
      </body>
    </html>
  );
}
