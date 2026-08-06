import { useEffect, useState } from "react";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { scrollToId } from "../../lib/scroll";

const WHATSAPP_NUMBER = "33672417304";

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
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-forest-950/10 bg-white/95 p-3 shadow-[0_-10px_30px_-15px_rgba(28,23,18,0.25)] backdrop-blur-md lg:hidden">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-md border border-forest-950/15 py-3 text-sm font-semibold text-forest-950"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>
      <button
        onClick={() => scrollToId("rdv")}
        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-gold-gradient py-3 text-sm font-semibold text-white shadow-gold"
      >
        <CalendarCheck size={16} />
        Prendre rendez-vous
      </button>
    </div>
  );
}
