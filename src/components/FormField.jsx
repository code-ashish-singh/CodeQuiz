import React, { useId, useState } from "react";
import { EyeIcon, EyeOffIcon } from "./icons";

/**
 * Label-above-input field matching the reference design ("Enter Name",
 * "Enter Email", "Enter Password" style). Supports a show/hide toggle for
 * password fields.
 */
const FormField = ({ label, type = "text", id, className = "", ...rest }) => {
  const autoId = useId();
  const fieldId = id || autoId;
  const isPassword = type === "password";
  const [visible, setVisible] = useState(false);

  return (
    <div className={`w-full text-left ${className}`}>
      <label
        htmlFor={fieldId}
        className="mb-1.5 block text-xs font-medium uppercase tracking-wide"
        style={{ color: "var(--color-ink-300)" }}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={fieldId}
          type={isPassword && visible ? "text" : type}
          className="w-full rounded-xl border border-[var(--color-surface-border)] bg-white px-4 py-2.5 text-sm font-medium outline-none transition-colors focus:border-[var(--color-brand-400)] focus:ring-2 focus:ring-[var(--color-brand-100)]"
          style={{ color: "var(--color-ink-900)" }}
          {...rest}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[var(--color-ink-300)] hover:text-[var(--color-ink-500)]"
            aria-label={visible ? "Hide password" : "Show password"}
          >
            {visible ? <EyeOffIcon className="size-5" /> : <EyeIcon className="size-5" />}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
