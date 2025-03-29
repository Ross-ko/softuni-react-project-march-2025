import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header_section">
            <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <Link className="navbar-brand" to="/">
                        <img src="images/logo.png" alt="EnerGym Logo" />
                        <span>EnerGym</span>
                    </Link>
                    <div className="contact_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://www.google.com/maps/place/%D0%90%D0%B9%D1%84%D0%B5%D0%BB%D0%BE%D0%B2%D0%B0%D1%82%D0%B0+%D0%BA%D1%83%D0%BB%D0%B0/@48.8566222,2.2893505,17z/data=!4m10!1m2!2m1!1seiffel+tower!3m6!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813!15sCgxlaWZmZWwgdG93ZXJaDiIMZWlmZmVsIHRvd2VykgETaGlzdG9yaWNhbF9sYW5kbWFya-ABAA!16zL20vMDJqODE?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="images/location.png"
                                        alt="Location"
                                    />
                                    <span>Location</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    <img src="images/call.png" alt="Call" />
                                    <span>Call : + 359 123456789</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=EnerGym@Gym.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="images/envelope.png"
                                        alt="Email"
                                    />
                                    <span>EnerGym@Gym.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
