const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Numéros français (mobile/fixe), avec ou sans indicatif, espaces/points/tirets tolérés */
const PHONE_RE = /^(?:\+33|0)[1-9](?:[\s.-]?\d{2}){4}$/;

export function validateFirstName(value: string): string | null {
  if (value.trim().length < 2) return "Prénom trop court";
  return null;
}

export function validateEmail(value: string): string | null {
  if (!EMAIL_RE.test(value.trim())) return "Email invalide";
  return null;
}

export function validatePhone(value: string): string | null {
  if (!PHONE_RE.test(value.trim())) return "Numéro invalide (ex: 06 12 34 56 78)";
  return null;
}
