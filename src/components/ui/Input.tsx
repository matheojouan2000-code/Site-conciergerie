import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <label htmlFor={inputId} className="block text-left">
        <span className="mb-1.5 block text-sm font-medium text-charcoal-950/80">{label}</span>
        <input
          ref={ref}
          id={inputId}
          className={`w-full rounded-md border bg-white px-4 py-3 text-charcoal-950 placeholder:text-charcoal-950/35
            outline-none transition-colors focus:ring-2 focus:ring-terracotta-500/30
            ${error ? "border-red-400 focus:border-red-400" : "border-charcoal-950/15 focus:border-terracotta-500"}
            ${className}`}
          aria-invalid={!!error}
          {...props}
        />
        {error && <span className="mt-1 block text-xs font-medium text-red-500">{error}</span>}
      </label>
    );
  }
);

Input.displayName = "Input";
