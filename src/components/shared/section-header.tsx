interface SectionHeaderProps {
  title: string;
  subtitle: string;
  backgroundText?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  backgroundText,
  className,
}: SectionHeaderProps) {
  return (
    <>
      {backgroundText && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-6 top-12 sm:top-4 text-[clamp(3rem,10vw,7rem)] font-semibold uppercase leading-none tracking-[0.06em] text-primary/20 lg:left-12"
        >
          {backgroundText}
        </div>
      )}

      <div
        className={`relative flex flex-col justify-between gap-4 pt-4 sm:flex-row sm:items-end ${className || ""}`}
      >
        <h2 className="text-[clamp(2.2rem,4.2vw,3.7rem)] font-medium font-serif italic leading-none tracking-tight">
          {title}
        </h2>

        <p className="w-fit pb-1 text-[clamp(1.2rem,1.5vw,2rem)] font-normal leading-none text-primary hidden sm:block">
          {subtitle}
        </p>
      </div>
    </>
  );
}
