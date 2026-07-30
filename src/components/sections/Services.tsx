const SERVICES = [
  {
    number: "01",
    title: "Gestion des annonces",
    items: ["Annonce optimisée", "Tarification dynamique et stratégique", "Multi-plateformes"],
  },
  {
    number: "02",
    title: "Gestion des voyageurs",
    items: ["Contrôle des voyageurs", "Communication 7j/7", "Gestion des incidents"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream-100 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
          Services
        </span>

        <div className="mt-8 grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16">
          {SERVICES.map((service) => (
            <div key={service.number} className="border-t border-forest-950/15 pt-6">
              <p className="font-display text-3xl text-gold-500">{service.number}.</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-forest-950">
                {service.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-forest-900/70">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
