import React from "react";

/**
 * Purely decorative 3-dot carousel indicator under the auth illustration,
 * echoing the small dot row in the reference design.
 */
const CarouselDots = ({ active = 1, count = 3 }) => (
  <div className="flex items-center justify-center gap-1.5" aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        className="rounded-full transition-all"
        style={{
          width: i === active ? 18 : 6,
          height: 6,
          background: i === active ? "var(--color-brand-500)" : "var(--color-brand-200)",
        }}
      />
    ))}
  </div>
);

export default CarouselDots;
