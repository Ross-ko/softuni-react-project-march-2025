export default function Header() {
    return (
        <header>
            <a id="logo" href="#">
                <img id="logo" src="/images/logo.png" alt="img" />
            </a>
            <nav>
                <div>
                    <a href="#">Market</a>
                </div>

                {/* <!-- Logged-in users --> */}
                <div className="user">
                    <a href="#">Sell</a>
                    <a href="#">Logout</a>
                </div>

                {/* <!-- Guest users --> */}
                <div className="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    );
}
