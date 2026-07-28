import { useEffect, useState } from "react";
import { Phone, Calculator } from "lucide-react";
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
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-navy-900/10 bg-white/95 p-3 shadow-[0_-10px_30px_-15px_rgba(5,11,26,0.3)] backdrop-blur-md lg:hidden">
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-navy-900/15 py-3 text-sm font-semibold text-navy-900"
      >
        <Phone size={16} />
        {PHONE_DISPLAY}
      </a>
      <button
        onClick={() => scrollToId("calculateur")}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-gradient py-3 text-sm font-semibold text-navy-950 shadow-gold"
      >
        <Calculator size={16} />
        Estimer mes revenus
      </button>
    </div>
  );
}
