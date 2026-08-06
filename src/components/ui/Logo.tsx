import { useId } from "react";

interface LogoProps {
  className?: string;
}

/**
 * Monogramme MJT Prestige, inline (pas une <img>) pour que le texte du
 * médaillon utilise la police Fraunces déjà chargée par la page plutôt
 * que de retomber sur une police système dans le contexte isolé d'un
 * fichier .svg externe.
 */
export function Logo({ className }: LogoProps) {
  const bgId = useId();
  const goldId = useId();

  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={bgId} cx="50%" cy="35%" r="80%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f5efe3" />
        </radialGradient>
        <linearGradient id={goldId} x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e9cf8f" />
          <stop offset="50%" stopColor="#c69a4c" />
          <stop offset="100%" stopColor="#9c7530" />
        </linearGradient>
      </defs>

      {/* disque */}
      <circle cx="100" cy="100" r="98" fill={`url(#${bgId})`} />

      {/* filets */}
      <circle cx="100" cy="100" r="93" fill="none" stroke={`url(#${goldId})`} strokeWidth="1.1" />
      <circle cx="100" cy="100" r="87.5" fill="none" stroke={`url(#${goldId})`} strokeWidth="0.5" opacity="0.5" />

      {/* étoile haute */}
      <path d="M100 34 L102.6 39.5 L108 42 L102.6 44.5 L100 50 L97.4 44.5 L92 42 L97.4 39.5 Z" fill={`url(#${goldId})`} />

      {/* monogramme */}
      <text
        x="100"
        y="103"
        textAnchor="middle"
        fontFamily="Fraunces, 'Playfair Display', Georgia, serif"
        fontSize="46"
        fontWeight="500"
        fill={`url(#${goldId})`}
        letterSpacing="3"
      >
        MJT
      </text>

      {/* filet fin */}
      <line x1="65" y1="124" x2="135" y2="124" stroke={`url(#${goldId})`} strokeWidth="0.9" />

      {/* légende */}
      <text
        x="100"
        y="149"
        textAnchor="middle"
        fontFamily="Inter, 'Plus Jakarta Sans', sans-serif"
        fontSize="15"
        fontWeight="600"
        letterSpacing="4"
        fill="#7a5b28"
      >
        PRESTIGE
      </text>

      {/* étoile basse */}
      <path d="M100 166 L102.6 171.5 L108 174 L102.6 176.5 L100 182 L97.4 176.5 L92 174 L97.4 171.5 Z" fill={`url(#${goldId})`} opacity="0.85" />
    </svg>
  );
}
