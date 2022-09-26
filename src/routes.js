import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import User from "./pages/User";
import Login from "./pages/Login";
import NotFound from "./pages/Page404";
import Register from "./pages/Register";
import DashboardApp from "./pages/DashboardApp";
import Server from "./pages/Server";
import AddServerDetails from "./pages/AddServerDetails";

export default function Router() {
  return useRoutes([
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "app", element: <DashboardApp /> },
        { path: "servers", element: <User /> },
        { path: "addserver", element: <Server /> },
        { path: "addserverdetails", element: <AddServerDetails /> },
      ],
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "/", element: <Navigate to="/dashboard/app" /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
