import { useCallback, useEffect, useState } from "react";
import { getStoredUser, logoutUser } from "../utils/authStorage";

/**
 * Reactive view of the locally stored user/session, shared by the header,
 * Home, and TestPage so each doesn't re-implement its own localStorage
 * reads. Updates automatically when the user logs in/out in this tab.
 */
export default function useAuthUser() {
  const [user, setUser] = useState(getStoredUser);

  const refresh = useCallback(() => {
    setUser(getStoredUser());
  }, []);

  useEffect(() => {
    window.addEventListener("codequiz:user-changed", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("codequiz:user-changed", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [refresh]);

  const logout = useCallback(() => {
    logoutUser();
    refresh();
  }, [refresh]);

  return {
    user,
    isLoggedIn: Boolean(user && user.islogin),
    refresh,
    logout,
  };
}
