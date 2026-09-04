const STATS = [
  { value: "+20%", label: "Minimum de revenus supplémentaires" },
  { value: "83%", label: "Taux d'occupation moyen" },
  { value: "100%", label: "Clients satisfaits" },
];

export function StatsBand() {
  return (
    <section className="bg-gold-gradient py-14">
      <div className="mx-auto grid max-w-2xl grid-cols-3 gap-x-3 gap-y-10 px-5 text-center text-white sm:gap-x-6 lg:px-8">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-1 ${i > 0 ? "border-l border-white/25" : ""}`}
          >
            <p className="font-display text-3xl font-semibold sm:text-4xl">{stat.value}</p>
            <p className="mt-2 text-[10px] font-medium uppercase leading-snug tracking-wide text-white/85 sm:text-xs">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
