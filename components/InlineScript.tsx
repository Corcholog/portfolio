"use client";

/**
 * Inline script that runs while the browser parses the server HTML (before first
 * paint). On client-side navigations React re-renders it from the RSC payload,
 * where it would trigger a "script tag while rendering" warning; there it is
 * emitted as inert `text/plain` instead. `suppressHydrationWarning` covers the
 * `type` difference between server and client.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
