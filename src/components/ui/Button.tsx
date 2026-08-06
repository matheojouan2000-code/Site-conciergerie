import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: undefined;
}

interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  href: string;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-gold-gradient text-white shadow-gold hover:brightness-105 hover:shadow-lg active:brightness-95",
  secondary:
    "bg-white text-forest-950 border border-forest-950/15 hover:border-forest-950/30 hover:bg-cream-100",
  ghost: "bg-transparent text-white hover:bg-white/10",
};

const SIZE_CLASSES: Record<Size, string> = {
  md: "px-5 py-2.5 text-xs",
  lg: "px-7 py-4 text-sm",
};

const BASE_CLASSES = `inline-flex items-center justify-center gap-2 rounded-md font-semibold uppercase tracking-wide
  transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`;

// Si un `href` est fourni, on rend un vrai <a> (navigation native, jamais
// bloquée par un bloqueur de popup) plutôt qu'un <button onClick={window.open}>.
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | AnchorButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, href, ...props }, ref) => {
    const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
