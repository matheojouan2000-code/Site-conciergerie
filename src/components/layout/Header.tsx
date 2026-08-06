import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { scrollToId } from "../../lib/scroll";
import logo from "../../assets/mjt-logo.svg";

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
        scrolled ? "border-forest-950/10 bg-cream-50/90 backdrop-blur-md" : "border-transparent bg-cream-50/60"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-forest-950">
          <img
            src={logo}
            alt="MJT Immobilier"
            className="h-12 w-12 rounded-full [clip-path:circle(47%)]"
          />
          <span className="font-display text-lg font-semibold tracking-tight">MJT Immobilier</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-forest-900/70 transition-colors hover:text-gold-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="primary" size="md" onClick={() => scrollToId("rdv")}>
            Réserver un appel
          </Button>
        </div>

        <button
          className="text-forest-950 lg:hidden"
          aria-label="Ouvrir le menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-forest-950/10 bg-cream-50 px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-forest-900/80 hover:text-gold-600"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              className="mt-2 w-full"
              onClick={() => {
                setMobileOpen(false);
                scrollToId("rdv");
              }}
            >
              Réserver un appel
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
