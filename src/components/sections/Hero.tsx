import { motion } from "framer-motion";
import { Home, ArrowRight, Tag, Star } from "lucide-react";
import { Button } from "../ui/Button";
import { scrollToId } from "../../lib/scroll";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-50 pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Colonne texte */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center rounded-md bg-terracotta-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            Service premium
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.12] text-charcoal-950 sm:text-5xl lg:text-[3.3rem]">
            <span className="font-bold">Transformez</span> votre bien et{" "}
            <span className="font-bold text-terracotta-gradient">maximisez</span> vos revenus locatifs
          </h1>

          <p className="mt-6 max-w-lg text-balance text-lg text-charcoal-900/65">
            Propriétaire d'un bien en location courte durée&nbsp;? MJT Immobilier gère 100% de
            votre location : annonces, accueil voyageurs, ménage et tarification dynamique. Vous
            profitez, on s'occupe du reste.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => scrollToId("rdv")}>
              Réserver un appel découverte
              <ArrowRight size={16} />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="normal-case tracking-normal"
              onClick={() => scrollToId("offres")}
            >
              <Tag size={16} />
              Voir nos tarifs
            </Button>
          </div>
        </motion.div>

        {/* Visuel décoratif */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="clip-blob relative aspect-[4/3.4] overflow-hidden bg-terracotta-gradient shadow-charcoal">
            <div
              aria-hidden
              className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-white/15 blur-2xl animate-float"
            />
            <div
              aria-hidden
              className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-charcoal-950/15 blur-2xl animate-float"
              style={{ animationDelay: "1.5s" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Home size={72} strokeWidth={1} className="text-white/40" />
            </div>
          </div>

          {/* Carte flottante de réassurance */}
          <div className="absolute -bottom-6 left-1/2 w-[calc(100%-2.5rem)] -translate-x-1/2 rounded-lg border border-charcoal-950/10 bg-white p-4 shadow-charcoal sm:w-72">
            <div className="flex items-center gap-1 text-terracotta-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
              ))}
              <span className="ml-1.5 text-xs font-semibold text-charcoal-950">4.9/5</span>
            </div>
            <p className="mt-1.5 text-xs text-charcoal-900/60">
              Note moyenne propriétaires &amp; voyageurs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
