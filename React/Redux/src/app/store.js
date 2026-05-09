import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer, { initialAuthState } from "../features/auth/authSlice";
import { baseApi } from "../services/baseApi";
import { loadAuthState, saveAuthState } from "../features/auth/authUtils";

const persistedAuth = loadAuthState();
const preloadedState = persistedAuth
  ? { auth: { ...initialAuthState, ...persistedAuth } }
  : undefined;

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware,
    ),
  preloadedState,
});

let currentAuth = store.getState().auth;
store.subscribe(() => {
  // Persist auth credentials so sessions survive reloads.
  const nextAuth = store.getState().auth;
  if (nextAuth !== currentAuth) {
    saveAuthState(nextAuth);
    currentAuth = nextAuth;
  }
});

setupListeners(store.dispatch);
