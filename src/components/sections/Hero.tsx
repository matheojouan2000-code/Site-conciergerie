import { motion } from "framer-motion";
import { Star, ShieldCheck, TrendingUp, ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "../ui/Button";
import { scrollToId } from "../../lib/scroll";

const TRUST_ITEMS = [
  { icon: TrendingUp, label: "+30% de revenus en moyenne" },
  { icon: Star, label: "Note moyenne 4.9/5" },
  { icon: ShieldCheck, label: "100+ logements gérés" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-gradient pt-32 pb-20 lg:pt-44 lg:pb-28">
      {/* Halo décoratifs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-64 h-96 w-96 rounded-full bg-navy-500/40 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* Colonne texte */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-400">
            Conciergerie premium · Places limitées par quartier
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            Maximisez vos revenus locatifs{" "}
            <span className="text-gold-gradient">sans lever le petit doigt</span>
          </h1>

          <p className="mt-6 max-w-lg text-balance text-lg text-white/70">
            Gestion 100% automatisée de votre bien Airbnb : annonce optimisée, tarification
            dynamique, accueil voyageurs et ménage 5 étoiles. Commissions à la performance,
            aucun frais fixe.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => scrollToId("calculateur")}>
              Estimer mes revenus gratuitement
              <ArrowRight size={18} />
            </Button>
            <Button variant="ghost" size="lg" className="border border-white/20" onClick={() => scrollToId("rdv")}>
              <PhoneCall size={18} />
              Réserver un appel découverte
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-white/80">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Icon size={16} className="text-gold-400" />
                </span>
                {label}
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Widget d'estimation rapide (teaser) */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-navy backdrop-blur-xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
              Estimation express
            </p>
            <p className="mt-2 font-display text-lg font-semibold text-white">
              Combien pourrait rapporter votre bien&nbsp;?
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <span className="text-sm text-white/60">Sans conciergerie</span>
                <span className="font-display text-base font-semibold text-white/80">~1 100 €/mois</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-gold-500/30 bg-gold-500/10 px-4 py-3">
                <span className="text-sm text-gold-300">Avec Nomade Conciergerie</span>
                <span className="font-display text-lg font-bold text-gold-400">~2 400 €/mois</span>
              </div>
            </div>

            <Button className="mt-6 w-full" onClick={() => scrollToId("calculateur")}>
              Calculer mon estimation précise
              <ArrowRight size={18} />
            </Button>
            <p className="mt-3 text-center text-xs text-white/40">
              Exemple basé sur un T2 à Paris · Résultat personnalisé en 30 secondes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
