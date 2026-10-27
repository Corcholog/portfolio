type Props = {
  id: string;
  title: string;
  /** Full-width tinted band behind the section. */
  band?: boolean;
  children?: React.ReactNode;
};

/** Anchored page section with its heading. */
export function Section({ id, title, band = false, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`py-14 sm:py-20 ${band ? "band" : ""}`}
    >
      <h2
        id={`${id}-title`}
        className="font-display reveal flex items-center gap-4 text-3xl font-medium tracking-tight sm:text-4xl"
      >
        <span
          aria-hidden
          className="bg-accent mx-0.5 size-3 shrink-0 rotate-45 rounded-[3px]"
        />
        {title}
        <span
          aria-hidden
          className="bg-line-strong/40 hidden h-px flex-1 sm:block"
        />
      </h2>
      {children}
    </section>
  );
}
