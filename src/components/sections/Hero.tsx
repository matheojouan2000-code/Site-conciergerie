import { motion } from "framer-motion";
import { ArrowRight, Tag, Star } from "lucide-react";
import { Button } from "../ui/Button";
import { scrollToId } from "../../lib/scroll";
import livingRoom from "../../assets/living-room.jpg";

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
            <span className="font-bold">Votre bien travaille pour vous</span>,{" "}
            <span className="font-bold text-terracotta-gradient">sans effort de votre part</span>.
          </h1>

          <p className="mt-6 max-w-lg text-balance text-lg text-charcoal-900/65">
            Vous possédez un logement destiné à la location courte durée&nbsp;? MJT Immobilier
            prend en charge l'intégralité de sa gestion : création des annonces, accueil de vos
            voyageurs, entretien du logement et ajustement des prix en temps réel, pour que vos
            revenus locatifs atteignent leur plein potentiel.
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
          <div className="clip-blob relative aspect-[4/3.4] overflow-hidden shadow-charcoal">
            <img
              src={livingRoom}
              alt="Salon rénové et décoré d'un bien géré par MJT Immobilier"
              className="h-full w-full object-cover"
            />
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
