import React from "react";

const VARIANTS = {
  primary:
    "bg-[#626BFF] text-white hover:bg-[#4f57e8] shadow-[0_10px_28px_-6px_rgba(98,107,255,0.7)] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none",
  outline:
    "bg-white text-[var(--color-brand-600)] border border-[var(--color-brand-300)] hover:bg-[var(--color-brand-50)] disabled:opacity-50 disabled:cursor-not-allowed",
  ghost:
    "bg-transparent text-[var(--color-ink-500)] hover:bg-[var(--color-surface-panel)] disabled:opacity-50 disabled:cursor-not-allowed",
  danger:
    "bg-white text-rose-500 border border-rose-200 hover:bg-rose-50",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-7 py-2.5 text-sm",
  lg: "px-10 py-3 text-base",
};

/**
 * Pill-shaped action button matching the reference design's rounded,
 * soft-shadow CTA style (e.g. "Sign Up", "Start Quiz", "Next Question").
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`font-display font-semibold rounded-full transition-colors duration-150 cursor-pointer
        ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
