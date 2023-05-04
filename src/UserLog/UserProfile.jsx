import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

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
          <p className="text-sm text-gray-600 mt-2">Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
