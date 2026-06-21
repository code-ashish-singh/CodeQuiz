const USER_KEY = "user";

/** Safely read the stored user object (or null) from localStorage. */
export function getStoredUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  // Let other components (e.g. the header) in the same tab know.
  window.dispatchEvent(new Event("codequiz:user-changed"));
}

/** Create a new account and persist it (mirrors original sign-up flow). */
export function registerUser({ name, email, password }) {
  const user = { name, email, password, islogin: false };
  saveUser(user);
  return user;
}

/** Validate credentials against the stored account and mark as logged in. */
export function loginUser({ email, password }) {
  const stored = getStoredUser();
  if (!stored || stored.email !== email || stored.password !== password) {
    throw new Error("That email or password doesn't match our records.");
  }
  const updated = { ...stored, islogin: true };
  saveUser(updated);
  return updated;
}

/** Flip the logged-in flag off, keeping the account itself intact. */
export function logoutUser() {
  const stored = getStoredUser();
  if (stored) saveUser({ ...stored, islogin: false });
}

export function isLoggedIn() {
  const stored = getStoredUser();
  return Boolean(stored && stored.islogin);
}

export { USER_KEY };
