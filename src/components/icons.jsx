import React from "react";

/**
 * Lightweight, dependency-free icon set used across the app.
 * Every icon accepts a `className` so callers can control size/color
 * via Tailwind (icons use currentColor / stroke inheritance).
 */

export const EyeIcon = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const EyeOffIcon = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M3 3l18 18M10.6 10.7a3 3 0 0 0 4.24 4.24M7.4 7.5C4.8 9 3 12 3 12s3.6 7 10 7c1.7 0 3.18-.37 4.43-.93M16.7 6.4C15.4 5.8 13.8 5 12 5c-.6 0-1.18.05-1.74.14"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronDownIcon = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckIcon = ({ className = "size-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M5 13l4 4L19 7"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LogoutIcon = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FacebookIcon = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#1877F2"
      d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07Z"
    />
  </svg>
);

export const LinkedInIcon = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#0A66C2"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"
    />
  </svg>
);

export const GoogleIcon = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.5 12.27c0-.85-.07-1.47-.22-2.12H12v3.85h6.5c-.13 1.06-.84 2.66-2.42 3.74l-.02.15 3.52 2.7.24.02c2.24-2.04 3.68-5.05 3.68-8.34Z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.05 7.93-2.86l-3.78-2.87c-1.01.69-2.37 1.18-4.15 1.18-3.17 0-5.86-2.04-6.82-4.87l-.14.01-3.66 2.78-.05.13C3.3 21.3 7.31 24 12 24Z"
    />
    <path
      fill="#FBBC05"
      d="M5.18 14.58A7.4 7.4 0 0 1 4.78 12c0-.9.16-1.77.39-2.58L5.16 9.3 1.45 6.48l-.12.06A11.96 11.96 0 0 0 0 12c0 1.93.47 3.76 1.33 5.46l3.85-2.88Z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c2.25 0 3.77.97 4.64 1.78l3.39-3.3C17.94 1.2 15.24 0 12 0 7.31 0 3.3 2.7 1.33 6.54l3.85 2.88C6.14 6.6 8.83 4.75 12 4.75Z"
    />
  </svg>
);
