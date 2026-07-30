import { KeyRound } from "lucide-react";

export function SectionDivider() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-6 bg-cream-50 py-16">
      <span className="h-px w-20 bg-gradient-to-r from-transparent via-gold-500/40 to-gold-500/70 sm:w-44" />
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-white shadow-gold ring-4 ring-cream-100">
        <KeyRound size={18} strokeWidth={1.75} />
      </span>
      <span className="h-px w-20 bg-gradient-to-l from-transparent via-gold-500/40 to-gold-500/70 sm:w-44" />
    </div>
  );
}
