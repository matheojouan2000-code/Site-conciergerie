const STATS = [
  { value: "+20%", label: "De revenus supplémentaires" },
  { value: "83%", label: "Taux d'occupation moyen" },
  { value: "4.9/5", label: "Note moyenne" },
];

export function StatsBand() {
  return (
    <section className="bg-terracotta-gradient py-14">
      <div className="mx-auto grid max-w-2xl grid-cols-3 gap-y-10 px-5 text-center text-white lg:px-8">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-2 ${i > 0 ? "border-l border-white/25" : ""}`}
          >
            <p className="font-display text-4xl font-semibold">{stat.value}</p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-white/85">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
