import { Link, useNavigate } from "react-router";

export default function Login({ onLogin }) {
    const navigate = useNavigate();

    const loginAction = (formData) => {
        const email = formData.get("email");

        onLogin(email);

        navigate("/");
    };

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
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered?{" "}
                        <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}
