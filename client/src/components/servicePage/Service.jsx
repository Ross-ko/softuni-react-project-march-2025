import React from 'react';
import { Link } from 'react-router-dom';

export default function Service() {
    return (
            <section className="service_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>Our Services</h2>
                    </div>
                    <div className="service_container">
                        <div className="box">
                            <img src="images/s-1.jpg" alt="CROSSFIT TRAINING" />
                            <h6 className="visible_heading">CROSSFIT TRAINING</h6>
                            <div className="link_box">
                                <a href="#">
                                    <img src="images/link.png" alt="Link" />
                                </a>
                                <h6>CROSSFIT TRAINING</h6>
                            </div>
                        </div>
                        <div className="box">
                            <img src="images/s-2.jpg" alt="FITNESS" />
                            <h6 className="visible_heading">FITNESS</h6>
                            <div className="link_box">
                                <a href="#">
                                    <img src="images/link.png" alt="Link" />
                                </a>
                                <h6>FITNESS</h6>
                            </div>
                        </div>
                        <div className="box">
                            <img src="images/s-3.jpg" alt="DYNAMIC STRENGTH TRAINING" />
                            <h6 className="visible_heading">DYNAMIC STRENGTH TRAINING</h6>
                            <div className="link_box">
                                <a href="#">
                                    <img src="images/link.png" alt="Link" />
                                </a>
                                <h6>DYNAMIC STRENGTH TRAINING</h6>
                            </div>
                        </div>
                        <div className="box">
                            <img src="images/s-4.jpg" alt="HEALTH" />
                            <h6 className="visible_heading">HEALTH</h6>
                            <div className="link_box">
                                <a href="#">
                                    <img src="images/link.png" alt="Link" />
                                </a>
                                <h6>HEALTH</h6>
                            </div>
                        </div>
                        <div className="box">
                            <img src="images/s-5.jpg" alt="WORKOUT" />
                            <h6 className="visible_heading">WORKOUT</h6>
                            <div className="link_box">
                                <a href="#">
                                    <img src="images/link.png" alt="Link" />
                                </a>
                                <h6>WORKOUT</h6>
                            </div>
                        </div>
                        <div className="box">
                            <img src="images/s-6.jpg" alt="STRATEGIES" />
                            <h6 className="visible_heading">STRATEGIES</h6>
                            <div className="link_box">
                                <a href="#">
                                    <img src="images/link.png" alt="Link" />
                                </a>
                                <h6>STRATEGIES</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}
