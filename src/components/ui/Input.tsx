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
        <span className="mb-1.5 block text-sm font-medium text-navy-900/80">{label}</span>
        <input
          ref={ref}
          id={inputId}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-navy-950 placeholder:text-navy-900/35
            outline-none transition-colors focus:ring-2 focus:ring-gold-500/40
            ${error ? "border-red-400 focus:border-red-400" : "border-navy-900/15 focus:border-gold-500"}
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
