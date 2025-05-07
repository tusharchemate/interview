import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/app.store";

const Dashboard = () => {
    const logout  = useAppStore((state) => state.logout);
    const navigate =useNavigate();  // Assuming you have a navigate function in your store
    const handleLogout = () => {
        logout();  // Clear the token from the store
        navigate('/login');  // Navigate to the login page
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
export default Dashboard;