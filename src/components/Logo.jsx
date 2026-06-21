import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * "CodeQuiz" wordmark with a four-tile colour mark, matching the
 * reference design's header branding. Clicking it returns home.
 */
const Logo = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/")}
      className={`flex items-center gap-2 cursor-pointer select-none ${className}`}
      aria-label="Go to CodeQuiz home"
    >
      <svg viewBox="0 0 32 32" className="size-6" aria-hidden="true">
        <rect x="3" y="3" width="11" height="11" rx="3" fill="var(--color-cat-design)" />
        <rect x="18" y="3" width="11" height="11" rx="3" fill="var(--color-cat-motion)" />
        <rect x="3" y="18" width="11" height="11" rx="3" fill="var(--color-cat-ux)" />
        <rect x="18" y="18" width="11" height="11" rx="3" fill="var(--color-cat-seo)" />
      </svg>
      <span
        className="font-display font-bold text-lg"
        style={{ color: "var(--color-ink-900)" }}
      >
        CodeQuiz
      </span>
    </button>
  );
};

export default Logo;
