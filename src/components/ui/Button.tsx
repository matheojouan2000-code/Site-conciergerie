import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 rounded-md font-semibold uppercase tracking-wide
          transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
          ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
