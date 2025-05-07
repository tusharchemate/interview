import { Outlet } from "react-router-dom";
import { useAppStore } from "../store/app.store"

const PrivateRoute =()=> {
    const  isAuthenticated = useAppStore((state) => state.isAuthenticated);
    return isAuthenticated ? <Outlet /> : <h1>Unauthorized</h1>
}

export default PrivateRoute;