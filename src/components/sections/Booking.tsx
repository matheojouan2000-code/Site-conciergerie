import { CalendarCheck, PhoneCall, Mail } from "lucide-react";
import { Button } from "../ui/Button";

const PHONE_NUMBER = "+33672417304";
const PHONE_DISPLAY = "06 72 41 73 04";
const EMAIL = "mjtimmobilier94@gmail.com";

export function Booking() {
  return (
    <section id="rdv" className="bg-charcoal-gradient py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-md border border-terracotta-500/30 bg-terracotta-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-terracotta-400">
          <CalendarCheck size={14} />
          Appel découverte gratuit
        </span>
        <h2 className="mt-5 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
          Parlons de votre bien en 15 minutes
        </h2>
        <p className="mt-4 text-white/60">
          Un appel découverte gratuit pour faire connaissance&nbsp;: nous échangeons sur votre bien
          et évaluons ensemble son potentiel de revenus.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" onClick={() => window.open(`tel:${PHONE_NUMBER}`, "_self")}>
            <PhoneCall size={18} />
            Appeler {PHONE_DISPLAY}
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="border border-white/20 normal-case tracking-normal"
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
