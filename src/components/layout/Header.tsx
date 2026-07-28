import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { scrollToId } from "../../lib/scroll";

const NAV_LINKS = [
  { href: "#calculateur", label: "Estimation" },
  { href: "#rdv", label: "Appel découverte" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-950/90 backdrop-blur-md shadow-navy" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-gradient text-navy-950">
            <Sparkles size={18} strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">MJT Immobilier</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold-400"
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
          className="text-white lg:hidden"
          aria-label="Ouvrir le menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy-950 px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/85 hover:text-gold-400"
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
