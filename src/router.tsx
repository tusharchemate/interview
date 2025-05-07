import { createBrowserRouter, Navigate } from "react-router-dom";
import { Landing, Login, Dashboard, ResourceList, ResourceDetail } from "./pages";
import PrivateRoute from "./components/PrivateRoute";

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
            },
            {
                path: "/resources",
                element: <ResourceList />,
            },
            {
                path: "/resources/:id",
                element: <ResourceDetail />,
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to="/login" />,
    }
]);