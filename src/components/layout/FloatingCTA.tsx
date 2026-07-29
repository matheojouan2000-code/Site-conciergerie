import { useEffect, useState } from "react";
import { Phone, CalendarCheck } from "lucide-react";
import { scrollToId } from "../../lib/scroll";

const PHONE_NUMBER = "+33612345678";
const PHONE_DISPLAY = "06 12 34 56 78";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-charcoal-950/10 bg-white/95 p-3 shadow-[0_-10px_30px_-15px_rgba(28,23,18,0.25)] backdrop-blur-md lg:hidden">
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-md border border-charcoal-950/15 py-3 text-sm font-semibold text-charcoal-950"
      >
        <Phone size={16} />
        {PHONE_DISPLAY}
      </a>
      <button
        onClick={() => scrollToId("rdv")}
        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-terracotta-gradient py-3 text-sm font-semibold text-white shadow-terracotta"
      >
        <CalendarCheck size={16} />
        Réserver un appel
      </button>
    </div>
  );
}
