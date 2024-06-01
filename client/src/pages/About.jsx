import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/Auth";

export default function About() {
  const { user } = useAuth();
  return (
    <>
      <div className="container">
        <section className="main-content">
          <div className="main-info">
            <p>Welcome {`${user.username}`} to my website,</p>
            <h1>Why Choose Us?</h1>
            <p>
              Expertise: Our team consists of experienced IT professionals who
              are passionate about staying up-to-date with the latest industry
              trends.
            </p>

            <p>
              Customization: We understand that every business is unique.That's
              why we create solutions that are tailored to your specific needs
              and goals.
            </p>

            <p>
              Customer-Centric Approach: We prioritize your satisfaction and
              provide top-notch support to address your IT concerns.
            </p>

            <p>
              Affordability: We offer competitive pricing without compromising
              on the quality of our services.
            </p>

            <p>
              Reliability: Count on us to be there when you need us.We're
              commited to ensuring your IT environment is reliable and availabe
              24/7.
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
            <img src="/images/about.png" width="400" height="400" />
          </div>
        </section>
        <section>
          <div className="box">
            <div>
              <h2>50+</h2>
              <p>company registers</p>
            </div>
            <div>
              <h2>150+</h2>
              <p>project done</p>
            </div>
            <div>
              <h2>250+</h2>
              <p>happy clients</p>
            </div>
            <div>
              <h2>650k+</h2>
              <p>youtube subscribers</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
