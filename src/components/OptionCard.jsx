import React from "react";

/**
 * Single answer option in the 2x2 grid on the quiz screen — a bordered,
 * rounded row with a radio dot, matching the reference design's option
 * styling (indigo border + filled dot when selected).
 */
const OptionCard = ({ label, selected, onSelect }) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors cursor-pointer
        ${selected ? "border-[var(--color-brand-500)] bg-[var(--color-brand-50)]" : "border-[var(--color-surface-border)] bg-white hover:border-[var(--color-brand-200)]"}`}
    >
      <span
        className="flex size-4 shrink-0 items-center justify-center rounded-full border-2"
        style={{
          borderColor: selected ? "var(--color-brand-500)" : "var(--color-ink-200)",
        }}
      >
        {selected && <span className="size-2 rounded-full" style={{ background: "var(--color-brand-500)" }} />}
      </span>
      <span style={{ color: "var(--color-ink-700)" }}>{label}</span>
    </button>
  );
};

export default OptionCard;
