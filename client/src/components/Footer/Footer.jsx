import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col mt-5 ">
      <footer className="bg-black rounded-lg shadow dark:bg-gray-800 my-lg-auto p-4 ">
        <div className="w-full  mx-auto p-4 md:flex md:items-center md:justify-between justify-content-center align-items-center ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center fs-6  ">
            © 2024
            <NavLink
              target="_blank"
              to="https://www.linkedin.com/in/shubham-tingare"
              className="hover:underline"
            >
              Shubham™
            </NavLink>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
