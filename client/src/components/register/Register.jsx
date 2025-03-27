import { Link, useNavigate } from "react-router";
import { useRegister } from "../../api/authApi.js";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Register() {
    const { register } = useRegister();
    const { userLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const registerHandler = async (formData) => {
        const { email, password } = Object.fromEntries(formData);

        const rePass = formData.get("re-password");

        if (password !== rePass) {
            console.log("Pass is shit");
            return;
        }
        const authData = await register(email, password);

        userLoginHandler(authData);

        navigate("/");
    };

    return (
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form className="register-form" action={registerHandler}>
                    <input
                        type="text"
                        name="email"
                        id="register-email"
                        placeholder="email"
                    />
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                    />
                    <input
                        type="password"
                        name="re-password"
                        id="repeat-password"
                        placeholder="repeat password"
                    />
                    <button type="submit">register</button>
                    <p className="message">
                        Already registered? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}
