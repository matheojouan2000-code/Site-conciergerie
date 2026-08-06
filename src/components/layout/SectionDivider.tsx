import logo from "../../assets/mjt-logo.svg";

export function SectionDivider() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-6 bg-cream-50 py-16">
      <span className="h-px w-20 bg-gradient-to-r from-transparent via-gold-500/40 to-gold-500/70 sm:w-44" />
      <img src={logo} alt="" className="h-14 w-14 shrink-0 rounded-full shadow-gold" />
      <span className="h-px w-20 bg-gradient-to-l from-transparent via-gold-500/40 to-gold-500/70 sm:w-44" />
    </div>
  );
}
