import React from "react";
import DotPattern from "./DotPattern";

/**
 * Full-viewport brand-purple background shared by every screen. The white
 * content (a `Card`) fills essentially the whole window — only a thin sliver
 * of brand purple shows on larger screens — rather than floating as a small
 * centered card with a lot of empty space around it.
 */
const PageFrame = ({ children, className = "" }) => {
  return (
    <div
      className={`relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[var(--color-brand-500)] ${className}`}
    >
      <DotPattern className="pointer-events-none absolute left-4 top-4 hidden opacity-60 lg:block" />
      <DotPattern className="pointer-events-none absolute bottom-4 right-4 hidden opacity-60 lg:block" />

      <div className="relative z-10 flex w-full flex-1 flex-col">
        {children}
      </div>
    </div>
  );
};

export default PageFrame;
