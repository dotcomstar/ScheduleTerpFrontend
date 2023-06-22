import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import SchedulesPage from "./pages/SchedulesPage";
import PrivateRoutes from "./components/PrivateRoutes";
import UserProfilePage from "./pages/UserProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // Default component
      { path: "about", element: <AboutPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "schedules", element: <SchedulesPage /> },
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
]);

export default router;
