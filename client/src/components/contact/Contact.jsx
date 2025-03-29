import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              <span>Get In Touch</span>
            </h2>
          </div>
          <div className="layout_padding2-top">
            <div className="row">
              <div className="col-md-6">
                <form action="">
                  <div className="contact_form-container">
                    <div>
                      <div>
                        <input type="text" placeholder="Name" />
                      </div>
                      <div>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <input type="text" placeholder="Phone Number" />
                      </div>
                      <div className="mt-5">
                        <input type="text" placeholder="Message" />
                      </div>
                      <div className="mt-5">
                        <button type="submit">Send</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div className="map_container">
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                      width="600"
                      height="300"
                      frameBorder="0"
                      style={{ border: 0, width: "100%", height: "100%" }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
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
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u
              </p>
            </div>
            <div className="col-md-2 offset-md-1">
              <h6>Menus</h6>
              <ul>
                <li className="active">
                  <Link to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>Useful Links</h6>
              <ul>
                <li>
                  <a href="#">Adipiscing</a>
                </li>
                <li>
                  <a href="#">Elit, sed</a>
                </li>
                <li>
                  <a href="#">do Eiusmod</a>
                </li>
                <li>
                  <a href="#">Tempor</a>
                </li>
                <li>
                  <a href="#">incididunt</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>Contact Us</h6>
              <div className="info_link-box">
                <a href="#">
                  <img src="images/location-white.png" alt="Location" />
                  <span> No.123, loram ipusm</span>
                </a>
                <a href="#">
                  <img src="images/call-white.png" alt="Call" />
                  <span>+01 12345678901</span>
                </a>
                <a href="#">
                  <img src="images/mail-white.png" alt="Email" />
                  <span> demo123@gmail.com</span>
                </a>
              </div>
              <div className="info_social">
                <div>
                  <a href="#">
                    <img src="images/facebook-logo-button.png" alt="Facebook" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="images/twitter-logo-button.png" alt="Twitter" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="images/linkedin.png" alt="LinkedIn" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="images/instagram.png" alt="Instagram" />
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
