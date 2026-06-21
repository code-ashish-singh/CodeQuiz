import React from "react";
import Logo from "./Logo";
import AuthSwitchBadge from "./AuthSwitchBadge";
import CarouselDots from "./CarouselDots";
import QuizHeroIllustration from "../illustrations/QuizHeroIllustration";

/**
 * Split full-screen surface used by the Login and Sign Up screens: an
 * illustrated lavender panel on the left (hidden on small screens to keep
 * the form front-and-center on mobile) and the form content on the right.
 * Fills the available space inside `PageFrame` rather than floating as a
 * small fixed-width card.
 */
const AuthCard = ({ switchPrompt, switchLabel, switchTo, children }) => {
  return (
    <div className="relative flex w-full flex-1 overflow-hidden bg-white">
      <div className="grid w-full sm:grid-cols-2">
        {/* Illustration panel */}
        <div
          className="hidden flex-col items-center justify-center gap-6 px-10 py-12 sm:flex"
          style={{ background: "var(--color-surface-panel)" }}
        >
          <QuizHeroIllustration className="w-full max-w-[300px]" />
          <p className="text-center text-sm font-medium" style={{ color: "var(--color-ink-700)" }}>
            Take a Quiz be more creative
            <br />
            in your work
          </p>
          <CarouselDots active={1} />
        </div>

        {/* Form panel */}
        <div className="flex w-full flex-col justify-start gap-6 px-6 py-10 sm:justify-center sm:px-12 lg:px-20">
          <div className="flex items-center justify-between gap-3">
            <Logo />
            <AuthSwitchBadge prompt={switchPrompt} actionLabel={switchLabel} to={switchTo} />
          </div>
          <div className="mx-auto w-full max-w-sm sm:mx-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
