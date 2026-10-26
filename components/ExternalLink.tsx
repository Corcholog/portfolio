import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  /** Spoken to screen readers, e.g. "opens in a new tab". */
  newTabLabel: string;
  /** What the link is about, spoken to screen readers (e.g. the project name). */
  context?: string;
  className?: string;
  children: React.ReactNode;
};

/** Link to another site: opens in a new tab, safe `rel`, announced as such. */
export function ExternalLink({
  href,
  newTabLabel,
  context,
  className,
  children,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <ArrowUpRight aria-hidden className="size-4 shrink-0" />
      <span className="sr-only">
        {context ? ` (${context}, ${newTabLabel})` : ` (${newTabLabel})`}
      </span>
    </a>
  );
}
