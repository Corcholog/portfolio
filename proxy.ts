import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale, localeFromAcceptLanguage } from "@/lib/i18n";

/** Redirects `/` to `/es` or `/en`: remembered choice first, then Accept-Language. */
export function proxy(request: NextRequest) {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved)
    ? saved
    : localeFromAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"],
};
