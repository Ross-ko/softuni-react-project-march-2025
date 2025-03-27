import { useActionState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi.js";
import { UserContext } from "../../context/UserContext";

export default function Login() {
    const navigate = useNavigate();
    const {userLoginHandler} = useContext(UserContext)
    const { login } = useLogin();

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        const authData = await login(values.email, values.password);

        userLoginHandler(authData);

        navigate("/");

        return values;
    };

    const [_, loginAction, isPending] = useActionState(loginHandler, {
        email: "",
        password: "",
    });

    return (
        <section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" action={loginAction}>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                    />
                    <button type="submit" disabled={isPending}>
                        login
                    </button>
                    <p className="message">
                        Not registered?{" "}
                        <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}
