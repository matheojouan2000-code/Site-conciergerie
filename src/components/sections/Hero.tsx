import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
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
          <span className="inline-flex items-center rounded-md bg-gold-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            Service premium
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.12] text-forest-950 sm:text-5xl lg:text-[3.3rem]">
            <span className="font-bold">Votre bien travaille pour vous</span>,{" "}
            <span className="font-bold text-gold-gradient">sans effort de votre part</span>.
          </h1>

          <p className="mt-6 max-w-lg text-balance text-lg text-forest-900/65">
            Vous possédez un logement destiné à la location courte durée&nbsp;? MJT Prestige
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
          <div className="clip-blob relative aspect-[4/3.4] overflow-hidden shadow-forest">
            <img
              src={livingRoom}
              alt="Salon rénové et décoré d'un bien géré par MJT Prestige"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
