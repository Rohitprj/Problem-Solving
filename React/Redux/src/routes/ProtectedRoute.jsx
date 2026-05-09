import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import {
  selectAuthLoading,
  selectIsAuthenticated,
} from "../features/auth/authSelectors";
import Loader from "../components/Loader";

// Route guard that blocks unauthenticated access to private screens.
function ProtectedRoute() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const loading = useAppSelector(selectAuthLoading);

  if (loading) {
    return (
      <div className="page-shell">
        <div className="flex items-center justify-center py-12">
          <Loader label="Checking session..." />
        </div>
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
