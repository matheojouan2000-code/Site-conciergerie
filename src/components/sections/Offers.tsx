import { CheckCircle2 } from "lucide-react";

const INCLUDED = [
  "Gestion complète des réservations et communication avec les voyageurs",
  "Maintenance préventive et interventions d'urgence",
  "Optimisation de vos annonces",
  "Stratégie tarifaire dynamique pour maximiser vos revenus",
  "Suivi détaillé des performances et des revenus",
];

export function Offers() {
  return (
    <section id="offres" className="bg-cream-100 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h2 className="font-display text-3xl font-semibold text-charcoal-950">Nos offres</h2>
          <p className="text-charcoal-900/60">Nous avons l'offre qui vous convient</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="rounded-xl bg-terracotta-gradient p-8 text-white lg:col-span-2">
            <p className="text-sm text-white/80">À partir de</p>
            <p className="font-display text-6xl font-semibold">
              20<span className="text-2xl">% TTC</span>
            </p>
            <p className="mt-2 text-sm text-white/85">de commission sur vos revenus locatifs</p>

            <div className="mt-6 border-t border-white/25 pt-6">
              <span className="inline-block rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide">
                Pas de revenus = Pas de commission
              </span>
            </div>

            <div className="mt-4 rounded-lg bg-charcoal-950/20 p-4 text-sm">
              Notre réussite dépend de la vôtre : nous ne gagnons que si vous gagnez.
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-xl font-semibold text-charcoal-950">Nos services inclus</h3>
            <ul className="mt-5 space-y-3.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-charcoal-900/75">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-terracotta-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
