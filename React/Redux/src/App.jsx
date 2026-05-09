import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Loader from "./components/Loader.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import PublicRoute from "./routes/PublicRoute.jsx";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks.js";
import { initializeAuth } from "./features/auth/authThunks.js";
import {
  selectAuthError,
  selectAuthLoading,
  selectIsAuthenticated,
} from "./features/auth/authSelectors.js";

function App() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectAuthLoading);
  const error = useAppSelector(selectAuthError);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      <Navbar />
      {loading && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/20 backdrop-blur-sm">
          <Loader label="Restoring session..." />
        </div>
      )}
      {error && (
        <div className="page-shell">
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {error}
          </div>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
          }
        />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
