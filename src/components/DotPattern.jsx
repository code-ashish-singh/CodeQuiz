import React from "react";

/**
 * Decorative dot-grid, echoing the small corner accents in the reference
 * design's outer purple background. Purely ornamental (aria-hidden).
 */
const DotPattern = ({ className = "" }) => {
  const dotId = React.useId().replace(/:/g, "");

  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern id={dotId} width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.35)" />
        </pattern>
      </defs>
      <rect width="140" height="140" fill={`url(#${dotId})`} />
    </svg>
  );
};

export default DotPattern;
