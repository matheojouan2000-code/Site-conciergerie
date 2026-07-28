import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Download, CheckCircle2, Home, MapPin, BedDouble } from "lucide-react";
import { CITIES, PROPERTY_TYPES } from "../../data/cities";
import { estimateRevenue, formatCurrency } from "../../lib/calculator";
import { validateEmail, validateFirstName, validatePhone } from "../../lib/validation";
import { downloadRevenueReport } from "../../lib/pdfReport";
import type { PropertyType } from "../../types";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

type FieldErrors = { firstName?: string | null; email?: string | null; phone?: string | null };

export function RevenueCalculator() {
  const [cityId, setCityId] = useState(CITIES[0].id);
  const [propertyType, setPropertyType] = useState<PropertyType>("appartement");
  const [bedrooms, setBedrooms] = useState(1);

  const [unlocked, setUnlocked] = useState(false);
  const [contact, setContact] = useState({ firstName: "", email: "", phone: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [generatingPdf, setGeneratingPdf] = useState(false);

  const estimate = useMemo(
    () => estimateRevenue({ cityId, bedrooms, propertyType }),
    [cityId, bedrooms, propertyType]
  );

  const cityLabel = CITIES.find((c) => c.id === cityId)?.label ?? "";
  const propertyTypeLabel = PROPERTY_TYPES.find((t) => t.id === propertyType)?.label ?? "";

  function handleFieldChange(field: keyof typeof contact, value: string) {
    setContact((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  }

  function handleBlur(field: keyof typeof contact) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, contact[field]) }));
  }

  function validateField(field: keyof typeof contact, value: string) {
    if (field === "firstName") return validateFirstName(value);
    if (field === "email") return validateEmail(value);
    return validatePhone(value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: FieldErrors = {
      firstName: validateFirstName(contact.firstName),
      email: validateEmail(contact.email),
      phone: validatePhone(contact.phone),
    };
    setErrors(nextErrors);
    setTouched({ firstName: true, email: true, phone: true });

    const isValid = !nextErrors.firstName && !nextErrors.email && !nextErrors.phone;
    if (isValid) setUnlocked(true);
  }

  return (
    <section id="calculateur" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
            Simulateur gratuit
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-navy-950 sm:text-4xl">
            Calculez le potentiel de revenus de votre bien
          </h2>
          <p className="mt-4 text-navy-900/60">
            Renseignez quelques informations pour obtenir une estimation en temps réel, basée sur
            les données de marché de votre zone.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Formulaire de paramètres */}
          <div className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-sm lg:col-span-2 lg:p-8">
            <div className="space-y-6">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-navy-900/80">
                  <MapPin size={16} className="text-gold-600" />
                  Ville / Quartier
                </label>
                <select
                  value={cityId}
                  onChange={(e) => setCityId(e.target.value)}
                  className="w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-navy-950 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/40"
                >
                  {CITIES.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-navy-900/80">
                  <Home size={16} className="text-gold-600" />
                  Type de bien
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PROPERTY_TYPES.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setPropertyType(type.id)}
                      className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                        propertyType === type.id
                          ? "border-gold-500 bg-gold-500/10 text-gold-700"
                          : "border-navy-900/15 text-navy-900/70 hover:border-navy-900/30"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 flex items-center justify-between text-sm font-medium text-navy-900/80">
                  <span className="flex items-center gap-2">
                    <BedDouble size={16} className="text-gold-600" />
                    Nombre de chambres
                  </span>
                  <span className="font-display font-semibold text-navy-950">{bedrooms}</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={5}
                  step={1}
                  value={bedrooms}
                  onChange={(e) => setBedrooms(Number(e.target.value))}
                  className="w-full accent-[#d1a13c]"
                />
                <div className="mt-1 flex justify-between text-xs text-navy-900/40">
                  <span>Studio</span>
                  <span>5+ ch.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Résultats */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-navy-gradient p-6 text-white shadow-navy sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
                Estimation en temps réel
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-white/50">Sans conciergerie</p>
                  <p className="mt-1 font-display text-xl font-bold text-white/70 sm:text-2xl">
                    {formatCurrency(estimate.monthlyWithoutConcierge)}
                  </p>
                  <p className="text-xs text-white/40">/mois</p>
                </div>
                <div className="rounded-2xl border border-gold-500/40 bg-gold-500/10 p-4">
                  <p className="text-xs text-gold-300">Avec Nomade Conciergerie</p>
                  <p className="mt-1 font-display text-xl font-bold text-gold-400 sm:text-2xl">
                    {formatCurrency(estimate.monthlyWithConcierge)}
                  </p>
                  <p className="text-xs text-gold-300/70">/mois</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!unlocked ? (
                  <motion.div
                    key="locked"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-6"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="pointer-events-none select-none blur-sm">
                        <div className="flex justify-between text-sm">
                          <span>Revenu annuel estimé</span>
                          <span className="font-semibold">{formatCurrency(estimate.yearlyWithConcierge)}</span>
                        </div>
                        <div className="mt-2 flex justify-between text-sm">
                          <span>Gain estimé vs gestion seule</span>
                          <span className="font-semibold">+{estimate.uplift}%</span>
                        </div>
                        <div className="mt-2 flex justify-between text-sm">
                          <span>Taux d'occupation optimisé</span>
                          <span className="font-semibold">
                            {Math.round(estimate.occupancyWithConcierge * 100)}%
                          </span>
                        </div>
                      </div>

                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy-950/70 p-4 text-center backdrop-blur-[1px]">
                        <Lock size={20} className="text-gold-400" />
                        <p className="text-sm font-medium text-white">
                          Débloquez le détail complet + votre rapport PDF
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-3 rounded-2xl bg-white p-5 text-navy-950">
                      <p className="text-sm font-semibold text-navy-900">
                        Recevez votre estimation détaillée gratuitement
                      </p>
                      <Input
                        label="Prénom"
                        name="firstName"
                        placeholder="Marie"
                        value={contact.firstName}
                        onChange={(e) => handleFieldChange("firstName", e.target.value)}
                        onBlur={() => handleBlur("firstName")}
                        error={touched.firstName ? errors.firstName : null}
                      />
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="marie@email.com"
                        value={contact.email}
                        onChange={(e) => handleFieldChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        error={touched.email ? errors.email : null}
                      />
                      <Input
                        label="Téléphone"
                        name="phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        value={contact.phone}
                        onChange={(e) => handleFieldChange("phone", e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        error={touched.phone ? errors.phone : null}
                      />
                      <Button type="submit" className="w-full">
                        Débloquer mon estimation détaillée
                      </Button>
                      <p className="text-center text-[11px] text-navy-900/40">
                        Vos données restent confidentielles et ne sont jamais revendues.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="unlocked"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 space-y-4"
                  >
                    <div className="flex items-center gap-2 rounded-xl bg-green-500/10 px-4 py-3 text-sm font-medium text-green-300">
                      <CheckCircle2 size={18} />
                      Merci {contact.firstName || ""} ! Voici votre estimation complète.
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm">
                      <Row label="Tarif nuitée de référence" value={formatCurrency(estimate.nightlyRate)} />
                      <Row
                        label="Taux d'occupation optimisé"
                        value={`${Math.round(estimate.occupancyWithConcierge * 100)}%`}
                      />
                      <Row label="Revenu annuel estimé" value={formatCurrency(estimate.yearlyWithConcierge)} />
                      <Row label="Gain estimé vs gestion seule" value={`+${estimate.uplift}%`} highlight />
                    </div>

                    <Button
                      className="w-full"
                      disabled={generatingPdf}
                      onClick={async () => {
                        setGeneratingPdf(true);
                        try {
                          await downloadRevenueReport({
                            firstName: contact.firstName,
                            cityLabel,
                            propertyTypeLabel,
                            bedrooms,
                            estimate,
                          });
                        } finally {
                          setGeneratingPdf(false);
                        }
                      }}
                    >
                      <Download size={18} />
                      {generatingPdf ? "Génération du PDF…" : "Télécharger mon rapport PDF"}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 py-2.5 last:border-0">
      <span className="text-white/60">{label}</span>
      <span className={`font-display font-semibold ${highlight ? "text-gold-400" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}
