export function SectionDivider() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-5 bg-cream-50 py-14">
      <span className="h-px w-24 bg-gradient-to-r from-transparent to-gold-500/60 sm:w-40" />
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-gold-500/50">
        <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
      </span>
      <span className="h-px w-24 bg-gradient-to-l from-transparent to-gold-500/60 sm:w-40" />
    </div>
  );
}
