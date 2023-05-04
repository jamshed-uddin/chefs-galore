import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg ">
        <div className="flex items-center justify-center h-48 bg-gray-300">
          <img
            className="h-32 w-32 rounded-full object-cover"
            src={`${
              user
                ? "https://i.ibb.co/cDQ2DQH/user.png"
                : "https://i.ibb.co/PCJCS96/blank.jpg"
            }`}
            alt="Profile avatar"
          />
        </div>
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {user ? "Luke Skywalker" : "User Name"}
          </h1>

          <p className=" text-gray-600 mt-2">Email: {user?.email}</p>
          <div className="text-right">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <button>
                <Link
                  to={"/login"}
                  className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  cursor-pointer"
                >
                  Login
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
