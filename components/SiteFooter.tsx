import type { Content } from "@/content";
import { lastUpdated } from "@/content/shared";
import { formatDate } from "@/lib/format";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  content: Content;
};

export function SiteFooter({ locale, content }: Props) {
  const { meta, ui } = content;

  return (
    <footer className="border-line border-t">
      <div className="text-muted mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-6 text-sm sm:px-6">
        <p>{meta.name}</p>
        <p>
          {ui.builtWith}
          <span aria-hidden> · </span>
          {ui.updated} {formatDate(lastUpdated, locale)}
        </p>
      </div>
    </footer>
  );
}
