import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const { authToken } = useAuth();

  const getContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });
      if (response.ok) {
        const res_data = await response.json();
        setContacts(res_data);
      } else {
        toast.error("Error while fetching contacts data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authToken,
          },
        }
      );
      if (response.ok) {
        getContacts();
        toast.success("Contact deleted successfully");
      } else {
        toast.error("Contact cannot deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-100 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3 ">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                message
              </th>

              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((curContact, index) => {
              return (
                <>
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {curContact.username}
                    </th>
                    <td className="px-6 py-4">{curContact.email}</td>
                    <td className="px-6 py-4">{curContact.message}</td>

                    <td className="px-6 py-4">
                      <button
                        className="btn btn-primary font-medium text-white-600 dark:text-white-500 "
                        onClick={() => deleteContact(curContact._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
