import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { InlineScript } from "@/components/InlineScript";
import { getContent } from "@/content";
import { isLocale, locales } from "@/lib/i18n";
import { scrollRestoreScript } from "@/lib/scroll";
import { getSiteUrl } from "@/lib/site";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

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
    title: `${meta.name} · ${meta.roleLine}`,
    description: meta.tagline,
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en", "x-default": "/" },
    },
  };
}

/** Applies the saved theme before first paint so there is no flash of the wrong one. */
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
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
