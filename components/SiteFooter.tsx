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
    <footer className="border-line bg-band border-t">
      <div className="text-muted mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-8 text-sm sm:px-6">
        <p className="font-display text-ink flex items-center gap-3 text-lg">
          <span
            aria-hidden
            className="bg-accent size-2.5 rotate-45 rounded-[2px]"
          />
          {meta.name}
        </p>
        <p>
          {ui.builtWith}
          <span aria-hidden> · </span>
          {ui.updated} {formatDate(lastUpdated, locale)}
        </p>
      </div>
    </footer>
  );
}
