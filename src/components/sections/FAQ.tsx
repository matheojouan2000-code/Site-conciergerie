import { useState } from "react";
import { ChevronDown } from "lucide-react";

const QUESTIONS = [
  {
    q: "Quelle commission prenez-vous ?",
    a: "Notre commission démarre à 20% TTC de vos revenus locatifs, sans frais fixe. Si votre bien ne génère pas de revenus, nous ne prenons aucune commission.",
  },
  {
    q: "Mon bien est-il assuré pendant les locations ?",
    a: "Oui, chaque séjour est couvert par une assurance dommages qui protège votre bien et son mobilier pendant toute la durée de la location.",
  },
  {
    q: "Y a-t-il un engagement de durée ?",
    a: "Non, notre accord est sans engagement de durée. Vous pouvez arrêter la collaboration à tout moment avec un simple préavis.",
  },
  {
    q: "Comment se passe la remise des clés aux voyageurs ?",
    a: "Nous gérons l'intégralité du check-in et du check-out : remise des clés en personne ou via une boîte à clés sécurisée, selon votre préférence.",
  },
  {
    q: "Sur quelles plateformes mon bien sera-t-il diffusé ?",
    a: "Votre annonce est optimisée et diffusée sur les principales plateformes (Airbnb, Booking.com, Vrbo) pour maximiser sa visibilité et son taux d'occupation.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream-50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">FAQ</span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-forest-950 sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>

        <div className="mt-10 divide-y divide-forest-950/10 border-t border-b border-forest-950/10">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-forest-950 sm:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gold-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-forest-900/65">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
