import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Register = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    if (password.length < 6) {
      setError("password must be atleast 6 characters.");
      return;
    }
    registerUser(email, password)
      .then((result) => {
        const registeredUser = result.user;
        console.log(registeredUser);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100">
      <h1 className="text-2xl font-bold pb-4">Register</h1>
      <div className="w-full max-w-md">
        <form
          onSubmit={handleRegister}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image url
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="text"
              type="text"
              placeholder="Image url"
              name="image"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={`${!showPass ? "password" : "text"}`}
              name="password"
              placeholder="******************"
              required
            />
            <div className="absolute right-3 bottom-[6px]">
              {!showPass && (
                <p
                  onClick={() => setShowPass(true)}
                  className="cursor-pointer text-lg text-gray-500"
                >
                  <FontAwesomeIcon icon={faEye} />
                </p>
              )}

              {showPass && (
                <p
                  onClick={() => setShowPass(false)}
                  className="cursor-pointer text-lg text-gray-500"
                >
                  <FontAwesomeIcon icon={faEyeSlash} />
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-[#FE3A4A] hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              value="Register"
            />
            <p>
              <span className="text-sm">Already have an account?</span>
              <Link
                to={"/login"}
                className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-400"
                href="#"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <p className="text-sm text-red-500">{error}</p>
    </div>
  );
};

export default Register;
