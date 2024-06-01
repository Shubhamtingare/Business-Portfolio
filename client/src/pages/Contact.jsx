import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

const defaultContactData = {
  username: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [contact, setContact] = useState(defaultContactData);

  const { user } = useAuth();

  const [userData, setUserData] = useState(true);

  if (userData && user) {
    console.log(user);
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleContactForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/user/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      const res_data = await response.json();
      if (response.ok) {
        toast.success("Message successfully submitted...");
        setContact(defaultContactData);
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log("Error while fetching user message", error);
    }
  };

  return (
    <>
      <div>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <NavLink
              href="/"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                className="w-8 h-8 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
              />
              Contact Us
            </NavLink>
            <div className="w-full bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleContactForm}
                >
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Username
                    </label>
                    <input
                      type="username"
                      name="username"
                      id="username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={contact.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={contact.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={contact.message}
                      onChange={handleInput}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-black bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d631.531688358854!2d74.92615217947444!3d17.52955480788045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3ff8971de3fff%3A0x2ce6765694d60792!2zR3JhbXBhbmNoYXlhdCjgpJfgpY3gpLDgpL7gpK7gpKrgpILgpJrgpL7gpK_gpKQpIOCkpuCkv-CkmOCkvuCkguCkmuClgA!5e0!3m2!1sen!2sin!4v1705731945457!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
