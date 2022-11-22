import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RequireAuth = () => {
  const { user } = useAuth();
  const location = useLocation();

  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/login", state: { from: location } }} replace />
  );
};

export default RequireAuth;
