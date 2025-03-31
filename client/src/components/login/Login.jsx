import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../authService/authService.js";
import { UserContext } from "../../context/UserContext.jsx";
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
                <form onSubmit={handleSubmit}>
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
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
}
