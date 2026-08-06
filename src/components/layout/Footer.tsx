import { MapPin, Mail, Phone } from "lucide-react";
import { Logo } from "../ui/Logo";

const ZONES = ["Nantes", "Paris", "Bordeaux"];

export function Footer() {
  return (
    <footer className="bg-forest-950 pt-16 pb-8 text-white/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 text-white">
              <Logo className="h-11 w-11 rounded-full [clip-path:circle(47%)]" />
              <span className="font-sans text-base font-semibold">MJT Prestige</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Gestion locative premium pour propriétaires exigeants. Vos revenus, notre priorité.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Liens rapides</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-gold-400">Services</a></li>
              <li><a href="#offres" className="hover:text-gold-400">Tarifs</a></li>
              <li><a href="#audit" className="hover:text-gold-400">Audit d'annonce</a></li>
              <li><a href="#faq" className="hover:text-gold-400">FAQ</a></li>
              <li><a href="#rdv" className="hover:text-gold-400">Appel découverte</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Zones d'intervention</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {ZONES.map((zone) => (
                <li key={zone} className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-gold-500" />
                  {zone}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Contact direct</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold-500" />
                <a href="tel:+33672417304" className="hover:text-gold-400">06 72 41 73 04</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold-500" />
                <a href="mailto:mjtimmobilier94@gmail.com" className="hover:text-gold-400">mjtimmobilier94@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} MJT Prestige. Tous droits réservés.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold-400">Mentions légales</a>
            <a href="#" className="hover:text-gold-400">CGV</a>
            <a href="#" className="hover:text-gold-400">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
