import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../features/auth/authApi";
import { getApiErrorMessage } from "../features/auth/authUtils";

function Register() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [register, { isLoading }] = useRegisterMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (formError) {
      setFormError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");
    setSuccessMessage("");

    try {
      await register({
        username: formState.username.trim(),
        email: formState.email.trim(),
        password: formState.password,
        role: formState.role,
      }).unwrap();

      setSuccessMessage("Account created. Please sign in to continue.");
    } catch (err) {
      setFormError(getApiErrorMessage(err));
    }
  };

  return (
    <main className="page-shell page-enter">
      <section className="glass-card grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Create account
          </p>
          <h1 className="font-display text-3xl text-slate-900 md:text-4xl">
            Build your secure auth workspace
          </h1>
          <p className="text-sm text-slate-600">
            Register once and manage access tokens, refresh tokens, and user
            profiles from a single dashboard.
          </p>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              JWT access and refresh tokens stored persistently.
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              Auto refresh flow with retry and logout fallback.
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              Separate public and protected route gates.
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
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="rohit@gmail.com"
              autoComplete="email"
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
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formState.password}
                onChange={handleChange}
                placeholder="******"
                autoComplete="new-password"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 pr-11 text-sm text-slate-900 shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-500 transition hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                {showPassword ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M3 3l18 18" />
                    <path d="M10.7 10.7a3 3 0 0 0 4.2 4.2" />
                    <path d="M9.9 4.2A10.6 10.6 0 0 1 12 4c6 0 10 8 10 8a17.8 17.8 0 0 1-4.3 5.2" />
                    <path d="M6.2 6.2A17.8 17.8 0 0 0 2 12s4 8 10 8a10.6 10.6 0 0 0 4.1-.8" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="grid gap-2">
            <label
              className="text-sm font-semibold text-slate-700"
              htmlFor="role"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formState.role}
              onChange={handleChange}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
          {formError && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
              {formError}
            </div>
          )}
          {successMessage && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
              {successMessage}
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Creating account..." : "Create account"}
          </button>
          <p className="text-sm text-slate-600">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-emerald-700">
              Sign in
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Register;
