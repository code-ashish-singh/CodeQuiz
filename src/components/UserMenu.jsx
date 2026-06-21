import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon, LogoutIcon } from "./icons";

function getInitials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Avatar + name + chevron control in the dashboard header, expanding into a
 * small dropdown with a logout action — matches the "Pranav Kulkarni ⌄"
 * control in the reference design's top-right corner.
 */
const UserMenu = ({ name, onLogout }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 cursor-pointer rounded-full py-1 pl-1 pr-2 hover:bg-[var(--color-surface-panel)] transition-colors"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span
          className="flex size-8 items-center justify-center rounded-full text-xs font-semibold text-white font-display"
          style={{ background: "var(--color-brand-500)" }}
        >
          {getInitials(name)}
        </span>
        <span className="hidden sm:inline text-sm font-medium" style={{ color: "var(--color-ink-700)" }}>
          {name}
        </span>
        <ChevronDownIcon
          className={`size-4 transition-transform text-[var(--color-ink-300)] ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-44 overflow-hidden rounded-2xl border border-[var(--color-surface-border)] bg-white py-1 shadow-[var(--shadow-soft)]">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              navigate("/");
            }}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-[var(--color-surface-panel)] cursor-pointer"
            style={{ color: "var(--color-ink-700)" }}
          >
            My quizzes
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onLogout?.();
            }}
            className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-rose-500 hover:bg-rose-50 cursor-pointer"
          >
            <LogoutIcon className="size-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
