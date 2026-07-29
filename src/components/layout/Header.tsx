import { useEffect, useState } from "react";
import { Menu, X, KeyRound } from "lucide-react";
import { Button } from "../ui/Button";
import { scrollToId } from "../../lib/scroll";

const NAV_LINKS = [
  { href: "#top", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#offres", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
  { href: "#rdv", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-charcoal-950/10 bg-cream-50/90 backdrop-blur-md" : "border-transparent bg-cream-50/60"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2 text-charcoal-950">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-terracotta-gradient text-white">
            <KeyRound size={18} strokeWidth={2.25} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">MJT Immobilier</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal-900/70 transition-colors hover:text-terracotta-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="primary" size="md" onClick={() => scrollToId("calculateur")}>
            Estimer mes revenus
          </Button>
        </div>

        <button
          className="text-charcoal-950 lg:hidden"
          aria-label="Ouvrir le menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-charcoal-950/10 bg-cream-50 px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-charcoal-900/80 hover:text-terracotta-600"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              className="mt-2 w-full"
              onClick={() => {
                setMobileOpen(false);
                scrollToId("calculateur");
              }}
            >
              Estimer mes revenus
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
