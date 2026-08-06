import { CalendarCheck, Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { openCalendly } from "../../lib/calendly";

const EMAIL = "mjtimmobilier94@gmail.com";
const WHATSAPP_NUMBER = "33672417304";

export function Booking() {
  return (
    <section id="rdv" className="bg-forest-gradient py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-md border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-400">
          <CalendarCheck size={14} />
          Appel découverte gratuit
        </span>
        <h2 className="mt-5 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
          Parlons de votre bien en 30 minutes
        </h2>
        <p className="mt-4 text-white/60">
          Un appel découverte gratuit pour faire connaissance&nbsp;: nous échangeons sur votre bien
          et évaluons ensemble son potentiel de revenus. Choisissez le créneau qui vous arrange,
          nous vous appelons à l'heure prévue.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" onClick={() => openCalendly()}>
            <CalendarCheck size={18} />
            Choisir un créneau
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

        <p className="mt-5 text-xs text-white/40">
          Vous préférez échanger par message&nbsp;?{" "}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/70"
          >
            Écrivez-nous sur WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
