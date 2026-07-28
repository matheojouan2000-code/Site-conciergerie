export type PropertyType = "studio" | "appartement" | "maison" | "loft";

export interface City {
  id: string;
  label: string;
  /** Tarif nuitée de référence pour un bien 1 chambre, en euros */
  baseNightlyRate: number;
}

export interface RevenueEstimateInput {
  cityId: string;
  bedrooms: number;
  propertyType: PropertyType;
}

export interface RevenueEstimate {
  monthlyWithConcierge: number;
  monthlyWithoutConcierge: number;
  yearlyWithConcierge: number;
  uplift: number;
  occupancyWithConcierge: number;
  occupancyWithoutConcierge: number;
  nightlyRate: number;
}

export interface LeadContact {
  firstName: string;
  email: string;
  phone: string;
}
