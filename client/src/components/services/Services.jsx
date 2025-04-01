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
              <Link to="/catalog">
                <img src="images/link.png" alt="Link" />
              </Link>
              <h6>CROSSFIT TRAINING</h6>
            </div>
          </div>
          <div className="box">
            <img src="images/s-2.jpg" alt="FITNESS" />
            <h6 className="visible_heading">FITNESS</h6>
            <div className="link_box">
              <Link to="/catalog">
                <img src="images/link.png" alt="Link" />
              </Link>
              <h6>FITNESS</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
