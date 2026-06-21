import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import UserMenu from "./UserMenu";
import useAuthUser from "../hooks/useAuthUser";

/**
 * Header used on the dashboard-style screens (category select, quiz,
 * result): logo on the left, user avatar menu (or login/sign up pills when
 * signed out) on the right.
 */
const DashboardHeader = () => {
  const navigate = useNavigate();
  const { user, isLoggedIn, logout } = useAuthUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex items-center justify-between px-6 py-5 sm:px-10 sm:py-6">
      <Logo />
      {isLoggedIn ? (
        <UserMenu name={user?.name || "Player"} onLogout={handleLogout} />
      ) : (
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="primary" size="sm" onClick={() => navigate("/signin")}>
            Sign Up
          </Button>
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;
