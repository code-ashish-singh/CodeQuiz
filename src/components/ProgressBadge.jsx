import React from "react";

/** Big "1 / 5" style progress indicator on the quiz screen. */
const ProgressBadge = ({ current, total }) => (
  <p className="font-display text-3xl font-bold" style={{ color: "var(--color-brand-500)" }}>
    {current} / {total}
  </p>
);

export default ProgressBadge;
