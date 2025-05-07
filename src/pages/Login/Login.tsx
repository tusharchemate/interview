import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/app.store";
import { Card } from "@mantine/core";
import { useState } from "react";
import './Login.scss';

const Login = () => {
    const login = useAppStore((state) => state.login);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    const handleLogin = () => {
        const fakeToken = "fakeToken123";
        login(fakeToken, username);
        navigate("/dashboard");
    };

    return (
        <div className="login-container">
            <Card className="login-card">
                <div className="login-icon">🔑</div>
                <h1 className="login-title">Welcome Back!</h1>
                <input 
                    type="text"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                />
                <button 
                    onClick={handleLogin} 
                    className="login-button"
                >
                    Login
                </button>
            </Card>
        </div>
    );
};

export default Login;
