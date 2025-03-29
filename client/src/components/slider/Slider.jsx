import { Link } from "react-router-dom";

export default function Slider() {
    return (
        <section className="slider_section position-relative">
            <div className="container">
                <div className="custom_nav2">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <div className="d-flex flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">
                                            Home{" "}
                                            <span className="sr-only">
                                                (current)
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">
                                            About{" "}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/service"
                                        >
                                            Services{" "}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/contact"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/register"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout">
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                    <button
                                        className="btn my-2 my-sm-0 nav_search-btn"
                                        type="submit"
                                    />
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="slider_container">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={0}
                            className="active"
                        />
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={1}
                        />
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={2}
                        />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                                        <div className="detail-box">
                                            <h2>Get Your Body</h2>
                                            <h1>Fitness Here</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam
                                            </p>
                                            <div className="btn-box">
                                                <Link
                                                    to="/read-more"
                                                    className="btn-1"
                                                >
                                                    Read More
                                                </Link>
                                                <Link
                                                    to="/quote"
                                                    className="btn-2"
                                                >
                                                    Get A Quote
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                                        <div className="detail-box">
                                            <h2>Get Your Body</h2>
                                            <h1>Fitness Here</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam
                                            </p>
                                            <div className="btn-box">
                                                <Link
                                                    to="/read-more"
                                                    className="btn-1"
                                                >
                                                    Read More
                                                </Link>
                                                <Link
                                                    to="/quote"
                                                    className="btn-2"
                                                >
                                                    Get A Quote
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                                        <div className="detail-box">
                                            <h2>Get Your Body</h2>
                                            <h1>Fitness Here</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam
                                            </p>
                                            <div className="btn-box">
                                                <Link
                                                    to="/read-more"
                                                    className="btn-1"
                                                >
                                                    Read More
                                                </Link>
                                                <Link
                                                    to="/quote"
                                                    className="btn-2"
                                                >
                                                    Get A Quote
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
