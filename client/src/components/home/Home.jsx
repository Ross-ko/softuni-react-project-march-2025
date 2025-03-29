import React from "react";

export default function Home() {
    return (
        <>
            {/* Us Section */}
            <section className="us_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>Why Choose Us</h2>
                    </div>
                    <div className="us_container">
                        <div className="box">
                            <div className="img-box">
                                <img src="images/u-1.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>QUALITY EQUIPMENT</h5>
                                <p>
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/u-2.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>HEALTHY NUTRITION PLAN</h5>
                                <p>
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/u-3.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>SHOWER SERVICE</h5>
                                <p>
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src="images/u-4.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>UNIQUE TO YOUR NEEDS</h5>
                                <p>
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Section */}
            <section className="client_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>What Says Our Customers</h2>
                    </div>
                    <div
                        id="carouselExample2Indicators"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselExample2Indicators"
                                data-slide-to={0}
                                className="active"
                            ></li>
                            <li
                                data-target="#carouselExample2Indicators"
                                data-slide-to={1}
                            ></li>
                            <li
                                data-target="#carouselExample2Indicators"
                                data-slide-to={2}
                            ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="images/client.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Consectetur</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="images/client.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Consectetur</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="images/client.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Consectetur</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Result Section */}
            <section className="result_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 px-0">
                            <div className="img-box">
                                <img src="images/result-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <div className="detail-box">
                                <h2>
                                    BUILT TO BRING <br />
                                    BEST RESULTS
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                </p>
                                <a href="">Get A Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="info_section layout_padding2-top">
                <div className="container">
                    <div className="info_form">
                        <h4>Our Newsletter</h4>
                        <form action="">
                            <input type="text" placeholder="Enter your email" />
                            <div className="d-flex justify-content-end">
                                <button>subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h6>About Energym</h6>
                            <p>
                                consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation u
                            </p>
                        </div>
                        <div className="col-md-2 offset-md-1">
                            <h6>Menus</h6>
                            <ul>
                                <li className="active">
                                    <a className="" href="index.html">
                                        Home{" "}
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </a>
                                </li>
                                <li className="">
                                    <a className="" href="about.html">
                                        About
                                    </a>
                                </li>
                                <li className="">
                                    <a className="" href="service.html">
                                        Services
                                    </a>
                                </li>
                                <li className="">
                                    <a className="" href="#contactSection">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="">
                                    <a className="" href="#">
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Useful Links</h6>
                            <ul>
                                <li>
                                    <a href="">Adipiscing</a>
                                </li>
                                <li>
                                    <a href="">Elit, sed</a>
                                </li>
                                <li>
                                    <a href="">do Eiusmod</a>
                                </li>
                                <li>
                                    <a href="">Tempor</a>
                                </li>
                                <li>
                                    <a href="">incididunt</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Contact Us</h6>
                            <div className="info_link-box">
                                <a href="">
                                    <img
                                        src="images/location-white.png"
                                        alt=""
                                    />
                                    <span> No.123, loram ipusm</span>
                                </a>
                                <a href="">
                                    <img src="images/call-white.png" alt="" />
                                    <span>+01 12345678901</span>
                                </a>
                                <a href="">
                                    <img src="images/mail-white.png" alt="" />
                                    <span> demo123@gmail.com</span>
                                </a>
                            </div>
                            <div className="info_social">
                                <div>
                                    <a href="">
                                        <img
                                            src="images/facebook-logo-button.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img
                                            src="images/twitter-logo-button.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img src="images/linkedin.png" alt="" />
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img
                                            src="images/instagram.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
