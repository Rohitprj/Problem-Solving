import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/auth/authApi";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  clearError,
  setCredentials,
  setError,
} from "../features/auth/authSlice";
import { getApiErrorMessage } from "../features/auth/authUtils";
import { selectAuthError } from "../features/auth/authSelectors";

function Login() {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useAppSelector(selectAuthError);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (error) {
      dispatch(clearError());
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(clearError());

    try {
      const data = await login({
        username: formState.username.trim(),
        password: formState.password,
      }).unwrap();
      dispatch(setCredentials(data));
      navigate("/dashboard");
    } catch (err) {
      dispatch(setError(getApiErrorMessage(err)));
    }
  };

  return (
    <main className="page-shell page-enter">
      <section className="glass-card grid gap-8 p-8 md:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Secure access
          </p>
          <h1 className="font-display text-3xl text-slate-900 md:text-4xl">
            Welcome back to your workspace
          </h1>
          <p className="text-sm text-slate-600">
            Sign in to continue managing your profile, sessions, and token
            lifecycle in one place.
          </p>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              Refresh token rotation handled automatically.
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              Session persistence stored locally for fast reloads.
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              RTK Query caching keeps profile data in sync.
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label
              className="text-sm font-semibold text-slate-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formState.username}
              onChange={handleChange}
              placeholder="rohit"
              autoComplete="username"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              required
            />
          </div>
          <div className="grid gap-2">
            <label
              className="text-sm font-semibold text-slate-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
              placeholder="******"
              autoComplete="current-password"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              required
            />
          </div>
          {error && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
          <p className="text-sm text-slate-600">
            New here?{" "}
            <Link to="/register" className="font-semibold text-emerald-700">
              Create an account
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Login;
