import React from "react";

/**
 * The white content surface every screen sits in. Fills the remaining space
 * inside `PageFrame` (full-bleed on mobile, gently rounded on larger
 * screens) instead of floating as a small fixed-size card.
 */
const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`flex w-full flex-1 flex-col bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
