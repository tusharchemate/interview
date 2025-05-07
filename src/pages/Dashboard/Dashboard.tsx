import { Link, useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/app.store";
import './Dashboard.scss'; // Import the SCSS file

const Dashboard = () => {
    const { isAuthenticated, username, logout } = useAppStore((state) => ({
        isAuthenticated: state.isAuthenticated,
        username: state.username,
        logout: state.logout,
    }));
    
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="dashboard">
            <div className="logout-button" onClick={handleLogout}>
                🔒
            </div>
            <h1>Dashboard</h1>
            {isAuthenticated ? (
                <>
                    <p>Welcome, {username}!</p>
                    <div className="welcome-message">
                        <Link to="/resources" className="link">View All Pokemon</Link>
                    </div>
                </>
            ) : (
                <p>Please log in to view your dashboard.</p>
            )}
        </div>
    );
};

export default Dashboard;
