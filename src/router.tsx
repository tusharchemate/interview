import { createBrowserRouter } from "react-router-dom";
import { create } from "zustand";
import Landing from "./pages/landing/Landing";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        element: <PrivateRoute />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            }],
    }
])