import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const UserProfile = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  if (user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex items-center justify-center h-48 bg-gray-300">
            <img
              className="h-32 w-32 rounded-full object-cover"
              src="https://source.unsplash.com/random"
              alt="Profile avatar"
            />
          </div>
          <div className="px-4 py-2">
            <h1 className="text-2xl font-bold text-gray-800">User Name</h1>
            <p className="text-sm text-gray-600 mt-2">New York, NY</p>
            <p className="text-sm text-gray-600 mt-2">Email: {user?.email}</p>
          </div>
          <div className="text-right">
            <button
              onClick={handleLogout}
              className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};

export default UserProfile;
