import { useEffect } from "react";
import { useCurrentUserQuery } from "../features/auth/authApi";
import { setCredentials } from "../features/auth/authSlice";
import { getApiErrorMessage } from "../features/auth/authUtils";
import {
  selectIsAuthenticated,
  selectUser,
} from "../features/auth/authSelectors";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import Loader from "../components/Loader";

function Profile() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const storedUser = useAppSelector(selectUser);
  const { data, isFetching, error } = useCurrentUserQuery(undefined, {
    skip: !isAuthenticated,
  });

  useEffect(() => {
    if (data) {
      dispatch(setCredentials({ user: data }));
    }
  }, [data, dispatch]);

  const user = data || storedUser;

  return (
    <main className="page-shell page-enter">
      <div className="glass-card grid gap-6 p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Profile
            </p>
            <h1 className="font-display text-3xl text-slate-900">
              Account details
            </h1>
          </div>
          {isFetching && <Loader label="Refreshing..." />}
        </div>

        {error && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
            {getApiErrorMessage(error)}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Username
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {user?.username || "Unknown"}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Email
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {user?.email || "Unknown"}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Role
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {user?.role || "USER"}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Email verified
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {user?.isEmailVerified ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
