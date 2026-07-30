import { Megaphone, Users, Home } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    icon: Megaphone,
    title: "Gestion des annonces",
    items: ["Photos professionnelles", "Annonce optimisée", "Tarification dynamique et stratégique", "Multi-plateformes"],
  },
  {
    number: "02",
    icon: Users,
    title: "Gestion des voyageurs",
    items: ["Contrôle des voyageurs", "Check-in / Check-out", "Communication 7j/7", "Gestion des incidents"],
  },
  {
    number: "03",
    icon: Home,
    title: "Gestion immobilière",
    items: ["Transparence avec nos propriétaires", "Ménage professionnel", "Linge premium", "Maintenance"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream-100 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance font-display text-3xl font-semibold text-forest-950 sm:text-4xl">
            Services
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="rounded-xl border border-forest-950/10 bg-white p-8 text-center shadow-sm sm:p-10"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10 text-gold-600">
                <service.icon size={26} strokeWidth={1.75} />
              </span>
              <p className="mt-5 font-display text-2xl text-gold-500">{service.number}.</p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-forest-950">
                {service.title}
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm text-forest-900/70">
                {service.items.map((item) => (
                  <li key={item}>
                    <span className="mr-1.5 inline-block h-1 w-1 -translate-y-0.5 rounded-full bg-gold-500 align-middle" />
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
