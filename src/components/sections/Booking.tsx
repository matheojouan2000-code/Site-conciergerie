import { CalendarCheck, PhoneCall, Mail } from "lucide-react";
import { Button } from "../ui/Button";

const PHONE_NUMBER = "+33612345678";
const PHONE_DISPLAY = "06 12 34 56 78";
const EMAIL = "contact@mjt-immobilier.fr";

export function Booking() {
  return (
    <section id="rdv" className="bg-navy-gradient py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-400">
          <CalendarCheck size={14} />
          Appel découverte gratuit
        </span>
        <h2 className="mt-5 text-balance font-display text-3xl font-extrabold text-white sm:text-4xl">
          Parlons de votre bien en 15 minutes
        </h2>
        <p className="mt-4 text-white/60">
          Un expert conciergerie répond à vos questions, évalue votre potentiel de revenus et vous
          présente notre offre sur-mesure — sans engagement.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" onClick={() => window.open(`tel:${PHONE_NUMBER}`, "_self")}>
            <PhoneCall size={18} />
            Appeler {PHONE_DISPLAY}
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="border border-white/20"
            onClick={() => window.open(`mailto:${EMAIL}`, "_self")}
          >
            <Mail size={18} />
            Écrire à notre équipe
          </Button>
        </div>
      </div>
    </section>
  );
}
