import { CITIES, PROPERTY_TYPES } from "../data/cities";
import type { RevenueEstimate, RevenueEstimateInput } from "../types";

const OCCUPANCY_WITH_CONCIERGE = 0.83;
const OCCUPANCY_WITHOUT_CONCIERGE = 0.55;
/** Uplift apporté par le pricing dynamique + optimisation d'annonce */
const PRICING_UPLIFT = 1.22;
const DAYS_PER_MONTH = 30;

export function estimateRevenue({ cityId, bedrooms, propertyType }: RevenueEstimateInput): RevenueEstimate {
  const city = CITIES.find((c) => c.id === cityId) ?? CITIES[CITIES.length - 1];
  const type = PROPERTY_TYPES.find((t) => t.id === propertyType) ?? PROPERTY_TYPES[1];

  const nightlyRate = city.baseNightlyRate * type.multiplier * (1 + bedrooms * 0.16);

  const monthlyWithConcierge = nightlyRate * PRICING_UPLIFT * OCCUPANCY_WITH_CONCIERGE * DAYS_PER_MONTH;
  const monthlyWithoutConcierge = nightlyRate * OCCUPANCY_WITHOUT_CONCIERGE * DAYS_PER_MONTH;

  const uplift = ((monthlyWithConcierge - monthlyWithoutConcierge) / monthlyWithoutConcierge) * 100;

  return {
    monthlyWithConcierge: Math.round(monthlyWithConcierge),
    monthlyWithoutConcierge: Math.round(monthlyWithoutConcierge),
    yearlyWithConcierge: Math.round(monthlyWithConcierge * 12),
    uplift: Math.round(uplift),
    occupancyWithConcierge: OCCUPANCY_WITH_CONCIERGE,
    occupancyWithoutConcierge: OCCUPANCY_WITHOUT_CONCIERGE,
    nightlyRate: Math.round(nightlyRate),
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}
