import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../auth/store";

const PrivateRoutes = () => {
  const user = useAuthStore((s) => s.user);

  if (!user) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoutes;
