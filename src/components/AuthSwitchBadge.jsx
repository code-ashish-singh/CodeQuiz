import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

/**
 * Top-right prompt + pill button pair used on the auth screens, e.g.
 * "Already have an account?  [Login]" or "Create an account  [Sign Up]".
 */
const AuthSwitchBadge = ({ prompt, actionLabel, to }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-3">
      <span className="hidden text-xs sm:inline" style={{ color: "var(--color-ink-300)" }}>
        {prompt}
      </span>
      <Button variant="outline" size="sm" onClick={() => navigate(to)}>
        {actionLabel}
      </Button>
    </div>
  );
};

export default AuthSwitchBadge;
