import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/app.store"

const Login = () => {
    const login = useAppStore((state) => state.login);
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulate a login action
        const fakeToken = "fakeToken123";
        login(fakeToken);
        navigate("/dashboard");
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );

}

export default Login;