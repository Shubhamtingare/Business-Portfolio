import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/Auth";
import { Link } from "react-router-dom";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const { authToken } = useAuth();

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });
      // console.log(response);
      if (response.ok) {
        const res_data = await response.json();
        // console.log("response data:", res_data);
        setUsers(res_data);
      } else {
        toast.error("Error while fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authToken,
          },
        }
      );
      if (response.ok) {
        getUsers();
        toast.success("User deleted successfully");
      } else {
        toast.error("User cannot deleted");
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Update
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser, index) => {
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
                      {curUser.username}
                    </th>
                    <td className="px-6 py-4">{curUser.email}</td>
                    <td className="px-6 py-4">{curUser.phone}</td>

                    <td className="px-6 py-4">
                      <Link
                        to={`/admin/users/${curUser._id}/edit`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="btn btn-primary font-medium text-white-600 dark:text-white-500 "
                        onClick={() => deleteUser(curUser._id)}
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
