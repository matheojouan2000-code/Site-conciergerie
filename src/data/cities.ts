import type { City, PropertyType } from "../types";

export const CITIES: City[] = [
  { id: "paris", label: "Paris", baseNightlyRate: 110 },
  { id: "nice", label: "Nice / Côte d'Azur", baseNightlyRate: 95 },
  { id: "biarritz", label: "Biarritz", baseNightlyRate: 100 },
  { id: "annecy", label: "Annecy", baseNightlyRate: 90 },
  { id: "bordeaux", label: "Bordeaux", baseNightlyRate: 75 },
  { id: "lyon", label: "Lyon", baseNightlyRate: 70 },
  { id: "marseille", label: "Marseille", baseNightlyRate: 72 },
  { id: "autre", label: "Autre ville", baseNightlyRate: 60 },
];

export const PROPERTY_TYPES: { id: PropertyType; label: string; multiplier: number }[] = [
  { id: "studio", label: "Studio", multiplier: 0.85 },
  { id: "appartement", label: "Appartement", multiplier: 1 },
  { id: "loft", label: "Loft", multiplier: 1.1 },
  { id: "maison", label: "Maison", multiplier: 1.2 },
];
