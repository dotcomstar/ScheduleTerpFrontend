import { Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import useAuthStore from "../auth/store";

const PrivateRoutes = () => {
  const user = useAuthStore((s) => s.user);

  if (!user) return <Navigate to="/login" />;
  return <Layout />;
};

export default PrivateRoutes;
