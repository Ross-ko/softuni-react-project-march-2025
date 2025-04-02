import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRegister } from "../../authService/authService.js";
import { UserContext } from "../../context/UserContext";
import "./auth.css";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);

    const { register } = useRegister();
    const { userLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return mail.test(email);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!email || !validateEmail(email)) {
            setError("Please enter valid email address!");
            return;
          }

        if (!email || !password || !confirmPassword) {
            setError("All fields please!");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const authData = await register(email, password);

            if (!authData || !authData.accessToken) {
                setError("User already exists!");
                setPassword("");
                setConfirmPassword("");
                return;
            }

            userLoginHandler(authData);
            navigate("/");
        } catch (err) {
            console.error("Registration error:", err);
            setError(err.message || "Registration failed");
            setPassword("");
            setConfirmPassword("");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Register</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <input
                        type="text"
                        name="email"
                        id="register-email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="re-password"
                        id="repeat-password"
                        placeholder="repeat password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
                {error && <p className="error">{error}</p>}
                <p className="message">
                    Already registered? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}
