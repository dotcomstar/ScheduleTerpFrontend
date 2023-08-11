import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../auth/store";

const AuthRoutes = () => {
  const user = useAuthStore((s) => s.user);

  if (user) return <Navigate to="/profile" />;
  return <Outlet />;
};

export default AuthRoutes;
