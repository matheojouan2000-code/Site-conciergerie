import type { RevenueEstimate } from "../types";
import { formatCurrency } from "./calculator";

export async function downloadRevenueReport(params: {
  firstName: string;
  cityLabel: string;
  propertyTypeLabel: string;
  bedrooms: number;
  estimate: RevenueEstimate;
}) {
  const { jsPDF } = await import("jspdf");
  const { firstName, cityLabel, propertyTypeLabel, bedrooms, estimate } = params;
  const doc = new jsPDF();

  doc.setFillColor(10, 18, 41);
  doc.rect(0, 0, 210, 40, "F");
  doc.setTextColor(232, 191, 95);
  doc.setFontSize(20);
  doc.text("Nomade Conciergerie", 15, 22);
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text("Rapport d'estimation de revenus locatifs", 15, 31);

  doc.setTextColor(10, 18, 41);
  doc.setFontSize(13);
  doc.text(`Bonjour ${firstName},`, 15, 55);
  doc.setFontSize(11);
  doc.text(
    `Voici l'estimation personnalisée pour votre bien (${propertyTypeLabel}, ${bedrooms} chambre(s)) à ${cityLabel}.`,
    15,
    64,
    { maxWidth: 180 }
  );

  const rows: [string, string][] = [
    ["Tarif nuitée de référence", formatCurrency(estimate.nightlyRate)],
    ["Taux d'occupation sans conciergerie", `${Math.round(estimate.occupancyWithoutConcierge * 100)}%`],
    ["Taux d'occupation avec conciergerie", `${Math.round(estimate.occupancyWithConcierge * 100)}%`],
    ["Revenu mensuel sans conciergerie", formatCurrency(estimate.monthlyWithoutConcierge)],
    ["Revenu mensuel avec Nomade Conciergerie", formatCurrency(estimate.monthlyWithConcierge)],
    ["Revenu annuel estimé avec Nomade Conciergerie", formatCurrency(estimate.yearlyWithConcierge)],
    ["Gain estimé", `+${estimate.uplift}%`],
  ];

  let y = 84;
  doc.setFontSize(12);
  rows.forEach(([label, value], i) => {
    doc.setFillColor(i % 2 === 0 ? 247 : 255, i % 2 === 0 ? 246 : 255, i % 2 === 0 ? 240 : 255);
    doc.rect(15, y - 6, 180, 10, "F");
    doc.setTextColor(60, 60, 70);
    doc.text(label, 18, y);
    doc.setTextColor(10, 18, 41);
    doc.setFont("helvetica", "bold");
    doc.text(value, 175, y, { align: "right" });
    doc.setFont("helvetica", "normal");
    y += 10;
  });

  doc.setFontSize(9);
  doc.setTextColor(120, 120, 130);
  doc.text(
    "Estimation indicative basée sur les données de marché de votre zone. Un audit personnalisé affinera ce chiffre.",
    15,
    y + 12,
    { maxWidth: 180 }
  );

  doc.save("estimation-revenus-nomade-conciergerie.pdf");
}
