import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className="container">
        <div className="error-content">
          <h1>404</h1>
          <h3>sorry!page not found.</h3>
          <p>
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it and we'll
            look into it.
          </p>
          <div className="mt-5">
            <NavLink to="/">
              <button className="btn btn-primary btn-info">Return Home</button>
            </NavLink>
            <NavLink to="/contact">
              <button className="btn btn-secondary text-capitalize">
                Report Problem
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
