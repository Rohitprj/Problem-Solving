import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import {
  selectAuthLoading,
  selectIsAuthenticated,
} from "../features/auth/authSelectors";
import Loader from "../components/Loader";

// Public routes redirect authenticated users to the dashboard.
function PublicRoute() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const loading = useAppSelector(selectAuthLoading);

  if (loading) {
    return (
      <div className="page-shell">
        <div className="flex items-center justify-center py-12">
          <Loader label="Preparing..." />
        </div>
      </div>
    );
  }

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

export default PublicRoute;
