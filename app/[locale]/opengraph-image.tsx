import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { isLocale, locales } from "@/lib/i18n";

/** Link-preview card, generated once per language at build time. */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { meta } = getContent(locale);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#FAF6EF",
        color: "#1F1B16",
        padding: "72px 80px",
        borderLeft: "24px solid #B4440F",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 28,
            height: 28,
            background: "#B4440F",
            transform: "rotate(45deg)",
          }}
        />
        <div style={{ fontSize: 30, color: "#B4440F" }}>{meta.roleLine}</div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 64,
          lineHeight: 1.15,
          letterSpacing: -1,
          maxWidth: 980,
        }}
      >
        {meta.tagline}
      </div>
      <div style={{ display: "flex", fontSize: 44, color: "#6B6257" }}>
        {meta.name}
      </div>
    </div>,
    size,
  );
}
