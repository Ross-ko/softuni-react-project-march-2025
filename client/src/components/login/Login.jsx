import { useActionState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login({ onLogin }) {
    const navigate = useNavigate();

    const loginHandler = (previousState, formData) => {
        const values = Object.fromEntries(formData);

        onLogin(values.email);

        navigate("/");

        return values;
    };

    const [values, loginAction, isPending] = useActionState(loginHandler, {
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
                    <button type="submit" disabled={isPending} >login</button>
                    <p className="message">
                        Not registered?{" "}
                        <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}
