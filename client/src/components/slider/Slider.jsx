export default function Slider() {
    return (
        <section className=" slider_section position-relative">
            <div className="container">
                <div className="custom_nav2">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
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
                            <div className="d-flex  flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item active">
                                        <a
                                            className="nav-link"
                                            href="index.html"
                                        >
                                            Home{" "}
                                            <span className="sr-only">
                                                (current)
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="about.html"
                                        >
                                            About{" "}
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="service.html"
                                        >
                                            Services{" "}
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="contact.html"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Login
                                        </a>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                    <button
                                        className="btn  my-2 my-sm-0 nav_search-btn"
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
                                                <a href="" className="btn-1">
                                                    Read More
                                                </a>
                                                <a href="" className="btn-2">
                                                    Get A Quote
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
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
                                                <a href="" className="btn-1">
                                                    Read More
                                                </a>
                                                <a href="" className="btn-2">
                                                    Get A Quote
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
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
                                                <a href="" className="btn-1">
                                                    Read More
                                                </a>
                                                <a href="" className="btn-2">
                                                    Get A Quote
                                                </a>
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
