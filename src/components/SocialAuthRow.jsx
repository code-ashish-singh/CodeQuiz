import React from "react";
import { toast } from "react-toastify";
import { FacebookIcon, GoogleIcon, LinkedInIcon } from "./icons";

const PROVIDERS = [
  { key: "facebook", label: "Facebook", icon: <FacebookIcon className="size-4" /> },
  { key: "linkedin", label: "LinkedIn", icon: <LinkedInIcon className="size-4" /> },
  { key: "google", label: "Google", icon: <GoogleIcon className="size-4" /> },
];

const SocialButton = ({ label, icon, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex size-8 items-center justify-center rounded-full border border-[var(--color-surface-border)] bg-white cursor-pointer hover:border-[var(--color-brand-300)] transition-colors"
    aria-label={`Continue with ${label}`}
  >
    {icon}
  </button>
);

/**
 * Row of circular social-auth icon buttons. There's no real OAuth backend
 * wired up, so clicking surfaces a friendly toast rather than silently
 * doing nothing or pretending to sign the person in.
 */
const SocialAuthRow = ({ label = "Create account with" }) => {
  return (
    <div className="flex items-center justify-center gap-3 text-xs" style={{ color: "var(--color-ink-300)" }}>
      <span>{label}</span>
      <div className="flex items-center gap-2">
        {PROVIDERS.map((provider) => (
          <SocialButton
            key={provider.key}
            label={provider.label}
            icon={provider.icon}
            onClick={() => toast.info(`${provider.label} sign-in is coming soon.`)}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialAuthRow;
