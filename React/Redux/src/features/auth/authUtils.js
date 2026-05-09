const AUTH_STORAGE_KEY = "redux_auth";

// Note: localStorage is convenient but vulnerable to XSS. Prefer httpOnly cookies in production.
const hasStorage = () =>
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

export const loadAuthState = () => {
  if (!hasStorage()) return null;
  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);

    return {
      user: parsed.user ?? null,
      accessToken: parsed.accessToken ?? null,
      refreshToken: parsed.refreshToken ?? null,
      isAuthenticated: Boolean(parsed.accessToken && parsed.refreshToken),
    };
  } catch {
    return null;
  }
};

export const saveAuthState = (authState) => {
  if (!hasStorage()) return;
  const payload = {
    user: authState?.user ?? null,
    accessToken: authState?.accessToken ?? null,
    refreshToken: authState?.refreshToken ?? null,
  };

  if (!payload.accessToken || !payload.refreshToken) {
    clearAuthState();
    return;
  }

  try {
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore write errors (quota or private mode).
  }
};

export const clearAuthState = () => {
  if (!hasStorage()) return;
  try {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch {
    // Ignore removal errors.
  }
};

export const getApiErrorMessage = (error) => {
  if (!error) return "Something went wrong";
  if (error?.status === "FETCH_ERROR") {
    return "Network error. Please check your connection.";
  }
  if (error?.status === "PARSING_ERROR") {
    return "Unexpected response format.";
  }
  if (typeof error === "string") return error;
  if (error?.data?.message) return error.data.message;
  if (error?.error) return error.error;
  if (error?.message) return error.message;
  return "Something went wrong";
};
