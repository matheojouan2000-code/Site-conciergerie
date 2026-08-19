import { CheckCircle2, Search, ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button";

// Lien de paiement Stripe pour l'audit d'annonce (250€)
const STRIPE_AUDIT_LINK = "https://buy.stripe.com/9B63cv3960Lu5BjfZrbjW01";

const INCLUDED = [
  "Analyse complète de votre annonce (photos, titre, description)",
  "Étude de votre tarification face à la concurrence locale",
  "Recommandations concrètes et priorisées",
  "Guide complet pour aller chercher jusqu'à 20% de chiffre d'affaires supplémentaire",
  "Rapport détaillé livré par écrit en 72h maximum",
];

export function AuditAnnonce() {
  return (
    <section id="audit" className="bg-cream-100 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 rounded-xl border border-forest-950/10 bg-white p-8 lg:grid-cols-5 lg:gap-12 lg:p-12">
          <div className="lg:col-span-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold-600">
              <Search size={14} />
              Gardez 100% de vos revenus
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-forest-950 sm:text-4xl">
              Boostez votre annonce avec un audit expert
            </h2>
            <p className="mt-4 text-forest-900/65">
              Vous gérez déjà votre bien vous-même ? Notre audit passe votre annonce au crible et
              vous livre un plan d'action concret pour augmenter votre visibilité, votre taux de
              réservation et vos revenus — sans passer par une gestion complète.
            </p>
            <p className="mt-3 text-sm text-forest-900/50">
              Idéal en complément de notre offre de gestion, ou en solo si vous êtes autonome.
            </p>

            <ul className="mt-6 space-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-forest-900/75">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center rounded-lg bg-cream-100 p-8 text-center lg:col-span-2">
            <p className="text-sm text-forest-900/60">Tarif unique</p>
            <p className="mt-1 font-display text-5xl font-semibold text-forest-950">
              250<span className="text-xl">€</span>
            </p>
            <p className="mt-1 text-xs text-forest-900/50">TTC</p>
            <p className="mt-3 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-gold-600">
              <ShieldCheck size={14} />
              Satisfait ou remboursé
            </p>

            <Button
              size="lg"
              className="mt-6 w-full"
              href={STRIPE_AUDIT_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Commander mon audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
