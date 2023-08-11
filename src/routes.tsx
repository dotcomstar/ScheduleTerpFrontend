import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import SchedulesPage from "./pages/SchedulesPage";
import PrivateRoutes from "./components/PrivateRoutes";
import UserProfilePage from "./pages/UserProfilePage";
import RegisterPage from "./pages/RegisterPage";
import AuthRoutes from "./components/AuthRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // Default component
      { path: "about", element: <AboutPage /> },
      { path: "schedules", element: <SchedulesPage /> },
      {
        element: <AuthRoutes />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "profile",
            element: <UserProfilePage />,
            // children: [{ path: ":username", element: <UserDetail /> }],
          },
        ],
      },
    ],
  },
]);

export default router;
