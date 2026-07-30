export function SectionDivider() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-4 bg-cream-50 py-8">
      <span className="h-px w-14 bg-gold-500/40 sm:w-20" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold-500/70" />
      <span className="h-px w-14 bg-gold-500/40 sm:w-20" />
    </div>
  );
}
