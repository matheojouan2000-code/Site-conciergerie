export const CALENDLY_URL = "https://calendly.com/mjtimmobilier94/30min";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function openCalendly(url: string = CALENDLY_URL) {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url });
  } else {
    // Calendly pas encore chargé (script async) : on ouvre la page directement
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
