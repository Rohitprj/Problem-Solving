# Redux Auth (Vite + RTK Query)

Production-grade authentication flow using React, Redux Toolkit, RTK Query, and React Router.

## Quick start

```bash
npm install
npm run dev
```

## Tech stack

- React + Vite
- Redux Toolkit
- RTK Query
- React Router DOM
- Tailwind CSS
- JWT accessToken + refreshToken
- localStorage persistence

## Project structure

```
src/
├── app/
│   └── store.js
├── features/
│   └── auth/
│       ├── authSlice.js
│       ├── authApi.js
│       ├── authSelectors.js
│       ├── authThunks.js
│       └── authUtils.js
├── services/
│   └── baseApi.js
├── hooks/
│   └── reduxHooks.js
├── routes/
│   ├── ProtectedRoute.jsx
│   └── PublicRoute.jsx
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   └── Profile.jsx
└── components/
		├── Loader.jsx
		└── Navbar.jsx
```

## Module guide (what each file does)

### Store and persistence

- [src/app/store.js](src/app/store.js)
  - `configureStore` sets up the auth reducer and RTK Query reducer.
  - `serializableCheck: false` allows non-serializable payloads (tokens).
  - `preloadedState` hydrates auth state from localStorage.
  - `store.subscribe` persists auth state after changes.
  - `setupListeners` enables RTK Query re-fetch on focus/reconnect.

### Base API and refresh flow

- [src/services/baseApi.js](src/services/baseApi.js)
  - `fetchBaseQuery` sets `baseUrl` and appends `Authorization: Bearer <token>`.
  - `baseQueryWithReauth` handles global 401 responses.
  - `refreshPromise` ensures single-flight refresh requests.
  - If refresh succeeds, `setCredentials` updates tokens and retries the request.
  - If refresh fails, `logout` clears auth state.

### Auth slice and selectors

- [src/features/auth/authSlice.js](src/features/auth/authSlice.js)
  - `initialAuthState` defines the auth shape.
  - `setCredentials` stores tokens/user and sets `isAuthenticated`.
  - `setLoading` toggles session loading state.
  - `setError` and `clearError` manage API error text.
  - `logout` resets auth state to initial values.

- [src/features/auth/authSelectors.js](src/features/auth/authSelectors.js)
  - `selectIsAuthenticated` derives auth state from access + refresh tokens.
  - Other selectors expose user/tokens/loading/error.

### Auth utilities

- [src/features/auth/authUtils.js](src/features/auth/authUtils.js)
  - `loadAuthState` reads tokens/user from localStorage.
  - `saveAuthState` persists tokens/user after store updates.
  - `clearAuthState` deletes persisted auth.
  - `getApiErrorMessage` normalizes API and network errors.

### RTK Query endpoints

- [src/features/auth/authApi.js](src/features/auth/authApi.js)
  - `register`, `login`, `logout`, `refreshToken`, `currentUser`, `changePassword`.
  - `transformResponse` unwraps `{ data }` from the API response.
  - Exported hooks:
    - `useRegisterMutation`
    - `useLoginMutation`
    - `useLogoutMutation`
    - `useRefreshTokenMutation`
    - `useCurrentUserQuery`
    - `useChangePasswordMutation`

### Auth thunks

- [src/features/auth/authThunks.js](src/features/auth/authThunks.js)
  - `initializeAuth` runs on app start and fetches `/users/current-user` if
    tokens exist but the user is missing.
  - `logoutUser` calls `/users/logout`, clears Redux state, resets RTK Query
    cache, and clears localStorage.

### Redux hooks

- [src/hooks/reduxHooks.js](src/hooks/reduxHooks.js)
  - `useAppDispatch` and `useAppSelector` wrap React Redux hooks.

### Route guards

- [src/routes/ProtectedRoute.jsx](src/routes/ProtectedRoute.jsx)
  - Blocks access to protected pages when unauthenticated.
  - Shows a loader while the auth state is restoring.

- [src/routes/PublicRoute.jsx](src/routes/PublicRoute.jsx)
  - Redirects authenticated users away from login/register.

### Pages

- [src/pages/Login.jsx](src/pages/Login.jsx)
  - Controlled login form.
  - Uses `useLoginMutation` to call `/users/login`.
  - On success, `setCredentials` stores tokens and user.

- [src/pages/Register.jsx](src/pages/Register.jsx)
  - Controlled register form.
  - Uses `useRegisterMutation` to call `/users/register`.
  - Shows success message and directs user to login.

- [src/pages/Dashboard.jsx](src/pages/Dashboard.jsx)
  - Shows token preview and session status.

- [src/pages/Profile.jsx](src/pages/Profile.jsx)
  - Uses `useCurrentUserQuery` to keep profile data fresh.
  - Updates `auth.user` when new data arrives.

### Components

- [src/components/Navbar.jsx](src/components/Navbar.jsx)
  - Shows navigation links based on auth state.
  - Handles logout action and redirects to login.

- [src/components/Loader.jsx](src/components/Loader.jsx)
  - Reusable loader for API and session states.

### Application bootstrap

- [src/App.jsx](src/App.jsx)
  - Initializes auth on mount and defines routes.
  - Displays global loading and error banners.

- [src/main.jsx](src/main.jsx)
  - Wraps the app with Redux Provider and BrowserRouter.

## How the auth flow works

### App start

1. [src/app/store.js](src/app/store.js) hydrates tokens from localStorage.
2. [src/App.jsx](src/App.jsx) dispatches `initializeAuth`.
3. If tokens exist, `currentUser` is fetched and stored in Redux.

### Login

1. [src/pages/Login.jsx](src/pages/Login.jsx) calls `/users/login`.
2. Tokens + user are stored via `setCredentials`.
3. `store.subscribe` persists tokens to localStorage.

### Refresh token (automatic)

1. Any 401 response is intercepted in [src/services/baseApi.js](src/services/baseApi.js).
2. `/users/refresh-token` is called once using a single-flight promise.
3. New tokens are stored and the original request is retried.
4. If refresh fails, logout clears state and storage.

### Logout

1. [src/components/Navbar.jsx](src/components/Navbar.jsx) calls `logoutUser`.
2. `/users/logout` runs (errors ignored to ensure cleanup).
3. Redux state resets and localStorage is cleared.

## API base URL

The base URL is configured in [src/services/baseApi.js](src/services/baseApi.js):

```
https://api.freeapi.app/api/v1
```

## Security notes

- localStorage is convenient but vulnerable to XSS. For higher security,
  store refresh tokens in httpOnly cookies and rotate access tokens.
- Token previews are intentionally shortened in the UI.

## Troubleshooting

- If you use cookies with `credentials: include`, your API must return:
  - `Access-Control-Allow-Origin: http://localhost:5173`
  - `Access-Control-Allow-Credentials: true`
- Otherwise, use the header token approach already configured.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
