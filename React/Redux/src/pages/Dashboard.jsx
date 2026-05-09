import { useAppSelector } from "../hooks/reduxHooks";
import {
  selectAccessToken,
  selectAuthLoading,
  selectUser,
} from "../features/auth/authSelectors";

function Dashboard() {
  const user = useAppSelector(selectUser);
  const accessToken = useAppSelector(selectAccessToken);
  const loading = useAppSelector(selectAuthLoading);

  const tokenPreview = accessToken
    ? `${accessToken.slice(0, 28)}...`
    : "Not available";

  return (
    <main className="page-shell page-enter">
      <div className="glass-card grid gap-6 p-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Dashboard
          </p>
          <h1 className="font-display text-3xl text-slate-900">
            Welcome back{user?.username ? `, ${user.username}` : ""}
          </h1>
          <p className="text-sm text-slate-600">
            Track your session status, tokens, and profile details in one view.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Session status
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {loading ? "Syncing..." : "Authenticated"}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Tokens are persisted in local storage and refreshed automatically.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Access token preview
            </p>
            <p className="mt-2 break-all text-sm font-semibold text-slate-900">
              {tokenPreview}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Never expose full tokens in production UIs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
