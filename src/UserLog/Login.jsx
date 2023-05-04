import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const { login, handleGoogleLogin, handleGithubLogin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  console.log(error);
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    if (error === "Firebase: Error (auth/user-not-found).") {
      setError("User not found.Please Register.");
      return;
    } else if (error === "Firebase: Error (auth/wrong-password).") {
      setError("Wrong password.");
      return;
    }
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User not found.Please Register.");
        } else if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Wrong password.");
        }
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100">
      <h1 className="text-2xl font-bold py-4">Log in</h1>
      <div className="w-full max-w-md">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
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
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="******************"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              value="Log In"
            />
            <p>
              <span className="text-sm">New to Chefs Galore?</span>
              <Link
                to={"/register"}
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
      <p className="text-red-500 text-sm">{error}</p>

      <div className="mt-4 space-x-2">
        <button
          onClick={handleGoogleLogin}
          className="border-2 border-[#FE3A4A] text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline "
        >
          Continue with Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="border-2 border-[#FE3A4A] text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline "
        >
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
