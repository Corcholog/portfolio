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
        background: "#FFF5E4",
        color: "#2B1418",
        padding: "72px 80px",
        borderLeft: "24px solid #850E35",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 28,
            height: 28,
            background: "#850E35",
            transform: "rotate(45deg)",
          }}
        />
        <div style={{ fontSize: 30, color: "#850E35" }}>{meta.roleLine}</div>
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
      <div style={{ display: "flex", fontSize: 44, color: "#6A4A52" }}>
        {meta.name}
      </div>
    </div>,
    size,
  );
}
