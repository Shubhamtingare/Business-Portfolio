import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container">
        <section className="main-content">
          <div className="main-info">
            <p>We are the world's best IT company.</p>
            <h1>Welcome to Shubham Technical</h1>
            <p>
              Are yo ready to take your business to the next level with
              cutting-edge IT solutions? Look no further! At Shubham Technical.
              We specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div className="mt-5">
              <NavLink to="/contact">
                <button className="btn btn-primary btn-info">
                  connect now
                </button>
              </NavLink>
              <NavLink to="/about">
                <button className="btn btn-secondary text-capitalize">
                  learn more
                </button>
              </NavLink>
            </div>
          </div>
          <div className="main-img">
            <img src="/images/home.png" width="400" height="400" />
          </div>
        </section>
        <section>
          <div className="box">
            <div>
              <h2>50+</h2>
              <p>registered companies</p>
            </div>
            <div>
              <h2>10,000+</h2>
              <p>happy clients</p>
            </div>
            <div>
              <h2>500+</h2>
              <p>well known developers</p>
            </div>
            <div>
              <h2>24/7</h2>
              <p>service</p>
            </div>
          </div>
        </section>
        <section className="main-content">
          <div className="main-img">
            <img src="/images/ai.png" width="400" height="400" />
          </div>
          <div className="main-info">
            <p>We are here to help you.</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Shubham Technical can help your business thrive
              in the digital age.
            </p>
            <div className="mt-5">
              <NavLink to="/contact">
                <button className="btn btn-primary btn-info">
                  connect now
                </button>
              </NavLink>
              <NavLink to="/about">
                <button className="btn btn-secondary text-capitalize">
                  learn more
                </button>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
