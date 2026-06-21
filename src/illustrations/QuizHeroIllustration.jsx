import React from "react";

/**
 * Flat-style illustration echoing the reference design's auth panel art:
 * a soft circular backdrop, an oversized question mark, and two simple
 * stylised figures (one holding a folder, one with a ponytail) flanking it.
 */
const QuizHeroIllustration = ({ className = "" }) => (
  <svg
    viewBox="0 0 320 280"
    className={className}
    role="img"
    aria-label="Two people standing beside a large question mark"
  >
    {/* backdrop circle */}
    <circle cx="160" cy="120" r="105" fill="#FFFFFF" />
    <circle cx="160" cy="120" r="105" fill="var(--color-brand-50)" opacity="0.6" />

    {/* faint orbit dots */}
    <circle cx="80" cy="50" r="2.5" fill="var(--color-brand-200)" />
    <circle cx="245" cy="70" r="2.5" fill="var(--color-brand-200)" />
    <circle cx="250" cy="170" r="2.5" fill="var(--color-brand-200)" />
    <circle cx="70" cy="190" r="2.5" fill="var(--color-brand-200)" />

    {/* giant question mark */}
    <text
      x="160"
      y="160"
      textAnchor="middle"
      fontFamily="Poppins, sans-serif"
      fontWeight="800"
      fontSize="150"
      fill="var(--color-brand-500)"
    >
      ?
    </text>

    {/* ground line */}
    <line x1="35" y1="244" x2="285" y2="244" stroke="var(--color-ink-900)" strokeWidth="2" />

    {/* figure 1: holding a folder */}
    <g transform="translate(70,150)">
      <circle cx="20" cy="10" r="13" fill="#2D2A4A" />
      <rect x="4" y="26" width="32" height="60" rx="10" fill="#5B5A78" />
      <rect x="-6" y="40" width="16" height="36" rx="6" fill="#2D2A4A" />
      <rect x="-14" y="34" width="22" height="16" rx="3" fill="var(--color-cat-motion)" />
      <rect x="4" y="84" width="12" height="34" fill="#2D2A4A" />
      <rect x="24" y="84" width="12" height="34" fill="#2D2A4A" />
    </g>

    {/* figure 2: with ponytail */}
    <g transform="translate(220,144)">
      <circle cx="18" cy="10" r="13" fill="#2D2A4A" />
      <path d="M30 4 Q42 8 34 24" stroke="#2D2A4A" strokeWidth="5" fill="none" strokeLinecap="round" />
      <rect x="2" y="26" width="32" height="62" rx="10" fill="#1A1340" />
      <rect x="-8" y="42" width="16" height="14" rx="4" fill="#1A1340" transform="rotate(-18 0 49)" />
      <rect x="2" y="88" width="12" height="32" fill="#1A1340" />
      <rect x="22" y="88" width="12" height="32" fill="#1A1340" />
    </g>
  </svg>
);

export default QuizHeroIllustration;
