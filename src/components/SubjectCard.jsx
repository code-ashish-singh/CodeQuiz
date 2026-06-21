import React from "react";
import { CheckIcon } from "./icons";

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
    <path
      d="M9 18 4 13l5-5M15 6l5 5-5 5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Colourful, selectable category card. Clicking toggles selection (the
 * caller drives "Start Quiz" availability), mirroring the highlighted card
 * + separate CTA pattern from the reference design.
 */
const SubjectCard = ({ subject, tagline, color, selected, onSelect }) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className="group relative flex h-44 w-full flex-col justify-between rounded-2xl p-4 text-left text-white cursor-pointer transition-all duration-200 focus:outline-none"
      style={{
        background: color,
        boxShadow: selected
          ? `0 0 0 3px white, 0 0 0 6px ${color}, 0 18px 30px -12px ${color}`
          : "0 10px 22px -10px rgba(26,19,64,0.35)",
        transform: selected ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {selected && (
        <span className="absolute right-3 top-3 flex size-5 items-center justify-center rounded-full bg-white" style={{ color }}>
          <CheckIcon className="size-3" />
        </span>
      )}

      <span className="flex size-9 items-center justify-center rounded-xl bg-green-600">
        <CodeIcon />
      </span>

      <span>
        <span className="block font-display text-sm font-semibold">{subject}</span>
        <span className="mt-1 block text-xs leading-snug text-white">{tagline}</span>
      </span>
    </button>
  );
};

export default SubjectCard;
