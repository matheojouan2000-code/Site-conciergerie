import { Home } from "lucide-react";
import { Button } from "../ui/Button";
import { scrollToId } from "../../lib/scroll";

export function Profitability() {
  return (
    <section className="bg-cream-50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h2 className="text-balance font-display text-3xl font-semibold text-charcoal-950 sm:text-4xl">
            Une rentabilité garantie, où que soit votre bien
          </h2>

          <p className="mt-6 text-charcoal-900/65">
            Un appartement 2 pièces peut générer jusqu'à <strong className="text-charcoal-950">3 000&nbsp;€</strong> par
            mois avec MJT Immobilier. Nous optimisons chaque détail pour maximiser vos revenus et
            satisfaire vos voyageurs.
          </p>
          <p className="mt-4 text-charcoal-900/65">
            Même un studio peut générer jusqu'à <strong className="text-charcoal-950">1 800&nbsp;€</strong> par mois.
            Le potentiel exact dépend de la ville et du bien — calculez le vôtre en 30 secondes.
          </p>

          <Button size="lg" className="mt-8" onClick={() => scrollToId("calculateur")}>
            Estimer mon bien
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="clip-blob relative aspect-square overflow-hidden bg-charcoal-gradient shadow-charcoal">
            <div
              aria-hidden
              className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-terracotta-500/25 blur-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Home size={64} strokeWidth={1} className="text-terracotta-400/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
