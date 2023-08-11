import { Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import useAuthStore from "../auth/store";

const AuthRoutes = () => {
  const user = useAuthStore((s) => s.user);

  if (user) return <Navigate to="/profile" />;
  return <Layout />;
};

export default AuthRoutes;
