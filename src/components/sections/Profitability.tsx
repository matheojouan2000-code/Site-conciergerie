import { Home } from "lucide-react";
import { Button } from "../ui/Button";
import { scrollToId } from "../../lib/scroll";

export function Profitability() {
  return (
    <section className="bg-cream-50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h2 className="text-balance font-display text-3xl font-semibold text-forest-950 sm:text-4xl">
            Une rentabilité garantie, où que soit votre bien
          </h2>

          <p className="mt-6 text-forest-900/65">
            Un appartement 2 pièces peut générer jusqu'à <strong className="text-forest-950">3 000&nbsp;€</strong> par
            mois avec MJT Immobilier. Nous optimisons chaque détail pour maximiser vos revenus et
            satisfaire vos voyageurs.
          </p>
          <p className="mt-4 text-forest-900/65">
            Même un studio peut générer jusqu'à <strong className="text-forest-950">1 800&nbsp;€</strong> par mois.
            Le potentiel exact dépend de la ville et du bien — notre audit d'annonce vous donne une
            analyse précise et chiffrée.
          </p>

          <Button size="lg" className="mt-8" onClick={() => scrollToId("audit")}>
            Découvrir l'audit d'annonce
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="clip-blob relative aspect-square overflow-hidden bg-forest-gradient shadow-forest">
            <div
              aria-hidden
              className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-gold-500/25 blur-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Home size={64} strokeWidth={1} className="text-gold-400/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
