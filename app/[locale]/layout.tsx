import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { InlineScript } from "@/components/InlineScript";
import { getContent } from "@/content";
import { fontVariables } from "@/lib/fonts";
import { isLocale, locales } from "@/lib/i18n";
import { scrollRestoreScript } from "@/lib/scroll";
import { getSiteUrl } from "@/lib/site";
import { themeScript } from "@/lib/theme";
import "../globals.css";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<LayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const { meta } = getContent(locale);
  return {
    metadataBase: new URL(getSiteUrl()),
    title: meta.pageTitle,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      siteName: meta.name,
      title: meta.pageTitle,
      description: meta.description,
      url: `/${locale}`,
      locale: locale === "es" ? "es_AR" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_AR"],
    },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf6ef" },
    { media: "(prefers-color-scheme: dark)", color: "#17140f" },
  ],
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={fontVariables}
    >
      <head>
        <InlineScript html={themeScript} />
      </head>
      <body className="bg-bg text-ink font-sans antialiased">
        {children}
        <InlineScript html={scrollRestoreScript} />
      </body>
    </html>
  );
}
