import { Link } from "react-router";

export default function Header() {
    return (
        <header>
            <Link id="logo" to="/">
                <img id="logo" src="/images/logo.png" alt="img" />
            </Link>
            <nav>
                <div>
                    <Link to="/market">Market</Link>
                </div>

                {/* <!-- Logged-in users --> */}
                <div className="user">
                    <Link to="/market/sell">Sell</Link>
                    <Link to="/logout">Logout</Link>
                </div>

                {/* <!-- Guest users --> */}
                <div className="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
}
