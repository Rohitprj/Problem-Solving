import { authApi } from "./authApi";
import {
  clearError,
  logout,
  setCredentials,
  setError,
  setLoading,
} from "./authSlice";
import { clearAuthState, getApiErrorMessage } from "./authUtils";

export const initializeAuth = () => async (dispatch, getState) => {
  const { accessToken, refreshToken, user } = getState().auth;
  if (!accessToken || !refreshToken || user) {
    return;
  }

  dispatch(setLoading(true));
  dispatch(clearError());

  const query = dispatch(authApi.endpoints.currentUser.initiate());
  try {
    const data = await query.unwrap();
    dispatch(setCredentials({ user: data }));
  } catch (error) {
    dispatch(setError(getApiErrorMessage(error)));
  } finally {
    query.unsubscribe();
    dispatch(setLoading(false));
  }
};

export const logoutUser = () => async (dispatch) => {
  const mutation = dispatch(authApi.endpoints.logout.initiate());
  try {
    await mutation.unwrap();
  } catch {
    // Ignore network errors on logout and clear local state anyway.
  } finally {
    if (typeof mutation?.unsubscribe === "function") {
      mutation.unsubscribe();
    }
    if (typeof mutation?.reset === "function") {
      mutation.reset();
    }
  }

  dispatch(logout());
  dispatch(authApi.util.resetApiState());
  clearAuthState();
};
