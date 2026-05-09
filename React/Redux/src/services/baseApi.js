import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setCredentials } from "../features/auth/authSlice";

const BASE_URL = "https://api.freeapi.app/api/v1";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Accept", "application/json");
    return headers;
  },
});

let refreshPromise = null;

const isRefreshRequest = (args) => {
  const url = typeof args === "string" ? args : args?.url;
  return url?.includes("/users/refresh-token");
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    if (isRefreshRequest(args)) {
      api.dispatch(logout());
      return result;
    }

    if (!refreshPromise) {
      // Single-flight refresh prevents duplicate refresh calls and infinite loops.
      refreshPromise = (async () => {
        const refreshToken = api.getState()?.auth?.refreshToken;
        if (!refreshToken) {
          throw new Error("Missing refresh token");
        }

        const refreshResult = await rawBaseQuery(
          {
            url: "/users/refresh-token",
            method: "POST",
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
            body: { refreshToken },
          },
          api,
          extraOptions,
        );

        const data = refreshResult?.data?.data;
        if (data?.accessToken) {
          api.dispatch(
            setCredentials({
              accessToken: data.accessToken,
              refreshToken: data.refreshToken ?? refreshToken,
            }),
          );
          return data;
        }

        throw refreshResult?.error ?? new Error("Refresh failed");
      })().finally(() => {
        refreshPromise = null;
      });
    }

    try {
      await refreshPromise;
      result = await rawBaseQuery(args, api, extraOptions);
    } catch {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Auth"],
  endpoints: () => ({}),
});
