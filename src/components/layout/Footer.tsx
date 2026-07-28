import { Sparkles, MapPin, Mail, Phone } from "lucide-react";

const ZONES = ["Paris", "Nice / Côte d'Azur", "Biarritz", "Annecy", "Bordeaux", "Lyon", "Marseille"];

export function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-8 text-white/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-gradient text-navy-950">
                <Sparkles size={16} strokeWidth={2.5} />
              </span>
              <span className="font-display text-base font-bold">MJT Immobilier</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Gestion locative premium pour propriétaires exigeants. Vos revenus, notre priorité.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Liens rapides</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#calculateur" className="hover:text-gold-400">Estimation gratuite</a></li>
              <li><a href="#rdv" className="hover:text-gold-400">Appel découverte</a></li>
              <li><a href="#top" className="hover:text-gold-400">Accueil</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Zones d'intervention</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
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
                06 12 34 56 78
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold-500" />
                contact@mjt-immobilier.fr
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} MJT Immobilier. Tous droits réservés.</p>
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
