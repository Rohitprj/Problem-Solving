import { baseApi } from "../../services/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (payload) => ({
        url: "/users/register",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response?.data ?? response,
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: "/users/login",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response?.data ?? response,
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    refreshToken: builder.mutation({
      query: (payload) => ({
        url: "/users/refresh-token",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response?.data ?? response,
    }),
    currentUser: builder.query({
      query: () => ({
        url: "/users/current-user",
        method: "GET",
      }),
      transformResponse: (response) => response?.data ?? response,
      // RTK Query caches per endpoint + args; the tag lets us invalidate on logout.
      providesTags: ["User"],
    }),
    changePassword: builder.mutation({
      query: (payload) => ({
        url: "/users/change-password",
        method: "POST",
        body: payload,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useCurrentUserQuery,
  useChangePasswordMutation,
} = authApi;
