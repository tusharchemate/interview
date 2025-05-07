import { createBrowserRouter, Navigate } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import ResourceList from "./pages/ResourceList/ResourceList";  
import ResourceDetail from "./pages/ResourceDetails/ResourceDetail"; 

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