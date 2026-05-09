import { createSlice } from "@reduxjs/toolkit";

export const initialAuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload || {};
      const nextAccessToken = accessToken ?? state.accessToken;
      const nextRefreshToken = refreshToken ?? state.refreshToken;

      state.user = user ?? state.user;
      state.accessToken = nextAccessToken ?? null;
      state.refreshToken = nextRefreshToken ?? null;
      state.isAuthenticated = Boolean(nextAccessToken && nextRefreshToken);
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = Boolean(action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload ?? "Something went wrong";
    },
    clearError: (state) => {
      state.error = null;
    },
    logout: () => ({ ...initialAuthState }),
  },
});

export const { setCredentials, logout, clearError, setLoading, setError } =
  authSlice.actions;

export default authSlice.reducer;
