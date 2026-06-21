import React from "react";

/**
 * Companion illustration for the result/"Congratulation" screen: the same
 * two flat-style figures from the auth hero, now flanking a dotted-square
 * accent instead of the question mark, plus a few confetti dots.
 */
const CelebrationIllustration = ({ className = "" }) => (
  <svg
    viewBox="0 0 320 200"
    className={className}
    role="img"
    aria-label="Two people celebrating a finished quiz"
  >
    {/* dotted square accent */}
    <rect
      x="95"
      y="10"
      width="130"
      height="130"
      rx="16"
      fill="none"
      stroke="var(--color-brand-200)"
      strokeWidth="2"
      strokeDasharray="6 7"
      transform="rotate(8 160 75)"
    />

    {/* confetti */}
    <circle cx="60" cy="30" r="4" fill="var(--color-cat-ux)" />
    <circle cx="270" cy="40" r="4" fill="var(--color-cat-motion)" />
    <circle cx="40" cy="100" r="3" fill="var(--color-cat-seo)" />
    <circle cx="285" cy="110" r="3" fill="var(--color-cat-design)" />
    <rect x="250" y="20" width="7" height="7" rx="2" fill="var(--color-cat-dev)" transform="rotate(20 253 23)" />
    <rect x="55" y="120" width="7" height="7" rx="2" fill="var(--color-brand-400)" transform="rotate(-15 58 123)" />

    {/* ground line */}
    <line x1="20" y1="178" x2="300" y2="178" stroke="var(--color-ink-900)" strokeWidth="2" />

    {/* figure 1 */}
    <g transform="translate(55,90)">
      <circle cx="20" cy="10" r="13" fill="#2D2A4A" />
      <rect x="4" y="26" width="32" height="58" rx="10" fill="#5B5A78" />
      <rect x="-6" y="40" width="16" height="34" rx="6" fill="#2D2A4A" />
      <rect x="-14" y="34" width="22" height="16" rx="3" fill="var(--color-cat-motion)" />
      <rect x="4" y="82" width="12" height="32" fill="#2D2A4A" />
      <rect x="24" y="82" width="12" height="32" fill="#2D2A4A" />
    </g>

    {/* figure 2 (arms raised) */}
    <g transform="translate(232,82)">
      <circle cx="18" cy="10" r="13" fill="#2D2A4A" />
      <path d="M30 4 Q44 6 36 22" stroke="#2D2A4A" strokeWidth="5" fill="none" strokeLinecap="round" />
      <rect x="2" y="26" width="32" height="60" rx="10" fill="#1A1340" />
      <rect x="-10" y="6" width="14" height="34" rx="6" fill="#1A1340" transform="rotate(-35 -3 23)" />
      <rect x="32" y="6" width="14" height="34" rx="6" fill="#1A1340" transform="rotate(35 39 23)" />
      <rect x="2" y="86" width="12" height="30" fill="#1A1340" />
      <rect x="22" y="86" width="12" height="30" fill="#1A1340" />
    </g>
  </svg>
);

export default CelebrationIllustration;
