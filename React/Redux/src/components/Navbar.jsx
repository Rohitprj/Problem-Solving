import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  selectIsAuthenticated,
  selectUser,
} from "../features/auth/authSelectors";
import { logoutUser } from "../features/auth/authThunks";
import { useState } from "react";

const navLinkClass = ({ isActive }) =>
  `rounded-full px-3 py-1 text-sm font-medium transition ${
    isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
  }`;

function Navbar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await dispatch(logoutUser());
    setIsLoggingOut(false);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl text-slate-900">Redux</span>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-700">
            Auth
          </span>
        </Link>
        <nav className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <NavLink to="/dashboard" className={navLinkClass}>
                Dashboard
              </NavLink>
              <NavLink to="/profile" className={navLinkClass}>
                Profile
              </NavLink>
              <span className="hidden text-sm text-slate-500 md:inline">
                {user?.username ? `Hi, ${user.username}` : "Signed in"}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoggingOut ? "Logging out..." : "Log out"}
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navLinkClass}>
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `rounded-full border px-3 py-1 text-sm font-semibold transition ${
                    isActive
                      ? "border-emerald-700 bg-emerald-700 text-white"
                      : "border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white"
                  }`
                }
              >
                Register
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
