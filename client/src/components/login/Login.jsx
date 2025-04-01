import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../authService/authService.js";
import { UserContext } from "../../context/UserContext.jsx";
import { Link } from "react-router-dom";
import "./auth.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const { login } = useLogin();
    const { userLoginHandler } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!email || !password) {
            setError("All fields please!");
            return;
        }

        try {
            const authData = await login(email, password);

            if (!authData || !authData.accessToken) {
                setError("Wrong Input!");
                setPassword("");
                return;
            }

            userLoginHandler(authData);
            navigate("/");
        } catch (err) {
            setError("Error!");
            setPassword("");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                {error && <p className="error">{error}</p>}
                <p className="message">
                    Don't have account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
}
