import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-35 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute left-1/3 top-10 h-40 w-40 rounded-full border border-white/10 animate-spin" />
      <div className="pointer-events-none absolute right-24 bottom-24 h-48 w-48 rounded-full border border-white/10 animate-spin" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className=" mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 py-14">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="hidden flex-col justify-center lg:flex">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 shadow-lg shadow-fuchsia-500/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              Secure access
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white">
              Welcome back.
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-fuchsia-300 to-emerald-300">
                Login with confidence.
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/70">
              Fast, secure, and tailored to your workflow. Continue where you
              left off with a sleek, modern experience.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="h-20 w-20 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-cyan-500/10">
                <div className="h-full w-full rounded-xl bg-linear-to-br from-cyan-300/30 to-fuchsia-400/30 animate-pulse" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                  Trusted by
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  10k+ creators
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-cyan-400/40 via-fuchsia-500/40 to-emerald-400/40 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-black/50 backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                    Login
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">
                    Sign in
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <div className="h-6 w-6 rounded-full border-2 border-fuchsia-300/80 animate-spin" />
                </div>
              </div>

              <form className="mt-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/70" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition duration-300 focus:border-fuchsia-300/60 focus:ring-2 focus:ring-fuchsia-500/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/70" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition duration-300 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-500/40"
                  />
                </div>

                <div className="flex items-center justify-between text-sm text-white/60">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-white/20 bg-white/5 text-fuchsia-400 focus:ring-fuchsia-400/40"
                    />
                    Remember me
                  </label>
                  <button
                    className="text-sm text-white/70 transition hover:text-white"
                    type="button"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 px-4 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/30 transition duration-300 hover:scale-[1.02]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-white/40 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                  <span className="relative">Continue</span>
                </button>
              </form>

              <div className="mt-6 flex items-center gap-4 text-sm text-white/50">
                <div className="h-px flex-1 bg-white/10" />
                or continue with
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:text-white">
                  Sign in with GitHub
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:text-white">
                  Sign in with Google
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-white/60">
                New here?{" "}
                <button
                  className="text-white transition hover:text-cyan-200"
                  type="button"
                >
                  Create an account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
